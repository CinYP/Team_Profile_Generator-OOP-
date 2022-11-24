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
    console.log(`ID: ${this.id}`);
    };

    getEmail(){
     console.log(`email: ${this.email}`)
    }

    getrole(){
     console.log('role')
    }
};
// const employee = new Employee('Cinthia', 456,'cinthiapruitt@gmail.com');


module.exports = Employee; 
