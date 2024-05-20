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
