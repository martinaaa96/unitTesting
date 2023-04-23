const carService = require("./03. Car Service_Resources")
let { assert, expect } = require("chai");
const { partsToBuy } = require("./03. Car Service_Resources");

describe("Tests", function () {
    describe("test isItExpensive(issue)", function () {

        it("issue is Engine", function () {
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`)
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`)
            assert.equal(carService.isItExpensive(""),`The overall price will be a bit cheaper`)
        });
    });
    describe("test discount (numberOfParts, totalPrice)", function (){

        it("values are not correct",()=>{
            expect(() => { carService.discount('','') }).to.throw('Invalid input');
            expect(() => { carService.discount(5,"") }).to.throw('Invalid input');
            expect(() => { carService.discount('',5) }).to.throw('Invalid input');
            expect(() => { carService.discount([],5) }).to.throw('Invalid input');
            expect(() => { carService.discount('5',[]) }).to.throw('Invalid input');
        })
        it("number of parts is higher than 2 and smaller or equal to 7 ",()=>{

assert.equal(carService.discount(3,50),`Discount applied! You saved 7.5$`)
assert.equal(carService.discount(7,50),`Discount applied! You saved 7.5$`)

        })
        it("numberOfParts is higher than 7",()=>{
            assert.equal(carService.discount(8,50),`Discount applied! You saved 15$`)

        })
        it("numberOfParts is higher than 2",()=>{
            assert.equal(carService.discount(1,50),"You cannot apply a discount")

        })
    })
    describe("test partsToBuy (partsCatalog, neededParts) ",function(){
        it("values are not correct",()=>{
            expect(() => { carService.partsToBuy('','') }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(5,'') }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy('',5) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy('',[]) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([],'') }).to.throw('Invalid input');
            
        })
it("partsCatalogs are correct ",()=>{
    assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }],["blowoff valve"]),145)
    assert.equal(carService.partsToBuy([0],["blowoff valve"]),0)
})
    })

   
});