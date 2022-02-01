const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection (
    {
        host:'localhost',
        user:'root'
        password:'password'
        database:'company_db'
    }
    console.log('Connectioned to company_db')
)

const showDepartments = () => {
    console.log('show departments function works')
    const sqlQuery = ''
}

const askQuestions = () => {
    inquiere.prompt(questions)
        .then((answers) => {
            console.log('User Selected to ${')
        })
}