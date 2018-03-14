describe('the isWeekday function' , function(){
    it('should return true if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return false if the parameter passed in is a weekend day.' , function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});
