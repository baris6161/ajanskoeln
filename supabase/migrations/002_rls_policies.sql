alter table customers enable row level security;
alter table offers enable row level security;
alter table settings enable row level security;

create policy "auth users read customers"
on customers for select to authenticated using (true);
create policy "auth users write customers"
on customers for all to authenticated using (true) with check (true);

create policy "auth users read offers"
on offers for select to authenticated using (true);
create policy "auth users write offers"
on offers for all to authenticated using (true) with check (true);

create policy "auth users read settings"
on settings for select to authenticated using (true);
create policy "auth users write settings"
on settings for all to authenticated using (true) with check (true);
