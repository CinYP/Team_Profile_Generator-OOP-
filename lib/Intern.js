const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email; 

        super(school);
        this.school = this.school; 
    }

    getSchool(){
        console.log(this.school); 
    }

    getrole(){
        return "Intern"; 
    }
}

//exporting modules for use
module.exports = Intern; 