//npm package imports
const db = require('./main/config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
//functions imported from lib directory - questions.js
const menuQuestions = require('./main/lib/questions');
const addEmployeeQuestions = require('./main/lib/questions');
const addRoleQuestions = require('./main/lib/questions');
const addDepartmentQuestions = require('./main/lib/questions');
//functions imported from utils directory - query.js
const showEmployees = require('./main/utils/query'); 
const showRoles = require('./main/utils/query');
const showDepartments = require('./main/utils/query');


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('\nWELCOME TO EMPLOYEE TRACKER\n')
    askQuestions();
});

askQuestions = () => {
    inquirer.prompt(menuQuestions)
        .then((answers) => {
            switch (answers.firstMenu) {

                case "View All Employees":
                    showEmployees()
                    // inquirer.prompt(menuQuestions).then( () => {askQuestions()});
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                case "View All Roles":
                    showRoles();
                    askQuestions();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "View All Departments":
                    showDepartments();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Quit":
                    console.log("Thank you for using Employee-Tracker")
                    break;
            }
            console.log(answers)
        }
        );
};
