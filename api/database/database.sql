CREATE DATABASE emails;

CREATE TABLE emails(
     id SERIAL PRIMARY KEY,
     email TEXT
);

INSERT INTO emails (email) VALUES
    ('leandro@gmail.com'),
    ('ronald@gmail.com');