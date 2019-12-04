-- Drop if database exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (300) NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);