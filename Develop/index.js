// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


const fs = require('fs');
const inquirer = require('inquirer');

const generateMD = ({title, description}) => 
`
    #${title}

    ##${description}
`;

inquirer.prompt([
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
])

.then((response) => {
  const md = generateMD(response);
  fs.writeFile('READEME.md', md, (err) => {
    if (err) throw err;
    console.log('README created!');
  });
});