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
            choices: 
            [{name: 'findAllEmployees',
                value: 'findAllEmployees'
            }

            ]
        }
    ])
}
//seperate prompts
// get switch to run stuff, and add dynamics 
// .then comes after the prompt prompt returns a promise so .then will execute after promise is resolved so after the question has been answered.
// switch case for after this question then do what. sort of like you click this prompt for example then switch to this case if this function runs main 
// menu swithc case says run corresponding function then do all the things in there throw extra prompts snap boom back to main menu and it will start it over.
// how would I connect this to a prompt.
// choice will be value key will be the name of the object.
// can actually throw if you do a look up have a function
.then((userData) => {

    switch (userData.start) {
        //case has to be what the value is that the user chose
        case 'findAllEmployees';
        findAllEmployees();
        break;
    }
}
// ask question based on function get user data from what was wrote in prompt then return to main menu
function findAllEmployees(){
    console.log('Found all employees')
    //having data from find all employees and show data to user with ascii art logo then call initial function again to ask all quesiton for what you want to do again that will be in the .then
    db.findAllEmployees().then(({ rows }) => {
        let departments = rows;
        console.table(departments)
    }).then() => loadMainPrompts()}
}