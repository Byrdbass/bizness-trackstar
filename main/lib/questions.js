const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        message: '\nWELCOME TO EMPLOYEE TRACKER\nWhat would you like to do?',
        name: 'firstMenu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
    {
        type: 'input',
        message: "What is the Employee's first name?",
        name: 'addEmployeeFirstName'
    },
    {
        type: 'input',
        message: "What is the Employee's last name?",
        name: 'addEmployeeLastName'
    },
    {
        type: 'list',
        message: "What is the Employee's role in the company?",
        name: 'addEmployeeRole',
        choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', ]
        },
    {
        type: 'input'
    }
    

];



module.exports=questions;