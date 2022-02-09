//npm package imports
const db = require('./main/config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
//functions imported from lib directory - questions.js
const { menuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions } = require('./main/lib/questions');
//functions imported from utils directory - query.js
const { showDepartments, showEmployees, showRoles, addDepartment, addRole, addEmployee, updateEmployee } = require('./main/utils/query');
// const showEmployees = require('./main/utils/query'); 

// const showDepartments = require('./main/utils/query');


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('\n\nWELCOME TO EMPLOYEE TRACKER\n\n')
    askQuestions();
});

const askQuestions = () => {
    inquirer.prompt(menuQuestions)
        .then((answers) => {
            switch (answers.firstMenu) {

                case "View All Employees":
                    viewEmployees()
                    break;

                case "Add Employee":
                    addNewEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Role":
                    addNewRole();
                    break;

                case "View All Departments":
                    viewDepartments();
                    break;

                case "Add Department":
                    //console.log('department')
                    addNewDepartment();
                    break;

                case "Quit":
                    console.log("Thank you for using Employee-Tracker")
                    break;
            }
            //console.log(answers)
            if (answers.firstMenu === 'Quit') {
                return;
            }

        }
        );
};

const viewEmployees = () => {
    showEmployees().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const viewDepartments = () => {
    showDepartments().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const viewRoles = () => {
    showRoles().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const addNewDepartment = () => {
    inquirer.prompt(addDepartmentQuestions).then((answers) => {
        console.log(answers)
        addDepartment(answers).then((result) => {
            console.log('New Department has been added to the database')
        }).then(() => askQuestions())
    })
};

const addNewRole = () => {
    showDepartments().then((result) => {
        //console.log(result[0])
        const departmentChoices = result[0].map((department) =>
        (
            {
                name: department.name,
                value: department.id
            }
        )
        );
        console.log(departmentChoices);
        addRoleQuestions.push({
            type: 'list',
            message: "What department is this Role in?",
            name: 'department_id',
            choices: departmentChoices
        })
        inquirer.prompt(addRoleQuestions).then((answers) => {
            console.log(answers)
            addRole(answers).then((result) => {
                console.log('New Role has been added to the database')
            }).then(() => askQuestions())
        })
    })

};

const addNewEmployee = () => {
    showRoles().then((result) => {
        const roleChoices = result[0].map((role) =>
        (
            {
                name: role.title,
                value: role.id
            }
        )
        );
        showEmployees().then((result) => {
            const managerChoices = result[0].map((employee) =>
            (
                {
                    name: employee.first_name,
                    value: employee.id
                }
            ))
            console.log(roleChoices)
            console.log(managerChoices)
            addEmployeeQuestions.push({
                type: 'list',
                message: "What is the Employee's role in the company?",
                name: 'role_id',
                choices: roleChoices
            },
            {
                type: 'list',
                message: "Who is the Employee's Manager?",
                name: 'manager_id',
                choices: managerChoices
            })
        inquirer.prompt(addEmployeeQuestions).then((answers) => {
            addEmployee(answers).then((result) => {
                console.log('New Employee has been added to the database')
            }).then(()=> askQuestions())
        })
        })
    })
};

const updateEmployeeRole = () => {
    showEmployees().then((result) =>{
        const updateEmployeeChoices = result[0].map((employee) =>
        (
            {
                name: employee.first_name,
                value: employee.id
            }
        )
        );
        showRoles().then((result) => {
            const updateRoleChoices = result[0].map((role) =>
            (
                {
                    name: role.title,
                    value: role.id
                }
            )
        );
        const updateRoleQuestions = [
            {
                type: 'list',
                message: "Which employee would you like to update?",
                name: 'updateEmployeeChoice',
                choices: updateEmployeeChoices
            },
            {
                type: 'list',
                message: "What Role would you like to add to this employee?",
                name: 'updateRoleChoice',
                choices: updateRoleChoices
            }
        ];
        inquirer.prompt(updateRoleQuestions).then((answers) => {
            console.log(answers);
            updateEmployee(answers).then((result) => {
                console.log('Employee Role has been changed');
                askQuestions();
            })
        })
    })
})
};
