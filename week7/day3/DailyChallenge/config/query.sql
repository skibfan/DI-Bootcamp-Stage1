CREATE TABLE IF NOT EXISTS registerlogin
(
    id serial NOT NULL PRIMARY KEY,
    email character varying(255) NOT NULL,
    username character varying(255) NOT NULL UNIQUE,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
