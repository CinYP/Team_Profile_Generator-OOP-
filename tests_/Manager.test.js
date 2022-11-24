const Manager = require("manager.js");
const { describe, it } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("Manager", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing information about the manager", ()=>{
            const obj = new Manager(); 
    
            expect("string" in obj).toEqual(true);
            //come back to this after you write those functions 
        })

        it("should return X", ()=>{
            const variable = ""
            const obj = new Manager(variable); 
    
            expect("string" in obj).toEqual(true);
            //come back to this after you write those functions 
        })
    })
    
})