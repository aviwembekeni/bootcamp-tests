import require from 'require';
var assert = require('assert');

describe('the isFromBellville function' , function(){
    it('should return true if regNumber starts with CY otherwise retun false' , function(){
        assert.equal('true',isFromBellville('CY'));
    });
});
