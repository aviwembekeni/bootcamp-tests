var assert = require('assert');

describe('the countRegNumber function' , function(){
    it('should return the number of registration numbers in the string received as a parameter' , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
        assert.equal(2, countRegNumber('CA 42665, AA 12 RT GP'));
    });
});
