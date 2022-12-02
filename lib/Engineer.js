const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){

        super(name, id, email);
        this.github = github; 
    }

    getGitHub(){
        return this.github; 
    }

    getRole(){
        return "Engineer";  
    }
}

//exporting modules for use
module.exports = Engineer; 