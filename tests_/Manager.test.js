//using manager module 
const Manager = require("../lib/Manager");


describe("Manager", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the manager", ()=>{
            const manager = new Manager('Cinthia','00125','cinthiapruitt@gmail.com',4); 
  
            expect(manager.officeNumber).toEqual(expect.any(Number));
        })
            //gets role from getRole
        it("gets role of employee", ()=>{
             const manager = new Manager('Cinthia','00125','cinthiapruitt@gmail.com',4); 
               
             expect(manager.getRole()).toEqual('Manager'); 
        })
    });
    
});