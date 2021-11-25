const licenseLinkArr = ['https://www.gnu.org/licenses/agpl-3.0', 'https://www.gnu.org/licenses/gpl-3.0', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://opensource.org/licenses/MPL-2.0', 'https://opensource.org/licenses/Apache-2.0', 'https://opensource.org/licenses/MIT', 'https://www.boost.org/LICENSE_1_0.txt', 'http://unlicense.org/']

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPL v3': return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${licenseLinkArr[0]})`;
    case 'GNU GPL v3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseLinkArr[1]})`;
    case 'GNU LGPL v3': return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${licenseLinkArr[2]})`;
    case 'Mozilla Public License 2.0': return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${licenseLinkArr[3]})`;
    case 'Apache License 2.0': return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseLinkArr[4]})`;
    case 'MIT License': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLinkArr[5]})`;
    case 'Boost Software License 1.0': return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${licenseLinkArr[6]})`;
    case 'The Unlicense': return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${licenseLinkArr[7]})`;
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPL v3': return `[${license}](${licenseLinkArr[0]})`;
    case 'GNU GPL v3': return `[${license}](${licenseLinkArr[1]})`;
    case 'GNU LGPL v3': return `[${license}](${licenseLinkArr[2]})`;
    case 'Mozilla Public License 2.0': return `[${license}](${licenseLinkArr[3]})`;
    case 'Apache License 2.0': return `[${license}](${licenseLinkArr[4]})`;
    case 'MIT License': return `[${license}](${licenseLinkArr[5]})`;
    case 'Boost Software License 1.0': return `[${license}](${licenseLinkArr[6]})`;
    case 'The Unlicense': return `[${license}](${licenseLinkArr[7]})`;
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  return `## License 

  Licensed under ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.toUpperCase()}
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)} 
  `;
}

module.exports = generateMarkdown;
