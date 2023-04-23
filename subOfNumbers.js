let { assert, expect } = require('chai')
 let {sum} = require('./sumOfNumbers')
 

 describe('sum', ()=> {

    it('should be sum of Numbers', ()=>{
       let arr = [1,2,3]
       let result = sum(arr)
       assert.equal(result,6)
    })
    
 })
 describe('arr',()=>{

    it('should be array',()=>{
        let arr = [];

        assert.equal(sum(arr),[])
    })
 })
 describe('should be array of numbers',()=>{
  
   it('should test if array has only numbers', () => {

      let arr = [1,2,3]
      let sumOfArr = sum(arr)
      let type = typeof sumOfArr        


      assert.equal(type, 'number')

  })
    

    
    
  
 })