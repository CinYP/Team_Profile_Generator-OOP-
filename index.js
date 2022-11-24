import inquirer from 'inquirer';

inquirer
.prompt([
    {
        type: 'input', 
        message:'Please type your name.',
        name: 'name',
        validate: function(answer){
            if(answer.lenght<1) {
                return console.log('Please provide a valid name')
            }
        }
     },
     {
        type: 'input', 
        message:'Please provide Employee ID.',
        name: 'id',
        validate: function(answer){
            if(answer.lenght<1) {
                return console.log('Please provide a valid name')
            }
        }
     },
     {
        type: 'input', 
        message:'Please provide valid email.',
        name: 'email',
        validate: function(answer){
            if(answer.lenght<1) {
                return console.log('Please provide a valid name')
            }
        }
     },
     {
        type: 'list', 
        message:'What is your role?',
        name: 'role',
        choices: ['Intern', 'Manager', 'Engineer']
     },
     
 ])
 .then((answers) => {
    
   // Use user feedback for... whatever!!
 })
 .catch((error) => {
   if (error.isTtyError) {
     // Prompt couldn't be rendered in the current environment
   } else {
     // Something else went wrong
   }
 });

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