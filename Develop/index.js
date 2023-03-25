const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseBadge } = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should your project be used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license does you use?',
    choices: [
      'MIT',
      'GNU GPLv3',
      'Apache License 2.0',
      'ISC License',
      'None',
    ],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

inquirer.prompt(questions)
  .then(data => {
    data.badge = renderLicenseBadge(data.license);
    const markdown = generateMarkdown(data);

    fs.writeFile('README.md', markdown, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md generated!');
      }
    });
  })
  .catch(err => {
    console.log(err);
  });
