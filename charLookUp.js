let { assert, expect } = require('chai')
let { lookupChar } = require('./charLookUp')

describe(' lookupChar is a function', () => {

    it(' lookupChar should be a function ', () => {

        expect(typeof lookupChar).to.equal('function')

    })
    it('string is not a string and index is not a number ',()=>{

        expect(lookupChar(5,'Dari')).to.be.undefined

    })
    it('params are correct , but value of index is bigger than ',()=>{

        assert.equal(lookupChar('Dari',5),"Incorrect index")

    })
    it('params are correct, but value of index is equal to the string length,',()=>{

        assert.equal(lookupChar('Dari',4),"Incorrect index")

    })

it('params are correct, but value of index is negative number', ()=>{

    assert.equal(lookupChar('Dari',-1),"Incorrect index")
})
it('params are correct, char at the specified index ', ()=>{

    assert.equal(lookupChar('Dari',0),"D")
})
it('params are correct,char at the specified index', ()=>{

    assert.equal(lookupChar('Dari',3),"i")
})

//"Incorrect index"

it('returning a undefined',()=>{


   expect(lookupChar('Dari',4)).to.equal('Incorrect index')

})
it('params are correct, but value of index is equal to the string length,',()=>{

    assert.equal(lookupChar('1',1),"Incorrect index")

})
it('params are correct, but value of index is equal to the string length,',()=>{

    assert.equal(lookupChar(1,1),undefined)

})
it('params are correct, but value of index is floating number,',()=>{


    expect(lookupChar('Dari',3.3)).to.be.undefined

})

it('type of string and index is invalid',()=>{

    let strings = 'Dari'
    let indexes = 4

    expect(lookupChar(typeof !strings,typeof indexes)).to.be.undefined
})

it('type of string and index is invalid',()=>{

    let strings = 'Dari'
    let indexes = 4

    expect(lookupChar(typeof strings,typeof !indexes)).to.be.undefined
})
})