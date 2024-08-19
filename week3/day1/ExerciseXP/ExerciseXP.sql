
-- CREATE TABLE items(
-- item_name VARCHAR(20) NOT NULL,
-- item_price INT);

-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- customer_name VARCHAR(50),
-- customer_surname VARCHAR(50)
-- );


-- INSERT INTO items(item_name, item_price)
-- VALUES('Small Desk', 100);
-- INSERT INTO items(item_name, item_price)
-- VALUES('Large desk', 300);
-- INSERT INTO items(item_name, item_price)
-- VALUES('Fan', 80);


-- INSERT INTO customers(customer_name, customer_surname)
-- VALUES('Greg', 'Jones');
-- INSERT INTO customers(customer_name, customer_surname)
-- VALUES('Sandra', 'Jones');
-- INSERT INTO customers(customer_name, customer_surname)
-- VALUES('Scott','Scott');
-- INSERT INTO customers(customer_name, customer_surname)
-- VALUES('Trevor','Green');
-- INSERT INTO customers(customer_name, customer_surname)
-- VALUES('Melanie','Johnson');


-- SELECT * FROM items;
-- SELECT * FROM items WHERE item_price > 80;
-- SELECT * FROM items WHERE item_price <= 300;
-- SELECT * FROM customers WHERE customer_surname LIKE 'Smith'
-- SELECT * FROM customers WHERE customer_surname LIKE 'Jones'
SELECT * FROM customers WHERE customer_surname NOT LIKE 'Scott'
-- SELECT * FROM customers;
