//using manager module 
const Engineer = require("../lib/Engineer");


describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the intern", ()=>{
            const engineer = new Engineer('Cinthia','00225','cinthiapruitt@gmail.com','CinYP'); 
        
            expect(engineer.github).toEqual(expect.any(String));
    
        })
        //     //gets githib from getGitHub
        // it("gets the employee's github", ()=>{
        //      const engineer = new Engineer('Cinthia','00225','cinthiapruitt@gmail.com','CinYP'); 
               
        //      expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.getGitHub.toString())); 
        // })
          //gets role from getRole
        it("gets role of employee", ()=>{
            const engineer = new Engineer('Cinthia','00225','cinthiapruitt@gmail.com','CinYP'); 
               
            expect(engineer.getRole()).toEqual('Engineer'); 
       })
    }) 
});
