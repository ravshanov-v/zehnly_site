

create extension if not exists pgcrypto;

-- Profillar ---------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  xp integer not null default 0,
  tests_completed integer not null default 0,
  correct_answers integer not null default 0,
  total_answers integer not null default 0,
  daily_xp integer not null default 0,
  daily_xp_date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Mavjud profillar jadvalini yangi ustunlar bilan to'ldirish
alter table public.profiles
  add column if not exists xp integer not null default 0,
  add column if not exists tests_completed integer not null default 0,
  add column if not exists correct_answers integer not null default 0,
  add column if not exists total_answers integer not null default 0,
  add column if not exists daily_xp integer not null default 0,
  add column if not exists daily_xp_date date not null default current_date,
  add column if not exists updated_at timestamptz not null default now();

-- Eski qatorlarda aniqlik 100% dan oshmasligi uchun total_answers to'ldiriladi.
update public.profiles
set total_answers = correct_answers
where total_answers < correct_answers;

-- Qat'iy cheklovlar (mavjud bo'lsa qayta qo'shilmaydi).
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_xp_nonnegative'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_xp_nonnegative check (xp >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_tests_nonnegative'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_tests_nonnegative check (tests_completed >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_correct_nonnegative'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_correct_nonnegative check (correct_answers >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_total_nonnegative'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_total_nonnegative check (total_answers >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_correct_within_total'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_correct_within_total check (correct_answers <= total_answers);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_daily_xp_nonnegative'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_daily_xp_nonnegative check (daily_xp >= 0);
  end if;
end $$;

create index if not exists profiles_xp_idx
  on public.profiles (xp desc, updated_at asc);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- Reyting uchun barcha foydalanuvchi profillari ommaviy o'qiladi.
-- Jadvalda email yoki boshqa maxfiy maydonlar saqlanmaydi.
drop policy if exists "profiles_select_public" on public.profiles;
create policy "profiles_select_public" on public.profiles
  for select using (true);

-- Yangi profil faqat nol statistika bilan yaratilishi mumkin.
drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (
    auth.uid() = id
    and xp = 0
    and tests_completed = 0
    and correct_answers = 0
    and total_answers = 0
    and daily_xp = 0
  );

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Muhim: brauzerdan to'g'ridan-to'g'ri XP yozish taqiqlanadi.
-- Foydalanuvchi faqat ismini yangilashi mumkin; statistika faqat RPC orqali.
revoke insert, update, delete on public.profiles from anon, authenticated;
grant select on public.profiles to anon, authenticated;
grant insert (id, name) on public.profiles to authenticated;
grant update (name) on public.profiles to authenticated;

-- Yangi foydalanuvchi profili ----------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name)
  values (
    new.id,
    coalesce(
      nullif(new.raw_user_meta_data ->> 'name', ''),
      nullif(new.raw_user_meta_data ->> 'full_name', ''),
      split_part(coalesce(new.email, ''), '@', 1),
      ''
    )
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- XP va statistika (atomik) ----------------------------------------------

-- Brauzer XP, to'g'ri javoblar va testlar sonini yuboradi, lekin ular
-- server tomonda tekshiriladi va cheklanadi:
--   * jami savollar 0..5000 oralig'ida;
--   * to'g'ri javoblar jamidan oshmaydi;
--   * har bir to'g'ri javob uchun maksimal 300 XP;
--   * kunlik maksimal 50 000 XP.
create or replace function public.increment_quiz_stats(
  p_correct integer default 0,
  p_total integer default 0,
  p_xp integer default 0,
  p_tests integer default 1
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_today date := (now() at time zone 'utc')::date;
  v_total integer;
  v_correct integer;
  v_tests integer;
  v_xp integer;
  v_daily_xp integer := 0;
  v_daily_date date;
  v_profile public.profiles;
begin
  if v_user_id is null then
    raise exception 'Authentication required' using errcode = '28000';
  end if;

  v_total := greatest(least(coalesce(p_total, 0), 5000), 0);

  if v_total <= 0 then
    raise exception 'Quiz total must be positive' using errcode = '22023';
  end if;

  v_correct := greatest(least(coalesce(p_correct, 0), v_total), 0);
  v_tests := greatest(least(coalesce(p_tests, 1), v_total), 0);
  v_xp := greatest(least(coalesce(p_xp, 0), v_correct * 300), 0);

  select daily_xp, daily_xp_date
    into v_daily_xp, v_daily_date
  from public.profiles
  where id = v_user_id;

  if not found or v_daily_date is distinct from v_today then
    v_daily_xp := 0;
  end if;

  v_xp := least(v_xp, greatest(50000 - v_daily_xp, 0));

  insert into public.profiles (
    id,
    name,
    xp,
    tests_completed,
    correct_answers,
    total_answers,
    daily_xp,
    daily_xp_date,
    updated_at
  )
  values (
    v_user_id,
    coalesce(
      (select nullif(u.raw_user_meta_data ->> 'name', '') from auth.users u where u.id = v_user_id),
      (select nullif(u.raw_user_meta_data ->> 'full_name', '') from auth.users u where u.id = v_user_id),
      (select split_part(coalesce(u.email, ''), '@', 1) from auth.users u where u.id = v_user_id),
      ''
    ),
    v_xp,
    v_tests,
    v_correct,
    v_total,
    v_xp,
    v_today,
    now()
  )
  on conflict (id) do update
    set xp = public.profiles.xp + excluded.xp,
        tests_completed = public.profiles.tests_completed + excluded.tests_completed,
        correct_answers = public.profiles.correct_answers + excluded.correct_answers,
        total_answers = greatest(public.profiles.total_answers, public.profiles.correct_answers)
          + excluded.total_answers,
        daily_xp = case
          when public.profiles.daily_xp_date = v_today
            then public.profiles.daily_xp + excluded.daily_xp
          else excluded.daily_xp
        end,
        daily_xp_date = v_today,
        updated_at = now()
  returning * into v_profile;

  return v_profile;
end;
$$;

revoke all on function public.increment_quiz_stats(integer, integer, integer, integer) from public;
revoke all on function public.increment_quiz_stats(integer, integer, integer, integer) from anon;
grant execute on function public.increment_quiz_stats(integer, integer, integer, integer) to authenticated;

-- Eski, cheklovsiz RPC olib tashlanadi.
drop function if exists public.increment_profile_stats(integer, integer, integer);

-- Reytingdagi o'rin (top 50 dan tashqaridagi foydalanuvchi uchun) ----------

create or replace function public.get_profile_rank(p_user_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
stable
as $$
declare
  v_xp integer;
  v_updated timestamptz;
  v_rank integer;
begin
  if p_user_id is null then
    return null;
  end if;

  select xp, updated_at
    into v_xp, v_updated
  from public.profiles
  where id = p_user_id;

  if not found then
    return null;
  end if;

  select count(*) + 1
    into v_rank
  from public.profiles
  where xp > v_xp
     or (xp = v_xp and updated_at < v_updated);

  return v_rank;
end;
$$;

revoke all on function public.get_profile_rank(uuid) from public;
grant execute on function public.get_profile_rank(uuid) to authenticated;

-- Test tarixi -------------------------------------------------------------

create table if not exists public.quiz_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  category_id text not null default 'mixed',
  category_title text not null default 'Aralash savollar',
  category_group text not null default 'Arena',
  total_answered integer not null default 0,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  xp integer not null default 0,
  accuracy integer not null default 0,
  created_at timestamptz not null default now()
);

-- Eski qatorlarni cheklovlarga moslashtirish.
update public.quiz_history
set total_answered = greatest(total_answered, correct_count, wrong_count)
where total_answered < greatest(correct_count, wrong_count);

update public.quiz_history
set xp = least(xp, correct_count * 300)
where xp > correct_count * 300;

update public.quiz_history
set accuracy = least(greatest(accuracy, 0), 100)
where accuracy < 0 or accuracy > 100;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_total_nonnegative'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_total_nonnegative check (total_answered >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_correct_nonnegative'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_correct_nonnegative check (correct_count >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_wrong_nonnegative'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_wrong_nonnegative check (wrong_count >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_correct_within_total'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_correct_within_total check (correct_count <= total_answered);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_wrong_within_total'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_wrong_within_total check (wrong_count <= total_answered);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_xp_nonnegative'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_xp_nonnegative check (xp >= 0);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_xp_cap'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_xp_cap check (xp <= correct_count * 300);
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'quiz_history_accuracy_range'
      and conrelid = 'public.quiz_history'::regclass
  ) then
    alter table public.quiz_history
      add constraint quiz_history_accuracy_range check (accuracy between 0 and 100);
  end if;
end $$;

create index if not exists quiz_history_user_date_idx
  on public.quiz_history (user_id, created_at desc);

alter table public.quiz_history enable row level security;

drop policy if exists "quiz_history_own" on public.quiz_history;
create policy "quiz_history_own" on public.quiz_history
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Sevimlilar --------------------------------------------------------------

create table if not exists public.favorites (
  user_id uuid not null references auth.users (id) on delete cascade,
  center_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, center_id)
);

alter table public.favorites enable row level security;

drop policy if exists "favorites_own" on public.favorites;
create policy "favorites_own" on public.favorites
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Fan progressi -----------------------------------------------------------

create table if not exists public.quiz_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  category_id text not null,
  question_order text[] not null default '{}',
  cursor integer not null default 0 check (cursor >= 0),
  cycles integer not null default 0 check (cycles >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, category_id)
);

alter table public.quiz_progress enable row level security;

drop policy if exists "quiz_progress_own" on public.quiz_progress;
create policy "quiz_progress_own" on public.quiz_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
