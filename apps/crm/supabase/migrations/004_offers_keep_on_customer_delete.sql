do $$
begin
  if exists (
    select 1
    from information_schema.table_constraints
    where table_name = 'offers'
      and constraint_type = 'FOREIGN KEY'
      and constraint_name = 'offers_customer_id_fkey'
  ) then
    alter table offers drop constraint offers_customer_id_fkey;
  end if;
end $$;

alter table offers
alter column customer_id drop not null;

alter table offers
add constraint offers_customer_id_fkey
foreign key (customer_id)
references customers(id)
on delete set null;
