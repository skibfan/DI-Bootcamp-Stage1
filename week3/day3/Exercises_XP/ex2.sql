-- 1)
-- select * from language
-- select * from film
-- where film_id = 5 or film_id = 98

-- UPDATE film SET language_id = 5 
-- WHERE film_id = 5 or film_id = 98

-- 2)
-- select * from customer
-- there is 2 FK (address_id, store_id) in customer table, 
-- which should be referenced when creating a record and couldn't be changed that easily.
-- if relation is CASCADE - this values will update automaticaly on change in their relative tables, 
-- if relation is on RESTRICT - it will be possible to update customer's store, but will not affect the related table.

-- 3)
-- drop table customer_review
-- easily drops, no checking

-- 4) 
-- select count(*) as not_returned_films from rental 
-- where return_date is null

-- 5)
-- select * from film
-- inner join inventory
-- on film.film_id = inventory.film_id
-- inner join rental 
-- on inventory.inventory_id = rental.inventory_id
-- where rental.return_date is null
-- order by film.replacement_cost desc
-- limit 30

-- 6.1)
-- select film.*, actor.* from film
-- inner join film_actor
-- on film.film_id = film_actor.film_id
-- inner join actor
-- on film_actor.actor_id = actor.actor_id
-- where film.description ILIKE '%sumo wrestler%'
-- AND actor.first_name ILIKE 'Penelope'
-- AND actor.last_name ILIKE 'Monroe'
-- 6.2)
-- select film.*, category.* from film
-- inner join film_category
-- on film.film_id = film_category.film_id
-- inner join category
-- on film_category.category_id = category.category_id
-- where film.rating = 'R'
-- AND film.length < 60
-- AND category.name ILIKE 'documentary'

-- 6.3)
-- select * from film
-- inner join inventory
-- on film.film_id = inventory.film_id
-- inner join rental
-- on inventory.inventory_id = rental.rental_id
-- inner join customer 
-- on rental.customer_id = customer.customer_id
-- where film.rental_rate > 4.00
-- AND customer.first_name = 'Matthew'
-- AND customer.last_name = 'Mahan'
-- -- we could correctly find it, but on the different dates
-- and rental.return_date >= '2005-07-28'
-- and rental.return_date <= '2005-08-01'

-- 6.4)

-- select * from film
-- inner join inventory
-- on film.film_id = inventory.film_id
-- inner join rental
-- on inventory.inventory_id = rental.rental_id
-- inner join customer 
-- on rental.customer_id = customer.customer_id
-- WHERE customer.first_name = 'Matthew'
-- AND customer.last_name = 'Mahan'
-- AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost desc