const flowerShop = require('./flowerShop')
let {assert, expect} = require('chai')

describe("Tests FlowerShop", function() {

    describe("test calcPriceOfFlowers(flower, price, quantity) ", function() {
        it("invalid values in input", ()=>{
            expect(() => { flowerShop.calcPriceOfFlowers("","","") }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers([5],"","") }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers([],"","") }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(5,6,7) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers([],"",6) }).to.throw('Invalid input!');


        });
        it("correct values", ()=>{
            assert.equal(flowerShop.calcPriceOfFlowers("rosses",10,2),'You need $20.00 to buy rosses!')
            assert.equal(flowerShop.calcPriceOfFlowers("rosses",5,2),'You need $10.00 to buy rosses!')
        })
     });
     describe("Test checkFlowersAvailable(flower, gardenArr) ",function(){

        it("available flowers ",()=>{
            assert.equal(flowerShop.checkFlowersAvailable("Orhid",["Rose", "Lily", "Orchid"]),`The Orhid are sold! You need to purchase more!`)
            assert.equal(flowerShop.checkFlowersAvailable("Lily",["Lily"]),`The Lily are available!`)
            assert.equal(flowerShop.checkFlowersAvailable("Orhid","Lily",["Orhid","Lily"]),`The Orhid are sold! You need to purchase more!`)
        })
     })
     describe("Test sellFlowers(gardenArr, space)",function(){
        it("Not invalid inputs",()=>{
            expect(() => { flowerShop.calcPriceOfFlowers("","") }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers([],"") }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers(5,[]) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers(5,5) }).to.throw('Invalid input!');
        expect(() => { flowerShop.calcPriceOfFlowers([],[]) }).to.throw('Invalid input!');
        })
it("remove element ", ()=>{
    assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1),'Rose / Orchid')
    assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0),'Lily / Orchid')
    assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2),'Rose / Lily')
})

     })
    
});