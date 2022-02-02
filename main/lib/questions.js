const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'firstMenu',
        choices: ['View All Employees', 'Add Employee']
    },

]