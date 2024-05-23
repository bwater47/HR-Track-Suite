-- Seeds data for the employee_db database --
INSERT INTO department (department_name)
VALUES ('Dairy'),
       ('Produce'),
       ('Meat');

INSERT INTO role (department_id, title, salary)
VALUES (1, 'Dairy Manager', 100000),
       (1, 'Dairy Associate', 40000),
       (2, 'Produce Manager', 95000),
       (2, 'Produce Associate', 37500),
       (3, 'Meat Manager', 110000),
       (3, 'Meat Associate', 47500);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joshua', 'Carter', 1, NULL),
       ('Bobby', 'Hamper', 2, 1),
       ('Terry', 'Lane', 3, NULL),
       ('Lisa', 'Sheldon', 4, 3),
       ('Sherry', 'Gingham', 5, NULL),
       ('Petricia', 'Reynolds', 6, 5);