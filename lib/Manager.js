//requiring the employee parent class to make a sub-class of manager 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email; 

        super(officeNumber);
        this.officeNumber = this.officeNumber; 
    }

    getRole(){
        console.log(this.OfficeNumber); 
    }
}

//What does this mean?
// * `getRole()`&mdash;overridden to return `'Manager'`