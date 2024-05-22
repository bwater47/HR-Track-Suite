const pool = require('./connection');

class DB {
    constructor() {}

    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } finally {
        client.release();
    }
}};


// Find all departments, roles, employees
async function findAllDepartments() {
    return this.query(
        "SELECT department.id, department.name FROM department"
    );
};

async function findAllRoles() {
    return this.query(
        "SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id"
    );
};

async function findAllEmployees() {
    return this.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, CONCAT(manager.first_name, ', ', manager.last_name) AS manager_name FROM employees JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employees AS manager ON employee.manager_id = manager.id"
    );
}
// Create a new department, role, employee
async function createDepartment(department) {
    return this.query(
        "INSERT INTO department SET ?", department
    );
};

async function createRole(role) {
    return this.query(
        "INSERT INTO role SET ?", role
    );
}

async function createEmployee(employee) {
    return this.query(
        "INSERT INTO employee SET ?", employee
    );
}
// Update an employee's role
async function updateEmployeeRole(employeeId, roleId) {
    return this.query(
        "UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]
    );
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