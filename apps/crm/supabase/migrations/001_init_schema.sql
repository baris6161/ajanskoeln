create extension if not exists "pgcrypto";

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  firma text not null,
  yetkili text not null,
  adres text not null,
  tel text not null,
  email text not null,
  language text default 'tr',
  notizen text,
  created_at timestamp default now()
);

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  offer_number text unique not null,
  customer_id uuid references customers(id) on delete cascade,
  projekt text not null,
  etkinlik text not null,
  tarih_von date not null,
  tarih_bis date not null,
  konum text not null,
  angebotstext text not null,
  leistungen jsonb not null default '[]'::jsonb,
  gesamt numeric not null default 0,
  status text default 'entwurf',
  sent_at timestamp,
  created_at timestamp default now()
);

create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text not null
);
