// Prompt user to use the methods off of the class db in order to execute operations in the database.
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db"); // const db = new DB();

init();

// Display logo text for the , load main prompts
function init() {
  const logoText = logo({ name: "H R Track Suite" }).render();

  console.log(logoText);
  loadMainPrompts();
}
// Function to load the main prompts for the user to select what they would like to do
function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        { name: "View all departments", value: "findAllDepartments" },
        { name: "View all roles", value: "findAllRoles" },
        { name: "View all employees", value: "findAllEmployees" },
        { name: "Add a department", value: "createDepartment" },
        { name: "Add a role", value: "createRole" },
        { name: "Add an employee", value: "createEmployee" },
        { name: "Update an employee role", value: "updateEmployeeRole" },
        { name: "Exit", value: "exit" },
      ],
    },
    // Switch case for the user choice to run the corresponding function when the user selects an option
  ]).then(async (userData) => {
    switch (userData.choice) {
      case "findAllDepartments":
        console.log("You have selected to view all departments");
        await findAllDepartments();
        break;
      case "findAllRoles":
        console.log("You have selected to view all roles");
        await findAllRoles();
        break;
      case "findAllEmployees":
        console.log("You have selected to view all employees");
        await findAllEmployees();
        break;
      case "createDepartment":
        console.log("You have selected to create a department");
        await createDepartment();
        break;
      case "createRole":
        console.log("You have selected to create a role");
        await createRole();
        break;
      case "createEmployee":
        console.log("You have selected to create an employee");
        await createEmployee();
        break;
      case "updateEmployeeRole":
        console.log("You have selected to update an employee role");
        await updateEmployeeRole();
        break;
      default:
        console.log("You have selected to exit the application");
        process.exit();
    }
  });
}
// Function to find all of the department table data
function findAllDepartments() {
  console.log("Found all departments");
  db.findAllDepartments()
    .then(({ rows }) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}
// Function to find all of the role table data
function findAllRoles() {
  console.log("Found all roles");
  db.findAllRoles()
    .then(({ rows }) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => loadMainPrompts());
}
// Function to find all of the employee table data
function findAllEmployees() {
  console.log("Found all employees");
  db.findAllEmployees()
    .then(({ rows }) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}
// Creates a department with the data from the user
function createDepartment() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((data) => {
    db.createDepartment(data.name)
      .then(() => {
        console.log("Added department to the database");
        loadMainPrompts();
      })
      .catch((err) => {
        console.error("Error adding department", err);
        loadMainPrompts();
      });
  });
}
// Creates role with the data from the user
function createRole() {
  prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "input",
      name: "department_name",
      message: "Which department does the role belong to?",
    },
  ]).then((data) => {
    db.createRole(data)
      .then(() => console.log("Role created"))
      .then(() => loadMainPrompts());
  });
}
// Creates employee with the data from the user
function createEmployee() {
  prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "role_title",
      message: "What is the employee's role?",
      choices: [
        "Dairy Manager",
        "Dairy Associate",
        "Produce Manager",
        "Produce Associate",
        "Meat Manager",
        "Meat Associate",
      ],
    },
    {
      type: "list",
      name: "manager_name",
      message: "Who is the employee's manager?",
      choices: [
        "None",
        "Joshua Carter",
        "Bobby Hamper",
        "Terry Lane",
        "Lisa Sheldon",
        "Sherry Gingham",
        "Petricia Reynolds",
      ],
    },
  ]).then((data) => {
    db.createEmployee(data)
      .then(() => console.log("Employee created"))
      .then(() => loadMainPrompts());
  });
}
// Updates employee role with the data from the user
function updateEmployeeRole() {
  const dataPromise = prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role do you want to update?",
      choices: [
        "Joshua Carter",
        "Bobby Hamper",
        "Terry Lane",
        "Lisa Sheldon",
        "Sherry Gingham",
        "Petricia Reynolds",
      ],
    },
    {
      type: "list",
      name: "title",
      message: "Which role do you want to assign the selected employee?",
      choices: [
        "Dairy Manager",
        "Dairy Associate",
        "Produce Manager",
        "Produce Associate",
        "Meat Manager",
        "Meat Associate",
      ],
    },
  ]);

  dataPromise.then((data) => {
    console.log("Updating employee role...");
    console.log("Employee ID:", data.employeeId);
    console.log("New Role:", data.title);

    db.updateEmployeeRole({
      employee_name: data.employeeId,
      role_title: data.title,
    })
      .then(() => {
        console.log("Employee role updated successfully");
        loadMainPrompts();
      })
      .catch((error) => {
        console.error("Error updating employee role:", error);
      });
  });
}
