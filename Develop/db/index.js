// Requires the connection to the database
const pool = require("./connection");
// Class for the database to be used in the prompt questions
class DB {
  constructor() {}

  async query(sql, args = []) {
    const client = await pool.connect(); // connects to the db
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release(); // closes the connection to the db
    }
  }

  // Find all departments
  findAllDepartments() {
    return this.query(
      "SELECT department.id, department.department_name FROM department"
    );
  }
  // Finds all roles
  findAllRoles() {
    return this.query(
      `SELECT role.title AS "Job Title", role.id, department.department_name, role.salary FROM role JOIN department ON role.department_id = department.id`
    );
  }
  // Finds all employees
  findAllEmployees() {
    return this.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title AS "Job Title", department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        WHERE role.title NOT LIKE '%manager%'

    `);
  }
  // Create a new department, role, employee
  createDepartment(department) {
    return this.query(
      `INSERT INTO department (department_name) VALUES ('${department.department_name}')`
    );
  }
  // Create a new role
  createRole(role) {
    return this.query(
      `INSERT INTO role (department_id, title, salary)
        VALUES (
            (SELECT id FROM department WHERE department_name = '${role.department_name}'),
            '${role.title}',
            ${role.salary}
        )`
    );
  }
  // Create a new employee
  createEmployee(employee) {
    return this.query(
      `INSERT INTO employee (first_name, last_name, title, manager_id)
            VALUES (
                    '${employee.first_name}',
                    '${employee.last_name}',
                    (SELECT id FROM role WHERE title = '${employee.role_title}'),
                    (SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) = '${employee.manager_name}')
            )`
    );
  }
  // Update an employee's role
  updateEmployeeRole(employeeId, title) {
    return this.query(
      `UPDATE employee SET title = '${title}' WHERE id = ${employeeId}`
    );
  }
}
// Export the database functions for use in the prompt questions
module.exports = new DB();

// use interpolation to add in the adding of things to prompt questions
// in the function for updating employee this function needs to update data base i need all roles make array to pass to the prompts
// bunch of handler functions to make for switch case now i can worry about
// each prompt question is a method building out each method for essentially
// what is the sql query for each of my individual things i want to ask the system
// when they can recieve the data
// catching values from params when db is called
// then return this query for sql good old all caps deposit values and which values are being referenced.
// export the database for the functions so i can add to prompt.
