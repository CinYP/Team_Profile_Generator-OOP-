class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email; 
    }

    getName(){
      console.log(`name: ${this.name}`);

    };

    getId(){
    console.log(`id: ${this.id}`);
    //this is a number
    };

    getEmail(){
     console.log(`email: ${this.email}`)
    }

    getrole(){
     return 'Employee';

     //static value according to the class that it is in
    }
};
// const employee = new Employee('Cinthia', 456,'cinthiapruitt@gmail.com');

//exporting modules for use
module.exports = Employee; 
