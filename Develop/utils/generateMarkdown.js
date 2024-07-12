// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
      return '';
  }
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 3-Clause':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
          return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, please contact me at [${data.email}](mailto:${data.email}). You can also visit my GitHub profile at [https://github.com/${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;


