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
        { name: "exit", value: "exit" },
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

// seperate prompts
// get switch to run stuff, and add dynamics
// .then comes after the prompt prompt returns a promise so .then will execute after promise is resolved so after the question has been answered.
// switch case for after this question then do what. sort of like you click this prompt for example then switch to this case if this function runs main
// menu swithc case says run corresponding function then do all the things in there throw extra prompts snap boom back to main menu and it will start it over.
// how would I connect this to a prompt.
// choice will be value key will be the name of the object.
// can actually throw if you do a look up have a function
// ask question based on function get user data from what was wrote in prompt then return to main menu

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

// having data from find all employees and show data to user with ascii art logo then call initial function again to ask all quesiton for what you want to do again that will be in the .then
// make a function for each of the prompts
// for the create ones you will need to prompt the user for the information to create the new thing
// then call the db function to create the new thing
// then call the main menu function again to ask the user what they want to do next
// for the update one you will need to prompt the user for the information to update the employee role

// Creates a department with the data from the user
function createDepartment() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then((data) => {
    db.createDepartment([data.name]) // Wrap the department name in an array
      .then(() => console.log("Department created"))
      .then(() => loadMainPrompts());
  });
}
// Creates role with the data from the user
function createRole() {
  prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "input",
      name: "department_name",
      message:
        "What is the department that you would like to add this role to?",
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
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role id of the employee?",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is the manager id of the employee?",
    },
  ]).then((data) => {
    db.createEmployee(data)
      .then(() => console.log("Employee created"))
      .then(() => loadMainPrompts());
  });
}
// Updates employee role with data from the user
function updateEmployeeRole() {
  prompt([
    {
      type: "input",
      name: "employeeId",
      message: "What is the employee id?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?",
    },
  ]).then((data) => {
    db.updateEmployeeRole([data.employeeId, data.title])
      .then(() => console.log("Employee role updated"))
      .then(() => loadMainPrompts());
  });
}
