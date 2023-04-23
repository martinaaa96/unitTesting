let { assert, expect } = require('chai')
 let {isOddOrEven} = require('./oddEven')

 describe('isOddOrEven is a function', () => {

    it('isOddOrEven should be a function ', () => {

        expect(typeof isOddOrEven).to.equal('function')
    })
     
    
    it('param is not a string ',()=>{


        let stringValue = 123
        let result = isOddOrEven(stringValue)

        expect(typeof result).to.equal('undefined')
        
    })

    it('param is a odd length ',()=>{

        let stringValue = 'Marti'
        
        let result = isOddOrEven(stringValue)

        expect(result).to.equal('odd')


    })
it('param is a even length ',()=>{
    let stringValue = 'Dari'
        
    let result = isOddOrEven(stringValue)

    expect(result).to.equal('even')

})


})