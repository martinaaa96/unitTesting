let { assert, expect } = require('chai')
let {createCalculator}= require('./addSubstract')


describe('createCalculator functionality ',()=>{

    it('shoud return an object',()=>{

        expect(typeof createCalculator()).to.equal('object')

    })
    it('should return an object with properties as a functions ',()=>{
        let obj = createCalculator();
        expect(obj).haveOwnProperty('add')
        expect(obj).haveOwnProperty('subtract')
        expect(obj).haveOwnProperty('get')
    })
    it('internal sum can not be modified', ()=>{
        expect(createCalculator().value).to.equal(undefined)   
     })
     it('Method Add ',()=>{

        let calc = createCalculator();
        calc.add(3)
        expect(calc.get()).to.equal(3);
        calc.add('3')
        expect(calc.get()).to.equal(6)
     })
     it('Method Subtrac',()=>{

        let calc = createCalculator();
        calc.add(9);
        calc.subtract(1);
        expect(calc.get()).to.equal(8);
        calc.subtract('4');
        expect(calc.get()).to.equal(4)
     })
})