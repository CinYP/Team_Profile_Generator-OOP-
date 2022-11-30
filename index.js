//external modules 
const inquirer = require('inquirer'); 
const fs = require('fs');

//internal modules 
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const Employee = require('./lib/Employee');
//Do I need the employee file?

//empty array
const teamsArray = [];

const addManager = () => {
    return inquirer.createPromptModule([
        {
            type: 'input',
            message: 'Please type the name of the manager on the team.',
            name: 'name',
            default: 'Manager Name',
            validate: (answer) => {
             if(answer.length<1) {
                  return console.log('Please provide a valid name')
                }
           }},
           {
            type: 'input',
            message: 'Please enter the ID for the manager on the team.',
            name: 'id',
            default: '40973C',
            validate: (answer) => {
             if(answer.length<1) {
                  return console.log('Please provide a valid ID.')
                }
           }},
           {
            type: 'input',
            message: 'Please enter the email for the manager on the team.',
            name: 'email',
            default:'manager@corporate.com',
            validate:  email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
             if(!valid) {
                console.log('Please provide a valid email.')
                } 
           }},
           {
            type: 'input',
            message: 'Please enter the ID for the manager on the team.',
            name: 'officeNumber',
            default: '001',
            validate: (answer) => {
             if(answer.length<1) {
                  return console.log('Please provide a valid office number.')
                }
           }},
    ])
.then(managerInput => {
    const {name,id, email, officeNumber} = managerInput; 
    const manager = new Manager (name, id, email, officeNumber)

    teamsArray.push(manager);
    console.log(manager); 
})};

const addMoreEmployees = () =>{
    console.log(`
    ============================
    Adding employees to your team
    ============================
    `);

return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role.",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'Please enter the name of the employee.',
        name: 'name',
        default: 'Employee Name',
        validate: (answer) => {
         if(answer.length<1) {
              return console.log('Please provide a valid name.')
            }
       }},
       {
        type: 'input',
        message: "Please enter the employee's ID.",
        name: 'id',
        default: '002',
        validate: (answer) => {
         if(answer.length<1) {
              return console.log('Please provide a valid office number.')
            }
       }},
       {
        type: 'input',
        message: 'Please enter the email for the manager on the team.',
        name: 'email',
        default:'employee@corporate.com',
        validate:  email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
         if(!valid) {
            console.log('Please provide a valid email.')
            } 
       }},
       {
        type: 'input',
        message: "Please enter the engineer's github.",
        name: 'github',
        default:'CinYP',
        when: (input) => input.role === "Engineer",
        validate:  (answer) => {
            if(answer.length<1) {
                 return console.log('Please provide a valid github profile.')
               }
       }},
       {
        type: 'input',
        message: 'Please enter the school your intern attends',
        name: 'school',
        default:'CinYP',
        when: (input) => input.role === "Intern",
        validate:  (answer) => {
            if(answer.length<1) {
                 return console.log("Please enter the inter's school")
               }
       }},
       {
        type:'confirm',
        name: 'confirmaddMoreEmployees',
        message: 'Would you like to add more team members?',
        default: false 
       }
    ])

    .then(employeeData => {
        let {name, id, email, role, github, school, confirmaddMoreEmployees} = employeeData;
        let employee; 

        if( role === "Engineer"){
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if( role === "Intern"){
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamsArray.push(employee);

        if(confirmaddMoreEmployees){
            return addMoreEmployees(teamsArray);
        }else {
            return teamsArray; 
        }
    })
};

//function to generate the html file
const writeFile = data => {
    fs.writeFile('./src/index.html', data, err => {
        if (err){
            //if there's an error, this will show the error 
            console.log(err);
            return
        } else {
            //if the file has been created successfully, this will show in terminal
            console.log(`
            ==============
            You're team profile has been successfully created! Please check out index.html for profile details. 
            ==============
            `)
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray)
})
.then(pageHTML =>{
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err); 
}); 


/*

const getRole = () => {
    return promises.resolve([
           {
            type: 'list', 
            message:'What is your role?',
            name: 'role',
            choices: ['Intern', 'Manager', 'Engineer', 'Employee']
            },
    ])
};

const confirmRoleDetails = (role) => {}
    return {
        type: 'confirm',
        name: 'toUpdate',
        message: `Would you like to update role?${data.role}?`,
        validate: function(data){
            if( answers.role == 'manager'){
                //managerGetOffice(); 
                
                // (data) => {
                //     const newEmployee = employeeRecos.map(info, index)=>{
                //         return {
                //             key:Employee, 
                //             name:`${data.name}`,
                //             id: `${data.id}`,
                //             email: `${data.email}`,
                //             position:`${data.position}`,
                //             Office #: `${data.officeNumber}
                //         }}
                // }} return {
                //     type:'rawlist', 
                //     name: `position.name`, 
                // }; 
            } else if (answer.role == 'Intern'){
              // internGetSchool()
             
              console.log('intern'); 
              // (data) => {
                //     const newEmployee = employeeRecos.map(info, index)=>{
                //         return {
                //             key:Employee, 
                //             name:`${data.name}`,
                //             id: `${data.id}`,
                //             email: `${data.email}`,
                //             position:`${data.position}`,
                //             School `${data.school}
                //         }}
                // }} return {
                //     type:'rawlist', 
                //     name: `position.name`, 
                // }; 
            } else if( answer.role == 'Engineer'){
                //engineerGetGithub()
                console.log('Engineer');
                // (data) => {
                //     const newEmployee = employeeRecos.map(info, index)=>{
                //         return {
                //             key:Employee, 
                //             name:`${data.name}`,
                //             id: `${data.id}`,
                //             email: `${data.email}`,
                //             position:`${data.position}`,
                //             GitHub: `${data.username}
                //         }}
                // }} return {
                //     type:'rawlist', 
                //     name: `position.name`, 
                // }; 
            }
        },
    }; 


    // const manager = "get list from manager.js?";
// const intern = "get list from intern.js";
// const engineer = "get lsit from engineer.js";

const addMoreEmplyees = () => {
    return promises.resolve([
        {
         type: 'list', 
         message:'Would you like to add more employees?',
         name: 'moreEmployees',
         choices: ['True', 'False',]
         },
 ])
}


    async function main(){
        const getEmployee = await inquirer.prompt ([
                {
                type: 'input',
                message: 'Please type your name.',
                name: "Employee name",
                validate: function(answer){
                 if(answer.length<1) {
                      return console.log('Please provide a valid name')
                    }
               }},
               {
                   type: 'input',
                   message: 'Please type employee ID.',
                   name: "Employee ID",
                   validate: function(answer){
                    if(answer.length<1) {
                         return console.log('Please provide a valid Id')
                       }
                  }},
                  {
                   type: 'input',
                   message: 'Please type employee email.',
                   name: "Employee email",
                   validate: function(answer){
                    if(answer.length<1) {
                         return console.log('Please provide a valid E-mail.')
                       }
                  }},
                ])

            const getRoleEl = await inquire.prompt(getRole()); 
            const confirmingRoleDetailsEl =  await inquirer.prompt(confirmRoleDetails()); 

         if(role != "Employee"){
            console.log("Please hold while we build your employee page");
         } else if(role == 'Employee'){
            console.log('Please hold while we generate your employee page');
         } else {
            console.log("oh no, something went wrong....")
            console.log(err); 
         }

         const moreEmployees = await inquirer.prompt(addMoreEmplyees(getRoles.addEmp))
    } 

main(); 

//-------------------------------


*/ 