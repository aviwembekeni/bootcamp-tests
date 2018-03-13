var assert = require('assert');

describe('the isWeekday function' , function(){
    it('should check if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(false, isWeekday('Saturday'));
        assert.equal(true, isWeekday('Monday'));
    });
});
