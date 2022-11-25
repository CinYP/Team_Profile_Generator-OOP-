const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, username){
    //     this.name = name;
    //     this.id = id; 
    //     this.email = email; 

        super(name, id, email);
        this.username = username; 
    }

    getGitHub(){
        console.log(this.username); 
    }

    getrole(){
  // getRole()—overridden to return 'Engineer'???   
    }
}


