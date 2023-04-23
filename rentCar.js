const rentCar = require("./rentCar")
let {assert, expect} = require('chai')

describe("Tests rentCar", function() {
    describe(" Test searchCar(shop, model) ", function() {
        it("is not valid shop and model ", ()=>{
            expect(() => { rentCar.searchCar('','') }).to.throw('Invalid input');
            expect(() => { rentCar.searchCar([],[]) }).to.throw('Invalid input');
            expect(() => { rentCar.searchCar('',[]) }).to.throw('Invalid input');
             
        });
it("valid model.length",()=>{
    assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"Volkswagen"),`There is 1 car of model Volkswagen in the catalog!`)
    expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"Mercedes")}).to.throw('There are no such models in the catalog!');

})
     });
     describe("Test calculatePriceOfCar(model, days) ", function(){
        it("throw error - invalid input ", ()=>{
            expect(() => { rentCar.calculatePriceOfCar('','') }).to.throw('Invalid input');
            expect(() => { rentCar.calculatePriceOfCar(5,'') }).to.throw('Invalid input');
            
            expect(() => { rentCar.calculatePriceOfCar('',[]) }).to.throw('Invalid input');
            expect(() => { rentCar.calculatePriceOfCar([],5) }).to.throw('Invalid input');
            expect(() => { rentCar.calculatePriceOfCar(5,[]) }).to.throw('Invalid input');
        })
        it("correct params ", ()=>{
            assert.equal(rentCar.calculatePriceOfCar("Volkswagen",10),'You choose Volkswagen and it will cost $200!')
            assert.equal(rentCar.calculatePriceOfCar("Audi",10),'You choose Audi and it will cost $360!')
            assert.equal(rentCar.calculatePriceOfCar("Toyota",10),'You choose Toyota and it will cost $400!')
            assert.equal(rentCar.calculatePriceOfCar("BMW",10),'You choose BMW and it will cost $450!')
            assert.equal(rentCar.calculatePriceOfCar("Mercedes",10),'You choose Mercedes and it will cost $500!')

        })
        it("No model in input", ()=>{
            expect(() => { rentCar.calculatePriceOfCar()}).to.throw('Invalid input');
        })
     })
     describe("Test checkBudget(costPerDay, days, budget) ", function(){

        it("Throw Error invalin inputs",()=>{
            expect(() => { rentCar.checkBudget(5,[],5) }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget(5,[],[]) }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget([],[],5) }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget("","","") }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget(5,[],"") }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget("",[],5) }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget(5,"",[]) }).to.throw('Invalid input');
            expect(() => { rentCar.checkBudget([],[],[]) }).to.throw('Invalid input');
            
        })
        it("Budget is bigget than cost",()=>{
            assert.equal(rentCar.checkBudget(10,2,20),`You rent a car!`)
            assert.equal(rentCar.checkBudget(10,5,50),`You rent a car!`)
            assert.equal(rentCar.checkBudget(10,10,100),`You rent a car!`)
            assert.equal(rentCar.checkBudget(10,0,10),`You rent a car!`)


        })
        it("Budget is less than cost", ()=>{
            assert.equal(rentCar.checkBudget(10,2,10),'You need a bigger budget!')
            assert.equal(rentCar.checkBudget(10,1,5),'You need a bigger budget!')
        })
     })
   
});