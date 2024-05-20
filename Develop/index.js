// Prompt user to use the methods off of the class db in order to execute operations in the database.
const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const db = require ('./db');

init();

// Display logo text, load main prompts
function init() {
    const logoText = logo ({ name: 'Employee Manager' }).render();

    console.log(logoText);
}

function loadMainPrompts() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [

            ]
        }
    ])
}
