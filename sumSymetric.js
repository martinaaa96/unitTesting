let { assert, expect} = require('chai')
 let {isSymmetric} = require('./checkForSymmetry')

 describe('arr',()=>{

    it('should be array',()=>{
       
        let arr = [];
        
   expect(isSymmetric(arr)).to.be.true
      
    })
    it('should be not array', ()=>{


        let arr = 'Not array '
        let result = isSymmetric(arr)

        expect(result).to.be.false
    })

})
describe('isSymmetric', ()=>{

   
    it('symetric array  ', ()=>{
  
       
        let arr = [1,2,3,4,3,2,1]
     
let result = isSymmetric(arr)
expect(result).to.be.true

    })

    it('not symetric', ()=>{
        let arr = [1,2,3,4,2,1]
     
        let result = isSymmetric(arr)
        expect(result).to.be.false

    })
    describe('isSymetric is a function',()=>{

        it('isSymetric should be a function ',()=>{

            expect(typeof isSymmetric).to.equal('function')
        })
    })
    it('not match types ',()=>{
        expect(isSymmetric([1,2,'1'])).to.be.false
    })

})
