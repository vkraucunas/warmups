\c exercisedb;

SELECT name FROM customers ORDER BY name;

SELECT name FROM customers ORDER BY name DESC;

SELECT * FROM items;

\d items;

SELECT * FROM items WHERE name LIKE '%boot%';

SELECT * FROM orders;

SELECT * FROM orders LIMIT 5;

SELECT * FROM orders ORDER BY id DESC LIMIT 5;

SELECT name, email FROM customers;

SELECT id, name, address FROM customers;

SELECT COUNT(*) FROM customers;

SELECT SUM(amount) FROM orders;

SELECT SUM(amount) FROM orders WHERE customer_id = 1;

SELECT ROUND(AVG(amount), 2) FROM orders;

SELECT MIN(amount) FROM orders;

SELECT MAX(amount) FROM orders;

SELECT customer_id, MIN(amount) FROM orders GROUP BY customer_id ORDER BY customer_id;

SELECT customer_id, MAX(amount) FROM orders GROUP BY customer_id ORDER BY customer_id;

SELECT * FROM customers WHERE state='Colorado';

SELECT * FROM customers WHERE state='Colorado' AND city='Rigobertoside';

SELECT * FROM customers WHERE state='Ohio' OR state='Virginia';

-- how to run this file
-- psql -d exercisedb -f warmup224.sql