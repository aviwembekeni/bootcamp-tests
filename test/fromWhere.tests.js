var assert = require('assert');

describe('the fromWhere function' , function(){
    it('should return the town the car is from.' , function(){
        assert.equal('Bellville', fromWhere('CY'));
        assert.equal('Paarl', fromWhere('CJ'));
        assert.equal('Cape Town', fromWhere('CA'));
        assert.equal('Some other place!', fromWhere('CC'));
    });
});
