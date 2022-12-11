//using manager module 
const Intern = require("../lib/Intern");


describe("Intern", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the intern", ()=>{
            const intern = new Intern('Cinthia','00125','cinthiapruitt@gmail.com','Georgia Tech'); 

            expect(intern.school).toEqual(expect.any(String));
    
        })
        // it("gets the employee's school", ()=>{
        //      const intern = new intern('Cinthia','00125','cinthiapruitt@gmail.com','Georgia Tech'); 

        //      expect(intern.getSchool()).toEqual(expect.any(String)); 
        // })
        it("gets role of employee", ()=>{
            const intern = new Intern('Cinthia','00125','cinthiapruitt@gmail.com','Georgia Tech'); 

            expect(intern.getRole()).toEqual('Intern'); 
       })
    }) 
})