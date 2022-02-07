const inquirer = require('inquirer');

const menuQuestions = [
    //FIRST MENU QUESTIONS
    {
        type: 'list',
        message: '\n\nWELCOME TO EMPLOYEE TRACKER\n\nWhat would you like to do?',
        name: 'firstMenu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
];
//ADD EMPLOYEE QUESTIONS
const addEmployeeQuestions = [
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
        choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer']
    },
    {
        type: 'list',
        message: "Who is the Employee's Manager?",
        name: 'Employee Manager',
        choices: ['John Doe - Sales', 'Ashley Haines - Engineering', 'Kunal Singh - Finance', 'Sarah Lourd - Legal']
    }
];
//ADD ROLE QUESTIONS
const addRoleQuestions = [
    {
        type: 'input',
        message: "",
        name: ''
    },
    {
        type: 'input',
        message: "",
        name: ''
    },
    {
        type: 'list',
        message: "",
        name: '',
        choices: []
    }
];
//ADD DEPARTMENT QUESTIONS
const addDepartmentQuestions =[
    {
    type: 'input',
        message: "",
            name: ''
    }
];
    //HOW WILL YOU UPDATE THE EMPLOYEES ROLE?




module.exports = menuQuestions, addEmployeeQuestions, addRoleQuestions, addDepartmentQuestions;