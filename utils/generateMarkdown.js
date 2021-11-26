const licenseLinkArr = ['https://www.gnu.org/licenses/agpl-3.0', 'https://www.gnu.org/licenses/gpl-3.0', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://opensource.org/licenses/MPL-2.0', 'https://opensource.org/licenses/Apache-2.0', 'https://opensource.org/licenses/MIT', 'https://www.boost.org/LICENSE_1_0.txt', 'http://unlicense.org/']

// Generates a license badge
// Returns empty string if no license
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

// Generates link to license
// Returns empty string if no license
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

// Generates license section for markdown file
// Returns empty string if no license
function renderLicenseSection(license) {
  if (!license) return '';

  return `## License 

  Licensed under ${renderLicenseLink(license)}.`
}

// Generates markdown file text
function generateMarkdown(data) {
  return `# ${data.title || ''}

  ## Description

  ${data.description || ''}

  ### Table of Contents

  * [Installation](#installation)
  * [Instructions](#instructions)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  * [Contact](#contact)
  

  ## Installation

  ${data.installation || ''}


  ## Usage

  ${data.usage || ''}


  ## Contribution Guidelines

  ${data.contribution || ''}


  ## Tests

  ${data.tests || ''}


  ## Contact

  For any assistance, you may contact me at: 

  * Github: https://github.com/${data.github}
  * Email: ${data.email}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)} 
  `;
}

module.exports = generateMarkdown;
