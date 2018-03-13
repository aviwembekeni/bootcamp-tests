import require from 'require';
var assert = require('assert');

describe('the totalPhoneBill function' , function(){
    it('should calculate the total bill for the data provided.' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});
