//using manager module 
const Manager = require("../lib/Manager");


describe("Manager", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the manager", ()=>{
            const manager = new Manager(); 
            //do i need to add  new Manager('Cinthia','00125','cinthiapruitt@gmail.com',4);?
            expect(manager.officeNumber).toEqual(expect.any(Number));
    
            // expect("string" in obj).toEqual(true);
        })
            //gets role from getRole
        it("gets role of employee", ()=>{
             const manager = new Manager(); 
                //do i need to add  new Manager('Cinthia','00125','cinthiapruitt@gmail.com',004);?
             expect(manager.getRole()).toEqual('Manager'); 
        })
    });
    
});