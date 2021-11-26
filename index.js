// 
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions to be prompted
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Instructions for installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can others help contribute to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions for users to follow:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:'
  },
  {
    type: 'confirm',
    name: 'wants_license',
    message: 'Do you need a license?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you need?',
    choices: ['GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    default: 'MIT License',
    when: (answers) => answers.wants_license === true
  }
];

// Creates markdown file
function writeToFile(fileName, data) {
  const markdownStr = generateMarkdown(data)
  fs.writeFile(`./output/README-${fileName}.md`, markdownStr, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}.md!`))
}

// Runs inquirer on startup
function init() {
  inquirer.prompt(questions)
    .then((answers) => writeToFile(answers.title, answers))
}

init();
