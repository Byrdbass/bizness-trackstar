const db = require('../config/connection')
const consoleTable = require('console.table');
const questionsArray = require('../lib/questions')
const askQuestions = require('../../index'); 
const menuQuestions = require('../lib/questions');

const showDepartments = () => {
    console.log('show departments function works')
    const sqlQuery = 'SELECT * FROM department;'
    db.query(sqlQuery, (err, result) => {
        if (err) {
            throw err;
        }
        console.table(result)
    })
};

const showRoles = () => {
    console.log('show roles in table role')
    const sqlQuery = 'SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;'
    db.query(sqlQuery, (err, result) => {
        if (err) {
            throw err;
        }
        console.table(result)
    })
};
const showEmployees = () => {
    console.log('show employees in employee table')
    const sqlQuery = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;'
    db.query(sqlQuery, (err, result) => {
        if (err) {
            throw err;
        }
        console.log('\n');
        console.table(result);
        console.log('\n');
        //askQuestions(menuQuestions);
    })
};

module.exports = showEmployees, showRoles, showDepartments;