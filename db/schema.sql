DROP DATABASE If EXISTS people_dev;

CREATE DATABASE people_dev;

\c people_dev;

CREATE TABLE people (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     age INT NOT NULL,
     gender TEXT DEFAULT 'Not Provided',
     city TEXT,
     is_active BOOLEAN 
);
