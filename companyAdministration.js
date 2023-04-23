const companyAdministration = require('./companyAdministration')
let { assert,expect } = require('chai')

describe("Tests companyAdministration", function() {
    describe("Test hiringEmployee", function() {
        

        it("test diffrent position", function() {
            let exp = `We are not looking for workers for this position.`
            assert.throw(()=> companyAdministration.hiringEmployee("Martina", "DiffrentPosition",30),exp)

        });
        it("test experience with greater 3 years ",()=>{
            let exp = `Martina was successfully hired for the position Programmer.`
            
            assert.equal(companyAdministration.hiringEmployee("Martina", "Programmer", 3),exp)
            assert.equal(companyAdministration.hiringEmployee("Martina", "Programmer", 30),exp)

        })
        it("test experience with invalid value", ()=>{
            let exp = `Martina is not approved for this position.`
            assert.equal(companyAdministration.hiringEmployee("Martina", "Programmer", 1),exp)
            assert.equal(companyAdministration.hiringEmployee("Martina", "Programmer", 2),exp)
        })
     });
describe("Test calculateSalary(hours)",()=>{
    
    it("test hours is not a number ot negative number ",()=>{
        assert.throw(()=>{companyAdministration.calculateSalary(-10)},"Invalid hours")
        assert.throw(()=>{companyAdministration.calculateSalary("gosho")},"Invalid hours")
    })
    it("test calculateSalary with valid value", ()=>{
        assert.equal(companyAdministration.calculateSalary(0),0);
        assert.equal(companyAdministration.calculateSalary(1),15);
        assert.equal(companyAdministration.calculateSalary(15),15*15)
        assert.equal(companyAdministration.calculateSalary(160),160*15)
    })
    it("test calcuateSalary bonus", ()=>{
        assert.equal(companyAdministration.calculateSalary(161),161*15+1000)
        assert.equal(companyAdministration.calculateSalary(200),200*15+1000)
    })
})
describe("Test firedEmployee(employees, index)",()=>{

    it("employees with wrong data",()=>{
        assert.throw(()=>companyAdministration.firedEmployee("pesho",0),"Invalid input")
        assert.throw(()=>companyAdministration.firedEmployee({},1),"Invalid input")
        assert.throw(()=>companyAdministration.firedEmployee(["Martina"],2),"Invalid input")
        assert.throw(()=>companyAdministration.firedEmployee(["Martina"],-1),"Invalid input")
        assert.throw(()=>companyAdministration.firedEmployee(["Martina"],"pesho"),"Invalid input")
        assert.throw(()=>companyAdministration.firedEmployee(1,[]),"Invalid input")
    })
    it("test employees fired ",()=>{
        assert.equal(companyAdministration.firedEmployee(["Martina"],0),"")
        assert.equal(companyAdministration.firedEmployee(["Martina","Pesho"],0), "Pesho")
        assert.equal(companyAdministration.firedEmployee(["Martina","Pesho","Gosho"],0),'Pesho, Gosho')
        assert.equal(companyAdministration.firedEmployee(["Martina","Pesho","Gosho"],1),'Martina, Gosho')
        assert.equal(companyAdministration.firedEmployee(["Martina","Pesho","Gosho"],2),'Martina, Pesho')
    })
})
   
});