//requiring the employee parent class to make a sub-class of manager 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){


        super(name,id,email);
        this.officeNumber = officeNumber; 
    }

    getRole(){
        return "Manager";

    }
}

//exporting modules for use
module.exports = Manager; 