const inquirer = require('inquirer');

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
        })
       
    
}

beginPrompt();