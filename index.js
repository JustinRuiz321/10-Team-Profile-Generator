const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const departmentArr = [];

function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the Manager for this department?',
            validate: managerName => {
                if(managerName) {
                    return true;
                } else {
                    console.log('Please provide the name of the manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the best email to contact the manager?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Which office number is the manager located in?'
        }
    ])
    .then(({managerName, managerID, managerEmail, managerOffice}) => {
        this.Manager = new Manager(managerName, managerID, managerEmail, managerOffice);
        departmentArr.push(this.Manager)
        hirePersonel();
    });

};

function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the Intern being hired?',
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log("Enter Intern's Name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is going to be the intern's ID number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's e-mail address?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern going to?"
        }
    ])
    .then(({internName, internID, internEmail, internSchool}) => {
        this.Intern = new Intern(internName, internID, internEmail, internSchool);
        departmentArr.push(this.Intern);
        hirePersonel();
    })
};

function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the Engineer being hired?',
            validate: engineerName => {
                if(engineerName){
                    return true;
                } else {
                    console.log("Enter Engineer's Name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is going to be the Engineer's ID number?",
            
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the Engineer's e-mail address?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the github username of the Engineer?'
        }
    ])
    .then(({engineerName, engineerID, engineerEmail, engineerGithub}) => {
        this.Engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        departmentArr.push(this.Engineer);
        hirePersonel();
    })
};

function hirePersonel() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'hired',
            message: 'What position are you hiring?',
            choices: ['Intern', 'Engineer' , 'Finished']
        }
    ])
    .then (({hired}) => {
        if (hired === 'Intern') {
            internInfo();
        } else if (hired === 'Engineer') {
            engineerInfo();
        } else if (hired === 'Finished') {
            writeFile(filedata, departmentArr);
        } else {
            console.log(err);
        }
    })
};

function writeFile(filedata, departmentArr){
    fs.writeFile('./dist/index.html', filedata, (err) => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Team was created")
        }
    })
};

function teamProfile(){
    managerInfo();
};

teamProfile();