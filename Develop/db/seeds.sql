INSERT INTO deparments (department_name)
VALUES ('Dairy'),
       ('Produce'),
       ('Meat');

INSERT INTO roles (deparment_id, title, salary)
VALUES (1, 'Dairy Manager', 100000),
       (1, 'Dairy Associate', 40000),
       (2, 'Produce Manager', 95000),
       (2, 'Produce Associate', 37500),
       (3, 'Meat Manager', 110000),
       (3, 'Meat Associate', 47500);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Joshua', 'Carter', 01, 001),
       ('Bobby', 'Hamper', 02, 002),
       ('Terry', 'Lane', 03, 003),
       ('Lisa', 'Sheldon', 04, 004),
       ('Sherry', 'Gingham', 05, 005),
       ('Petricia', 'Reynolds', 06, 006);