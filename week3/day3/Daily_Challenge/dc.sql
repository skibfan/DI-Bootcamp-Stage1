-- >>>> PART I <<<<
-- 1)
-- create table customer(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50) NOT NULL
-- )

-- create table customer_profile(
-- id SERIAL PRIMARY KEY,
-- isLoggedIn bool DEFAULT false,
-- customer_id integer not null,
-- constraint fk_id FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
-- )


-- 2)
-- insert into customer(first_name, last_name)
-- values('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')
-- 3)
-- insert into customer_profile(isLoggedIn, customer_id)
-- -- values(true, (select id from customer where first_name like 'John' and last_name like 'Doe')),
-- values(true, (select id from customer where first_name like 'Jerome' and last_name like 'Lalu'))

-- 4.1)
-- select customer.first_name from customer_profile
-- inner join customer
-- on customer_profile.customer_id = customer.id
-- where isLoggedIn is true
-- 4.2)
-- select customer.first_name, customer_profile.isLoggedIn from customer_profile
-- right join customer
-- on customer_profile.customer_id = customer.id
-- 4.3)
-- select count(customer.first_name) as not_logged_in from customer_profile
-- right join customer
-- on customer_profile.customer_id = customer.id
-- where customer_profile.isLoggedIn is null


-- >>>> PART II <<<<

-- 1)
-- create table book(
-- book_id SERIAL PRIMARY KEY, 
-- title TEXT NOT NULL, 
-- author VARCHAR(50) NOT NULL
-- )
-- 2)
-- insert into book(title, author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')
-- 3)
-- create table student(
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE, 
-- age integer CHECK (age >= 0 and age <= 15)
-- )
-- 4)
-- insert into student(name, age)
-- values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)
-- 5)
-- create table library(
-- book_fk_id INTEGER NOT NULL,
-- student_id INTEGER NOT NULL,
-- borrowed_date DATE NOT NULL,
-- PRIMARY KEY (book_fk_id, student_id),
-- FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )
-- 6)
-- insert into library(student_id, book_fk_id, borrowed_date)
-- values
-- ((select student_id from student where name ilike 'john'),
-- (select book_id from book where title ilike 'Alice In Wonderland'), '02/15/2022'
-- ),
-- ((select student_id from student where name ilike 'Bob'),
-- (select book_id from book where title ilike 'To kill a mockingbird'),
-- '03/03/2021'
-- ),
-- ((select student_id from student where name ilike 'Lera'),
-- (select book_id from book where title ilike 'Alice In Wonderland'),
-- '05/23/2021'
-- ),
-- ((select student_id from student where name ilike 'Bob'),
-- (select book_id from book where title ilike 'Harry Potter'),
-- '08/12/2021'
-- )
-- 7.1)
-- select * from library
-- 7.2)
-- select student.name, book.title from library
-- inner join student 
-- on library.student_id = student.student_id
-- inner join book 
-- on library.book_fk_id = book.book_id
-- 7.3)
-- select avg(student.age)::numeric(100,2) from library
-- inner join student 
-- on library.student_id = student.student_id
-- inner join book 
-- on library.book_fk_id = book.book_id
-- where book.title ilike 'Alice In Wonderland'

-- 7.4)
-- expected result is deleting all records of student
-- with id 2 from table library
-- delete from student where student_id = 2
-- select * from library
