//using manager module 
const Engineer = require("../lib/Engineer");


describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the intern", ()=>{
            const engineer = new Engineer(); 
            //do i need to add  new engineer('Cinthia','00225','cinthiapruitt@gmail.com','CinYP');?
            expect(engineer.github).toEqual(expect.any(String));
    
            // expect("string" in obj).toEqual(true);
        })
            //gets role from getRole
        it("gets the employee's github", ()=>{
             const engineer = new Engineer(); 
                //do i need to add  new engineer('Cinthia','00225','cinthiapruitt@gmail.com','CinYP');?
             expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.getGitHub.toString())); 
        })
        it("gets role of employee", ()=>{
            const engineer = new Engineer(); 
               //do i need to add  new Intern('Cinthia','00225','cinthiapruitt@gmail.com','CinYP');?
            expect(engineer.getRole()).toEqual('Engineer'); 
       })
    }) 
});
