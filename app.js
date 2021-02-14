const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

let teamArray = [];

function beginPrompt() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'teamname',
            message: "Hello and Welcome to the Team Profile Generator 2021! What is your team's name:"
        }
        ])
        .then(function(teamname){
            const teamName = this.teamname
            teamArray.push(teamName)
            addManager();
        })
       
    
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your team Manager's name?",
            name: 'name'
        },
        {
            message: "What is your team manager's email address?",
            name: 'email'
        },
        {
            type: 'number',
            message: "What is your team manager's office number?",
            name: 'officeNumber'
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        teamArray.push(teamMember)
    })
}

beginPrompt();