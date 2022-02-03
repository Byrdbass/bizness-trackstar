const questions = require('./main/lib/questions')
const query = require('./main/utils/query')
const db = require('./main/config/connection')
const inquirer = require('inquirer');
const consoleTable = require('console.table');
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('\nWELCOME TO EMPLOYEE TRACKER\n')
    //askQuestions();
});

const askQuestions = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            switch (answers.firstMenu) {
                case "View All Employees":
                    //askQuestions();
                    showEmployees();
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







// const showDepartments = () => {
//     //console.log('show departments function works')
//     const sqlQuery = 'SELECT * FROM department;'
//     db.query(sqlQuery, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.table(result)
//     })
// };

// const showRoles = () => {
//     //console.log('show roles in table role')
//     const sqlQuery = 'SELECT role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;'
//     db.query(sqlQuery, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.table(result)
//     })
// };
// const showEmployees = () => {
//     //console.log('show employees in employee table')
//     const sqlQuery = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;'
//     db.query(sqlQuery, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.table(result);
//     })
// };
