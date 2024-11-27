-- create table sql12747628.user(
--  username varchar(200),
--  email varchar(200) unique,
--  password varchar(200)
-- );
-- alter table sql12747628.user add column role enum('user','admin') default 'user';
-- SHOW INDEX FROM user WHERE Column_name = 'email';
-- ALTER TABLE user DROP INDEX email;
-- alter table sql12747628.user modify column username varchar(250) unique;

-- alter table sql12747628.product auto_increment=100;
-- SHOW CREATE TABLE product;
-- DELETE FROM sql12747628.product WHERE qunatity IS not Null;

create table sql12747628.product(
id integer auto_increment primary key,
name varchar(250) not null,
qunatity integer not null,
price_per_unit Decimal(10,2) not null
);

drop table sql12747628.order;
create table sql12747628.order(
 id integer auto_increment primary key,  
 full_name varchar(250),
 email varchar(200) not null,
 phone varchar(200) not null,
 country varchar(200) not null,
 address varchar(250) not null,
 total_price DECIMAL(10, 2) not null,
 status enum("Pending","In Progress","Delivered") default "Pending",
 order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

alter table sql12747628.order auto_increment=103525;


create table sql12747628.order_items(
  id integer auto_increment primary key,
  order_id integer ,
  product_id integer,
  qunatity integer,
  product_qunatity_price integer,
  foreign key(order_id) references sql12747628.order(id),
  foreign key(product_id) references sql12747628.product(id)
);

INSERT INTO product (name, price_per_unit,qunatity)
VALUES 
('Tomatoes', 15,20),
('Potatoes', 25,20),
('Apples', 60,20),
('Bananas', 50,10),
('Carrots', 20,10),
('Spinach', 50,10),
('Oranges', 50,20),
('Onions', 20,20),
('Cucumbers', 20,20),
('Peppers', 30,15),
('Garlic', 10,15),
('Ginger', 10,15),
('Lettuce', 20,15),
('Broccoli', 50,15),
('Cauliflower', 50,25),
('Zucchini', 40,25),
('Eggplant', 50,25),
('Mushrooms', 100,25),
('Pumpkin', 50,25),
('Corn', 15,25),
('Sweet Potatoes', 35,25),
('Green Beans', 70,25),
('Peas', 45,25),
('Avocados', 100,25),
('Strawberries', 100,25),
('Blueberries', 150,25),
('Raspberries', 250,25),
('Blackberries', 300,25),
('Cherries', 120,30),
('Grapes', 30,30),
('Watermelon', 20,30),
('Cantaloupe', 30,30),
('Pineapple', 30,20),
('Mangoes', 20,7),
('Pears', 30,7),
('Plums', 20,7),
('Nectarines', 72,7),
('Kiwi', 50,10),
('Lemons', 20,20),
('Limes', 30,25);

