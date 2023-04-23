const movieTheater = require('./Movie Theater _Resources')
let { assert,expect } = require('chai')

describe("Tests", function() {
    describe("test  ageRestrictions (movieRating) ", function() {

        it("test ageRestriction in not valid", function() {
            assert.equal(movieTheater.ageRestrictions(),"There are no age restrictions for this movie")
            assert.equal(movieTheater.ageRestrictions(""),"There are no age restrictions for this movie")
        });
        it("test ageRestriction is valid",()=>{
            assert.equal(movieTheater.ageRestrictions("G"),"All ages admitted to watch the movie")
            assert.equal(movieTheater.ageRestrictions("PG"),"Parental guidance suggested! Some material may not be suitable for pre-teenagers")
            assert.equal(movieTheater.ageRestrictions("R"),"Restricted! Under 17 requires accompanying parent or adult guardian")
            assert.equal(movieTheater.ageRestrictions("NC-17"),"No one under 17 admitted to watch the movie")
        })
     });
     describe("test moneySpent (tickets, food, drinks)",function(){
        it("tickets, food and drinks is not valid ",()=>{

            expect(() => { movieTheater.moneySpent('', '','') }).to.throw('Invalid input');
            expect(() => { movieTheater.moneySpent(10, '','') }).to.throw('Invalid input');
            expect(() => { movieTheater.moneySpent('', [],'') }).to.throw('Invalid input');
            expect(() => { movieTheater.moneySpent('', [],[]) }).to.throw('Invalid input');
        })
        it("correnct values ", ()=>{

            assert.equal(movieTheater.moneySpent(3,["Nachos"],["Soda"]),'The total cost for the purchase with applied discount is 42.80')
            assert.equal(movieTheater.moneySpent(4,["Popcorn"],["Soda","Water"]),'The total cost for the purchase with applied discount is 54.80')
            assert.equal(movieTheater.moneySpent(2,["Popcorn"],["Soda","Water"]),'The total cost for the purchase is 38.50')
            assert.equal(movieTheater.moneySpent(2,["Popcorn","Nachos"],["Soda","Water"]),'The total cost for the purchase is 44.50')
        })
     })
describe("Test reservation (rowsArray, neededSeatsCount)",function(){
    it("reservation with wrong value",()=>{
        assert.throw(()=>movieTheater.reservation("pesho",0),"Invalid input")
        assert.throw(()=>movieTheater.reservation([],"10"),"Invalid input")
        assert.throw(()=>movieTheater.reservation("pesho",[]),"Invalid input")

    })
    it("reservation with correct values",()=>{
        assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }],1),1)
        assert.equal(movieTheater.reservation([{ rowNumber: 3, freeSeats: 7 }],3),3)
        assert.equal(movieTheater.reservation([{ rowNumber: 3, freeSeats:0  }],0),3)
        assert.equal(movieTheater.reservation([{ rowNumber: 3, freeSeats:0  },{ rowNumber: 3, freeSeats:1 }],0),3)
    })
})
    
});
