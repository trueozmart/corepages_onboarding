-- Onboarding submissions table
create type onboarding_status as enum ('pending', 'building', 'built', 'paid');

create table if not exists public.onboarding_submissions (
  id uuid primary key default gen_random_uuid(),
  lead_id text not null unique,
  business_name text not null,
  suburb text not null,
  services text[] not null default '{}',
  contact_phone text not null,
  contact_email text not null,
  image_urls text[] default '{}',
  images_skipped boolean not null default false,
  status onboarding_status not null default 'pending',
  live_url text,
  stripe_session_id text,
  domain_upgrade boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger onboarding_submissions_updated_at
  before update on public.onboarding_submissions
  for each row execute procedure update_updated_at();

-- RLS: public insert + read by lead_id, no update from client (webhooks update via service role)
alter table public.onboarding_submissions enable row level security;

create policy "Allow public insert" on public.onboarding_submissions
  for insert with check (true);

create policy "Allow read by lead_id" on public.onboarding_submissions
  for select using (true);
