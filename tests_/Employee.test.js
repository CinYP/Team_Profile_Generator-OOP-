const Employee = require('../lib/Employee');


describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the manager", ()=>{
        const employee = new Employee('Cinthia','00125','cinthiapruitt@gmail.com'); 
        
            expect(employee.name).toEqual(expect.any(String));
            expect(parseInt(employee.id)).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));

        }); 

        it("should return employee name", ()=>{
            const employee = new Employee('Cinthia','00125','cinthiapruitt@gmail.com'); 

            expect(employee.getName()).toEqual(expect.any(String));

        });
        it("should return employee ID", ()=>{
            const employee = new Employee('Cinthia','00125','cinthiapruitt@gmail.com'); 

            expect(parseInt(employee.getId())).toEqual(expect.any(Number));

        });
        it("should return employee email", ()=>{
            const employee = new Employee('Cinthia','00125','cinthiapruitt@gmail.com'); 

            expect(employee.getEmail()).toEqual(expect.any(String));

        });
        it("should return employee role", ()=>{
            const employee = new Employee('Cinthia','00125','cinthiapruitt@gmail.com'); 

            expect(employee.getRole()).toEqual('Employee');

        });
    });
});