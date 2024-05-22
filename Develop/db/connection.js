// Require the pg module
const { Pool } = require('pg')
// Establish connection to the database
const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "employees_db"
});
// Export the connection
module.exports = client;