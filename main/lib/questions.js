const inquirer = require('inquirer');

const menuQuestions = [
    //FIRST MENU QUESTIONS
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstMenu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
];
//ADD EMPLOYEE QUESTIONS
const addEmployeeQuestions = [
    {
        type: 'input',
        message: "What is the Employee's first name?",
        name: 'first_name'
    },
    {
        type: 'input',
        message: "What is the Employee's last name?",
        name: 'last_name'
    }
];
//ADD ROLE QUESTIONS
const addRoleQuestions = [
    {
        type: 'input',
        message: "What is the title of the Role?",
        name: 'title'
    },
    {
        type: 'input',
        message: "What is the Salary of the New Role?",
        name: 'salary'
    },
];
//ADD DEPARTMENT QUESTIONS
const addDepartmentQuestions =[
    {
        type: 'input',
        message: "What is the name of the new Department?",
        name: 'name'
    }
];
    //HOW WILL YOU UPDATE THE EMPLOYEES ROLE?




module.exports = { menuQuestions, addEmployeeQuestions, addRoleQuestions, addDepartmentQuestions, addEmployeeQuestions };