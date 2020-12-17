// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ##${data.tittle}

  ${data.badge}

  ## DESCRIPTION

  ${data.description}

  ## TABLE OF CONTENTS

  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [license](#license)
  * [Questions](#questions)
  

  ##INSTALLATION

  ${data.install}

  ##USAGE

  ${data.usage}

  ##CONTRIBUTIONS

  ${data.contribution}

  ##TEST

  ${data.test}

  ##LICENSE

  ${data.license}

  ##QUESTIONS
  
  If you have any questions about this project, please feel free to contact me:

  Github Repository: [${data.github}](https://github.com/luismvela1)

  Email Adress: [${data.email}](luismvela1@gmail.com)

  Video Link:(https://drive.google.com/file/d/1lMiS7z_DtUp_5c2fhfxSQP9HiezsW8NV/view)

`;
}

module.exports = generateMarkdown;
