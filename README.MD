
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# bizness-trackstar

## Description
This project is for keeping track of an employee database for a company.  To use this application, run `node index.js` in the terminal or command line where this application has been installed or cloned.  My motivation for this project was to use node and mysql together to create and edit queries in a database.
I wanted to solve the problem of adding and editing employees, their roles, and their departments within a company database.  I learned that the syntax of mysql is very particular when it comes to modifying a database.  Javascript is very powerful in this regard, because you can use it along side the syntax of another language like mySQL.  I learned how to use modularization of functions and queries.  I also learned more about inquirer.js and how it relies on `.then` promises more than `async/await` type promises. 

# Table of Contents
- [Installation](#Installation)
- [Description](#Description)
- [Usage](#Usage)
- [What-I-learned](#What-I-Learned)
- [Screenshot-of-Application](#Screenshot-of-Application)
- [Links](#Links)
- [Questions?](#Questions?)
- [License](#License)


## Installation
In order to install this project you will need to run `npm i` on the command line/terminal in the directory where this application was installed or cloned.  You also need to run the `schema.sql` and the `seed.sql` in the mysql work bench or mysql command line.  To do this, copy and paste the code from `schema.sql` and `seed.sql` into your mysql workbench.  Run the schema first by highlighting only the code written in the `schema.sql` and clicking the lightning bolt.  Next, highlight the first of three portions of code in the `seed.sql` within your mysql workbench.  Click the lightning bolt to populate the table, and then highlight the 2nd portion, click the lightning bolt, and finally do the same for the 3rd section.  Each portion of the `seed.sql` file should be populate the table one at a time because of the foreign keys that are setup in this data base.  If you run the mysql from the command line, you will need to type `mysql -u root -p` in the command line within the directory of this installed application.  When it prompts you, enter your password and run `SOURCE schema.sql` followed by `SOURCE seed.sql` and you should get the database to populate in the same way.  Please reach out if you need further assistance with this!  email me! .

## Usage
This Project is used for keeping track of an employee database for a company. 

## What-I-Learned
This Project works by running `node index.js` in the terminal or command line where this application has been installed or cloned, and I learned the syntax of mysql is very particular when it comes to modifying a database.  Javascript is very powerful in this regard, because you can use it along side the syntax of another language like mySQL.  I learned how to use modularization of functions and queries.  I also learned more about inquirer.js and how it relies on .then promises more than async/await type promises.  


    inquirer.prompt(addEmployeeQuestions).then((answers) => {
      addEmployee(answers).then((result) => {
          console.log('New Employee has been added to the database')
      }).then(()=> askQuestions())

## Screenshot of Application
![screenshot of the node application](employee-tracker-screenshot.gif)

## Links
[video walkthrough of application](https://drive.google.com/file/d/1XiImNWo0Co_RMYPYDF9K8eMADR03fLbi/view?usp=sharing)

[link to github repository](https://github.com/Byrdbass/bizness-trackstar)

## Questions?
My gitHub user name is byrdbass, and you may email me at byrdbass@gmail.com for Questions.
You may contribute to this project by following me on linked in or just email me!.

## License
MIT
