-- Kredorium Supabase sxemasi
-- Supabase Dashboard -> SQL Editor bo'limida bir marta ishga tushiring.

create extension if not exists pgcrypto;

-- Profillar ---------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  xp integer not null default 0 check (xp >= 0),
  tests_completed integer not null default 0 check (tests_completed >= 0),
  correct_answers integer not null default 0 check (correct_answers >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Mavjud profillar jadvalini yangi ustunlar bilan to'ldirish
alter table public.profiles
  add column if not exists xp integer not null default 0 check (xp >= 0),
  add column if not exists tests_completed integer not null default 0 check (tests_completed >= 0),
  add column if not exists correct_answers integer not null default 0 check (correct_answers >= 0),
  add column if not exists updated_at timestamptz not null default now();

create index if not exists profiles_xp_idx on public.profiles (xp desc, updated_at asc);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- Reyting uchun barcha foydalanuvchi profillari ommaviy o'qiladi.
-- Jadvalda email yoki boshqa maxfiy maydonlar saqlanmaydi.
drop policy if exists "profiles_select_public" on public.profiles;
create policy "profiles_select_public" on public.profiles
  for select using (true);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

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

create or replace function public.increment_profile_stats(
  p_xp integer default 0,
  p_tests integer default 0,
  p_correct integer default 0
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_profile public.profiles;
begin
  if v_user_id is null then
    raise exception 'Authentication required' using errcode = '28000';
  end if;

  insert into public.profiles (id, name, xp, tests_completed, correct_answers, updated_at)
  values (
    v_user_id,
    coalesce(
      (select nullif(u.raw_user_meta_data ->> 'name', '') from auth.users u where u.id = v_user_id),
      (select nullif(u.raw_user_meta_data ->> 'full_name', '') from auth.users u where u.id = v_user_id),
      (select split_part(coalesce(u.email, ''), '@', 1) from auth.users u where u.id = v_user_id),
      ''
    ),
    greatest(coalesce(p_xp, 0), 0),
    greatest(coalesce(p_tests, 0), 0),
    greatest(coalesce(p_correct, 0), 0),
    now()
  )
  on conflict (id) do update
    set xp = public.profiles.xp + greatest(coalesce(p_xp, 0), 0),
        tests_completed = public.profiles.tests_completed + greatest(coalesce(p_tests, 0), 0),
        correct_answers = public.profiles.correct_answers + greatest(coalesce(p_correct, 0), 0),
        updated_at = now()
  returning * into v_profile;

  return v_profile;
end;
$$;

revoke all on function public.increment_profile_stats(integer, integer, integer) from public;
grant execute on function public.increment_profile_stats(integer, integer, integer) to authenticated;

-- Test tarixi -------------------------------------------------------------

create table if not exists public.quiz_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  category_id text not null default 'mixed',
  category_title text not null default 'Aralash savollar',
  category_group text not null default 'Arena',
  total_answered integer not null default 0 check (total_answered >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  wrong_count integer not null default 0 check (wrong_count >= 0),
  xp integer not null default 0 check (xp >= 0),
  accuracy integer not null default 0 check (accuracy between 0 and 100),
  created_at timestamptz not null default now()
);

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
