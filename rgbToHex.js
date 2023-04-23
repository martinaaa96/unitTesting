let { assert, expect } = require('chai')
let { rgbToHexColor } = require('./hex')


describe('rgbToHexColor is a function', () => {

    it('rgbToHexColor should be a function ', () => {

        expect(typeof rgbToHexColor).to.equal('function')
    })
})
describe('No integer input ', () => {

    it('input is not a  number ', () => {

        let input = !Number.isInteger
        let result = rgbToHexColor(input)
        expect(result).to.be.undefined

    })
})
describe('integer', () => {

    it('input is a number ', () => {

        let redHex = rgbToHexColor(255, 0, 0);
        let greenHex = rgbToHexColor(0, 255, 0);
        let blueHex = rgbToHexColor(0, 0, 255);

        expect(redHex).to.equal("#FF0000");
        expect(greenHex).to.equal("#00FF00");
        expect(blueHex).to.equal("#0000FF");


    })
    
    it('undefined range ',()=>{

        expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined")
        expect(typeof rgbToHexColor(-16,10,30)).to.equal('undefined')
        expect(typeof rgbToHexColor(15,260,30)).to.equal('undefined')
        expect(typeof rgbToHexColor(10.5,10,20)).to.equal('undefined')
        expect(typeof rgbToHexColor(0)).to.equal('undefined')
        expect(typeof rgbToHexColor(-10,-5,-30)).to.equal('undefined')
        expect(typeof rgbToHexColor()).to.equal('undefined')
        expect(typeof rgbToHexColor(15,20,260)).to.equal('undefined')
    })

    
})