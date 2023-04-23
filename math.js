let { assert, expect } = require('chai')
let { mathEnforcer } = require('./math')

describe('mathEnforcer',()=>{

    describe('addFive',()=>{
        it('should return undefined , cause num is not a integer ',()=>{

           
            expect(mathEnforcer.addFive('marti')).to.equal(undefined)

        })
        it('should  return correct result , cause num is a integer ',()=>{

            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('should  return correct result , cause num is a negative number ',()=>{

            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })
        it('should  return correct result , cause num is a floating number ',()=>{

            expect(mathEnforcer.addFive(7.25)).to.equal(12.25)
        })
        it('should  return correct result , cause num is a floating negative number ',()=>{

            expect(mathEnforcer.addFive(-7.25)).to.equal(-2.25)
        })

    })

describe('subtractTen',()=>{

    it('should return undefined , cause num is not a integer ',()=>{

           
        expect(mathEnforcer.subtractTen('marti')).to.equal(undefined)

    })
    it('should  return correct result , cause num is a integer ',()=>{

        expect(mathEnforcer.subtractTen(10)).to.equal(0)
    })
    it('should  return correct result , cause num is a negative number ',()=>{

        expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
    })
    it('should  return correct result , cause num is a floating number ',()=>{

        expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5)
    })
    

})
describe('sum',()=>{

    it('should return undefined , cause num2 is not a integer ',()=>{

           
        expect(mathEnforcer.sum(1,'1')).to.equal(undefined)

    })
    it('should return undefined , cause num is not a integer ',()=>{

           
        expect(mathEnforcer.sum('1',1)).to.equal(undefined)

    })
    it('should  return correct result , cause num is a integer ',()=>{

        expect(mathEnforcer.sum(10,5)).to.equal(15)
    })
    it('should  return correct result , cause num1 is a negative number ',()=>{

        expect(mathEnforcer.sum(-5,10)).to.equal(5)
    })
    it('should  return correct result , cause num2 is a negative number  ',()=>{

        expect(mathEnforcer.sum(10,-5)).to.equal(5)
    })
    it('should  return correct result , cause num1 is a floating number ',()=>{

        expect(mathEnforcer.sum(5.5,5)).to.equal(10.5)
    })
    it('should  return correct result , cause num2 is a floating number ',()=>{

        expect(mathEnforcer.sum(5,5.5)).to.equal(10.5)
    })

    
})








})