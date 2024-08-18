-- SELECT COUNT(actor_id) FROM actors

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES('Tobey', 'Maguire')

-- expected result is:

-- ERROR:  INSERT has more target columns than expressions
-- LINE 3: INSERT INTO actors(first_name, last_name, age, number_oscars...
--                                                   ^ 

-- SQL state: 42601
-- Character: 82