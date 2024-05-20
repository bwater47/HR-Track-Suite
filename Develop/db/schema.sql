DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

\c departments_db

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    deparment_name VARCHAR(50)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (deparment_id) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id) 
    ON DELETE SET NULL
    manager_id INTEGER NOT NULL
);