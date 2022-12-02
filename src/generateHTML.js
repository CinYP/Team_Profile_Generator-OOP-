// const generateManager = function (manager) {
// generateHTML(teamsArray);  

function generateHTML(teamsArray) {
    const managers = teamsArray.filter((employee)=> employee.getRole()=== 'Manager')
    const engineers = teamsArray.filter((employee)=> employee.getRole()=== 'Engineer')
    const interns = teamsArray.filter((employee)=> employee.getRole()=== 'Intern')
    console.log(managers); 

    const managerMap = managers.map((manager)=> `
    <div>
    <h2> ${manager.getName()}</h2>
    <h3>  ${manager.getRole()} </h3>
    <h4>  ${manager.getId()} </h4>
    <h4> <a href="${manager.getEmail()}"> ${manager.getEmail()}</a></h4>
    <h4>  ${manager.officeNumber} </h4>
    </div>
    `).join(''); 

   const engineerMap =  engineers.map((engineer)=> `
    <div>
    <h2> ${engineer.getName()}</h2>
    <h3>  ${engineer.getRole()} </h3>
    <h4>  ${engineer.getId()} </h4>
    <h4> <a href="${engineer.getEmail()}"> ${engineer.getEmail()}</a> </h4>
    https://github.com/CinYP
   <h4> <a href=" https://github.com${engineer.getGitHub()}"> ${engineer.getGitHub()}</a></h4>

 </div>
    `).join(''); 

    const internMap = interns.map((intern)=> `
    <div>
    <h2> ${intern.getName()}</h2>
    <h3>  ${intern.getRole()} </h3>
    <h4>  ${intern.getId()} </h4>
    <h4> <a href="${intern.getEmail()}"> ${intern.getEmail()}</a></h4>
    <h4>  ${intern.getSchool()} </h4>
 </div>
    `).join(''); 

   const teamArray = []; 
    
    teamArray.push(managerMap, engineerMap, internMap); 
    


return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Builder</title>
</head>
<body>
 ${teamArray.join('')}
    
</body>
</html>
`
};

module.exports = generateHTML;

// }

//use template literals 
//1. html - one hook 
//create for-loop for the tables 