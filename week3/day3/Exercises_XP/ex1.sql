
-- 1)
-- SELECT name FROM language

-- 2)
-- SELECT film.title, film.description, language.name as language
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id
-- 3)
-- SELECT film.title, film.description, language.name as language
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id
-- 4)
-- CREATE TABLE new_film(
-- id SERIAL PRIMARY KEY,
-- name varchar(50)
-- )
-- INSERT INTO new_film(name)
-- VALUES('Lord of the Rings'),
-- ('The Hateful Eight');
-- 5)

CREATE or REPLACE FUNCTION get_title(fk_movie_id integer) 
RETURNS VARCHAR(50) as $movie_title$
declare 
	-- fk_movie_id integer;
	title varchar(50);
BEGIN
	title := (SELECT name FROM new_film where fk_movie_id = new_film.id);
	RETURN title;
END;
$movie_title$ LANGUAGE plpgsql;

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- pk_movie_id INTEGER NOT NULL,
-- language_id INTEGER NOT NULL,
-- title VARCHAR(50),
-- score INTEGER CHECK (score >= 1 AND score <= 10),
-- review_text TEXT,
-- last_update DATE,
-- CONSTRAINT fk_new_film_id FOREIGN KEY (pk_movie_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id)
-- )

-- INSERT INTO customer_review(
-- pk_movie_id, language_id, title, score, review_text, last_update
-- )
-- -- VALUES(
-- -- 1, 2, get_title(1), 10, 'BEST MOVIE EVER. ALL OF THEM.', NOW()
-- -- ),
-- VALUES(
-- 2, 2, (SELECT name from new_film WHERE id = 2), 9, 'Descent movie, definitely recommend. Tarantino at prime.', NOW()
-- )

-- 7)
-- DELETE FROM new_film where id = 2
-- select * from new_film
-- select * from customer_review


