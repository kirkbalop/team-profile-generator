const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
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
        addTeamMembers();
    });
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Are there any more team members to add?',
            choices: ["I'd like to add an Engineer", "I'd like to add an intern", "No, that is everyone"],
            name: 'addMemberData'
        }
    ])
    .then(function(data) {
        switch(data.addMemberData) {
            case "I'd like to add an Engineer":
                addEngineer();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            message: "What is your Engineer's name?",
            name: 'name'
        },
        {
            message: "what is your Engineers's email?",
            name: 'email'
        },
        {
            message: "What is your Engineer's github username?",
            name: 'github'
        }
    ])
    .then(function(data){
        const name = data.name
        const id = teamArray.length + 1
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        teamArray.push(teamMember)
        addTeamMembers();
    })
}

beginPrompt();