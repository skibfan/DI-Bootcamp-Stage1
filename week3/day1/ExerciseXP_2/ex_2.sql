-- CREATE TABLE students(
-- student_id SERIAL PRIMARY KEY,
-- last_name VARCHAR(50) NOT NULL,
-- first_name VARCHAR(50) NOT NULL,
-- birth_date DATE NOT NULL
-- )

-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES
-- 	('Benichou', 'Marc', '11/02/1998'),
-- 	('Cohen','Yoan', '12/03/2010'),
-- 	('Benichou','Lea', '07/27/1987'),
-- 	('Dux', 'Amelia', '04/07/1996'),
-- 	('Grez','David', '06/14/2003'),
-- 	('Simpson','Omer', '10/03/1980');

-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES('Skibinskii', 'Daniel', '07/14/1993')


-- SELECT * FROM students
-- SELECT first_name, last_name FROM students
-- SELECT * FROM students WHERE last_name LIKE 'Benichou' OR first_name LIKE 'Marc'
-- SELECT * FROM students WHERE first_name ILIKE '%a%'
-- SELECT * FROM students WHERE first_name ILIKE 'A%'
-- SELECT * FROM students WHERE first_name ILIKE '%a'
-- SELECT * FROM students WHERE first_name LIKE '%a_'
-- SELECT * FROM students WHERE student_id = 1 OR student_id = 3
SELECT * FROM students WHERE birth_date >= '01/01/2000'
			
			
			
			