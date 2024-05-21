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
}

// Find all employees, join with roles and departments to display their roles, salaries, departments, and 
findAllEmployees() {
    return this.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department FROM employees JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id"
    );
}
// each prompt question is a method building out each method for essentially 
// what is the sql query for each of my individual things i want to ask the system
// when they can recieve the data
// catching values from params when db is called
// then return this query for sql good old all caps deposit values and which values are being referenced.
