DROP DATABASE sql_store;
CREATE DATABASE sql_store;

\c sql_store;
-- psql -f /path/to/your/file.sql

CREATE TABLE stores (
    id serial PRIMARY KEY,
    name text NOT NULL,
    location text,
    web_address text UNIQUE,
    category text
);

CREATE TABLE products (
    id serial PRIMARY KEY,
    price integer,
    barcode integer,
    name text NOT NULL,
    description varchar(500),
    img_url text,
    store_id integer REFERENCES stores(id)
);

ALTER TABLE stores ADD price_point text DEFAULT $;
ALTER TABLE products ADD rating integer DEFAULT 3;