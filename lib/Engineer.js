const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){

        super(name, id, email);
        this.github = github; 
    }

    getGitHub(){
        console.log(this.github); 
    }

    getrole(){
        return "Engineer";  
    }
}

//exporting modules for use
module.exports = Engineer; 