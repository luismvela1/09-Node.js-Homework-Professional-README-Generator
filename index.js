// array of questions for user
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [{
    type: "input",
    name: "tittle",
    message:"What Is The Name Of Your Project?",   
},
{
    type: "input",
    name: "badge",
    message:"please provide the link to your desired badge"
},
   

{
    type: "input",
    name: "description",
    message:"Describe Your Project",
},
{
    type: "input",
    name: "install",
    message: "What Are The Installation Instructions For Your Project?",
},
{
    type:"input",
    name:"usage",
    message:"Please Describe The Usage Of Your Project",
},
{
    type:"input",
    name:"contribution",
    message:"What Are Your Contribution Guidelines?",
},
{
    type:"input",
    name:"test",
    message:"What Are Your Test Instructions?",
},
{
    type:"list",
    name:"license",
    message:"Select The Type Of License Your Project Is Covered Under",
    choices:[
        "MIT",
        "GNU GPLv3",
        "APACHE 2.0",
        "BSD",
        "OTHER",

    ]
},
{
    type:"input",
    name:"github",
    message:"Enter Your Github User Name",
},
{
    type:"input",
    name:"email",
    message:"Enter Your Email Adress",
},

];

// function to write README file
function writeFile(fileName,data) {
    fs.writeFile(fileName,data,err=>{
        if (err) {
         throw err;
        }   
    });
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers=>{
        
    const response= generateMarkdown(answers);
    console.log(answers);
    writeFile("README.md",response)

});
}

// function call to initialize program
init();
