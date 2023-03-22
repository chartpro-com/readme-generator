const fs = require('fs');
const inquirer = require('inquirer');

// const fileName = "READEME.md"

const questions = [
{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'Describe your project:',
},
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file created!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readme = `
# ${answers.title}

## Description

${answers.description}


    `;
    writeToFile('README.md', readme);
  });
}

init();