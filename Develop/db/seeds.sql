INSERT INTO deparments (department_id, department_name)
VALUES (1, 'Dairy'),
       (2, 'Produce'),
       (3, 'Meat');

INSERT INTO roles (title, salary)
VALUES ('Dairy Manager', 100000),
       ('Dairy Associate', 40000),
       ('Produce Manager', 95000),
       ('Produce Associate', 37500),
       ('Meat Manager', 110000),
       ('Meat Associate', 47500);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ('Joshua', 'Carter', 01, 001),
       ('Bobby', 'Hamper', 02, 002),
       ('Terry', 'Lane', 03, 003),
       ('Lisa', 'Sheldon', 04, 004),
       ('Sherry', 'Gingham', 05, 005),
       ('Petricia', 'Reynolds', 06, 006);