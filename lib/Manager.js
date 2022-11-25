//requiring the employee parent class to make a sub-class of manager 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // this.name = name;
        // this.id = id; 
        // this.email = email; 

        super(name,id,email);
        this.officeNumber = officeNumber; 
    }

    getRole(){
        console.log(this.OfficeNumber); 

    //override the method
    }
}

//What does this mean?
// * `getRole()`&mdash;overridden to return `'Manager'`