create table if not exists public.guestbook_entries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  message text not null check (char_length(btrim(message)) between 1 and 500),
  created_at timestamptz not null default now()
);

alter table public.guestbook_entries enable row level security;

revoke all on table public.guestbook_entries from anon, authenticated;
grant select, insert on table public.guestbook_entries to anon, authenticated;

create policy "Guestbook entries are visible to everyone"
  on public.guestbook_entries for select
  to anon, authenticated
  using (true);

create policy "Visitors may sign the guestbook"
  on public.guestbook_entries for insert
  to anon, authenticated
  with check (
    char_length(btrim(name)) between 1 and 60
    and char_length(btrim(message)) between 1 and 500
  );
