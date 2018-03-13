var assert = require('assert');

describe('the regCheck function' , function(){
    it('check if a registration number is for GP, L, EC, MP registration plates.' , function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
});
