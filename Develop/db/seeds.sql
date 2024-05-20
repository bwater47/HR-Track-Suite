INSERT INTO deparments (department_name)
VALUES ('Dairy'),
       ('Produce'),
       ('Meat');

INSERT INTO roles (department_id, title, salary)
VALUES (1, 'Dairy Manager', 100000),
       (2, 'Produce Manager', 95000),
       (3, 'Meat Manager', 110000),
       (4, 'Dairy Associate', 40000),
       (5, 'Produce Associate', 37500),
       (6, 'Meat Associate', 47500);

INSERT INTO employees (manager_id, role_id, first_name, last_name)
VALUES (01, 001, 'Joshua', 'Carter'),
       (02, 002, 'Bobby', 'Hamper'),
       (03, 003, 'Terry', 'Lane'),
       (04, 004, 'Lisa', 'Sheldon'),
       (05, 005, 'Sherry', 'Gingham'),
       (06, 006, 'Petricia', 'Reynolds');