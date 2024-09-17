
CREATE TABLE IF NOT EXISTS hashpwd
(
    id serial NOT NULL PRIMARY KEY,
    username character varying(255) NOT NULL UNIQUE,
    password character varying(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
    id serial NOT NULL PRIMARY KEY,
    email character varying(255) DEFAULT NULL,
    username character varying(255) NOT NULL UNIQUE,
    first_name character varying(255) DEFAULT NULL,
    last_name character varying(255) DEFAULT NULL,
    FOREIGN KEY (id) REFERENCES hashpwd(id)
);
SELECT setval('users_id_seq', (SELECT MAX(id) FROM hashpwd));