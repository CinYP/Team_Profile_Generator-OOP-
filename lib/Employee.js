class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email; 
    }

    getName(){
      return this.name; 
    };

    getId(){
      return this.id; 
    //this is a number
    };

    getEmail(){
     return this.email; 
    }

    getRole(){
     return 'Employee';

    }
};

//exporting modules for use
module.exports = Employee; 
