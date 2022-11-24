const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email; 

        super(username);
        this.github = this.officeNumber; 
    }

    getGitHub(){
        console.log(this.username); 
    }

    getrole(){
  // getRole()—overridden to return 'Engineer'???   
    }
}




