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
        message: "What is the title of the Role?",
        name: 'newRole'
    },
    {
        type: 'input',
        message: "What is the Salary of the New Role?",
        name: 'newSalary'
    },
    {
        type: 'list',
        message: "What department is this Role in?",
        name: 'newRoleDepartment',
        choices: ['Sales','Engineering','Finance','Legal']
    }
];
//ADD DEPARTMENT QUESTIONS
const addDepartmentQuestions =[
    {
        type: 'input',
        message: "What is the name of the new Department?",
        name: 'newDepartment'
    }
];
    //HOW WILL YOU UPDATE THE EMPLOYEES ROLE?




module.exports = menuQuestions, addEmployeeQuestions, addRoleQuestions, addDepartmentQuestions;