import { getEventListeners } from 'events';
import inquirer from 'inquirer';
const fs = require('fs');

const getRole = () => {
    return promises.resolve([
           {
            type: 'list', 
            message:'What is your role?',
            name: 'role',
            choices: ['Intern', 'Manager', 'Engineer', 'Employee']
            },
    ])
}

const confirmRoleDetails = (role) => {
    return {
        type: 'confirm',
        name: 'toUpdate',
        message: `Would you like to update role${answers.role}?`,
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
        const getEmployee = await inquirer.prompt ({
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
        })
            const getRoleEl = await inquire.prompt(getRole()); 
            const confirmingRoleDetailsEl =  await inquirer.prompt(confirmRoleDetails()); 

         if(role != "Employee"){
            console.log("please wait while we build your employee page")
         } else {
            console.log("oh no, something went wrong....")
            console.log(err); 
         }

         const moreEmployees = await inquirer.prompt(addMoreEmplyees(getRoles.addEmp))
    }


    

main(); 

//-------------------------------

//internal modules - Do I still need these? 
// const api = require('./utils/api.js')
// const generateMarkdown = require('./utils/generateMarkdown.js');

// inquirer
// questions = [
//     {
//         type: 'input', 
//         message:'Please type your name.',
//         name: 'name',
//         validate: function(answer){
//             if(answer.length<1) {
//                 return console.log('Please provide a valid name')
//             }
//         }
//      },
//      {
//         type: 'input', 
//         message:'Please provide Employee ID.',
//         name: 'id',
//         validate: function(answer){
//             if(answer.length<1) {
//                 return console.log('Please provide a valid name')
//             }
//         }
//      },
//      {
//         type: 'input', 
//         message:'Please provide valid email.',
//         name: 'email',
//         validate: function(answer){
//             if(answer.length<1) {
//                 return console.log('Please provide a valid name')
//             }
//         }
//      },
//      {
//         type: 'list', 
//         message:'What is your role?',
//         name: 'role',
//         choices: ['Intern', 'Manager', 'Engineer', 'Employee']
//      },
     
//  ]
//  .prompt()
//  .then((answers) => {
//     //this will have the answer 
//    // Use user feedback for... whatever!!
//  })
//  .catch((error) => {
//    if (error.isTtyError) {
//      // Prompt couldn't be rendered in the current environment
//    } else {
//      // Something else went wrong
//    }
//  });

//start function add here




// function Manager(){
 //  Manager.prototype.
// }

// // Function to write HTML file 
// function writetofile(filename, data){
//     fs.writeFile(filename, data, err => {
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("yay, you generated a team Profile file!")
//         }
//     })
// }

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// module.exports 