-- Zehnly Supabase sxemasi
-- Supabase Dashboard -> SQL Editor bo'limida bir marta ishga tushiring.

create extension if not exists pgcrypto;

-- Profillar ---------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

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
  values (new.id, coalesce(new.raw_user_meta_data ->> 'name', ''))
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

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
