// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownStr = generateMarkdown(data)
  fs.writeFile(`./output/README-${fileName}.md`, markdownStr, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}.md!`))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => writeToFile(answers.title, answers))
}

// Function call to initialize app
init();
