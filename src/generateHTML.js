// const generateManager = function (manager) {
// generateHTML(teamsArray);  

function generateHTML(teamsArray) {
    const managers = teamsArray.filter((employee)=> employee.getRole()=== 'Manager')
    const engineers = teamsArray.filter((employee)=> employee.getRole()=== 'Engineer')
    const interns = teamsArray.filter((employee)=> employee.getRole()=== 'Intern')
    console.log(managers); 

    const managerMap = managers.map((manager)=> `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item"><a href="${manager.getEmail()}"> ${manager.getEmail()}</a></h4></li>
            <li class="list-group-item">Office #: ${manager.officeNumber}</li>
        </ul>
  </div>
    `).join(''); 
        
   const engineerMap =  engineers.map((engineer)=> `
   <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item"><a href="${engineer.getEmail()}"> ${engineer.getEmail()}</a></h4></li>
            <li class="list-group-item"><a href=" https://github.com${engineer.getGitHub()}"> Github:${engineer.getGitHub()}</li>
        </ul>
 </div>
   `).join(''); 


//    const engineerMap =  engineers.map((engineer)=> `
//     <div>
//     <h2> ${engineer.getName()}</h2>
//     <h3>  ${engineer.getRole()} </h3>
//     <h4>  ${engineer.getId()} </h4>
//     <h4> <a href="${engineer.getEmail()}"> ${engineer.getEmail()}</a> </h4>
//     https://github.com/CinYP
//    <h4> <a href=" https://github.com${engineer.getGitHub()}"> ${engineer.getGitHub()}</a></h4>

//  </div>
//     `).join(''); 

const internMap = interns.map((intern)=> `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text">${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item"><a href="${intern.getEmail()}"> ${intern.getEmail()}</a></h4></li>
        <li class="list-group-item">School: ${intern.getSchool()} </li>
    </ul>
</div>
`).join(''); 

//     const internMap = interns.map((intern)=> `
//     <div>
//     <h2> ${intern.getName()}</h2>
//     <h3>  ${intern.getRole()} </h3>
//     <h4>  ${intern.getId()} </h4>
//     <h4> <a href="${intern.getEmail()}"> ${intern.getEmail()}</a></h4>
//     <h4>  ${intern.getSchool()} </h4>
//  </div>
//     `).join(''); 

   const teamArray = []; 
    
    teamArray.push(managerMap, engineerMap, internMap); 
    


return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--Adding CSS Stylesheet-->
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile Builder</title>
    <nav class="navbar navbar-light bg-light text-center">
    <span class="navbar-brand mb-0 h1 text-center"> Team Profile </span>
  </nav>
</head>
<body>
 <main class="cardholder">
 ${teamArray.join('')}
</main>
    
</body>
</html>
`
};

module.exports = generateHTML;

// }

//use template literals 
//1. html - one hook 
//create for-loop for the tables 