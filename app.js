const inquirer = require('inquirer');
const fs = require("fs");
const style = require('./templates/css')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')

let teamArray = [];

function beginPrompt() {
    inquirer.prompt([
        {
            message: "Please enter your team name:",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            teamArray.push(teamName)
            addManager();
        })
};

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

            case "I'd like to add an intern":
                addIntern();
                break;

            case "No, that is everyone":
                compileTeam();
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

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("You're team is being compiled!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${teamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < teamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a>></p>
        `
        if (teamArray[i].officeNumber) {
            object += `
            <p>${teamArray[i].officeNumber}</p>
            `
        }
        if (teamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
            `
        }
        if (teamArray[i].school) {
            object += `
            <p>School: ${teamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./generated-html/${teamArray[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

beginPrompt();