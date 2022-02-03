const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'firstMenu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
    {
        //WRITE SWITCH CASES IN A PROMISE HERE
    }

]

module.export=questions;