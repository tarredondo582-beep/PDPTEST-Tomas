-- Pueblo de Palmas Phase 1 Borrower Portal Setup
-- Run this in Supabase SQL Editor.
create table if not exists authorized_borrowers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  borrower_name text,
  loan_number text,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists portal_requests (
  id uuid primary key default gen_random_uuid(),
  borrower_email text not null,
  request_type text not null,
  loan_number text,
  borrower_name text,
  phone text,
  details text not null,
  status text default 'Pending Review',
  source text default 'website_portal',
  created_at timestamptz default now()
);

alter table authorized_borrowers enable row level security;
alter table portal_requests enable row level security;

-- Allow signed-in users to insert their own requests only if their email is on the authorized list.
create policy "authorized users can submit requests" on portal_requests
for insert to authenticated
with check (
  borrower_email = auth.jwt()->>'email'
  and exists (select 1 from authorized_borrowers ab where lower(ab.email)=lower(auth.jwt()->>'email') and ab.active=true)
);

-- Optional: allow users to see only their own submitted requests.
create policy "users can read own requests" on portal_requests
for select to authenticated
using (borrower_email = auth.jwt()->>'email');
