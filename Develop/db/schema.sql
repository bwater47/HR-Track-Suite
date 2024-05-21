DROP DATABASE IF EXISTS employees_db;
-- Creates the "employees_db" database --
CREATE DATABASE employees_db;

-- Use the employees_db --
\c employees_db

-- Creates the table "departments" within employees_db --
CREATE TABLE departments (
    -- Creates a numeric column called "id" --
    id SERIAL PRIMARY KEY,
    -- Creates a string column called "department_name" which can hold up to 50 characters --
    deparment_name VARCHAR(50)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    deparment_id INTEGER NOT NULL,
    FOREIGN KEY (deparment_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);
-- add do $$ begin delcare and end $$ to the tables.
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id)
    REFERENCES roles (id),
    FOREIGN KEY (manager_id)
    REFERENCES employees (id)
);
