//using manager module 
const Intern = require("../lib/Intern");


describe("Intern", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the intern", ()=>{
            const intern = new Intern(); 
            //do i need to add  new Intern('Cinthia','00225','cinthiapruitt@gmail.com','Georgia Tech');?
            expect(intern.school).toEqual(expect.any(String));
    
            // expect("string" in obj).toEqual(true);
        })
            //gets role from getRole
        it("gets the employee's school", ()=>{
             const intern = new intern(); 
                //do i need to add  new Intern('Cinthia','00225','cinthiapruitt@gmail.com','Georgia Tech');?
             expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString())); 
        })
        it("gets role of employee", ()=>{
            const intern = new Intern(); 
               //do i need to add  new Intern('Cinthia','00225','cinthiapruitt@gmail.com','Georgia Tech');?
            expect(intern.getRole()).toEqual('Intern'); 
       })
    }) 
})