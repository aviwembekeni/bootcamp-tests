describe('the yearsAgo function' , function(){
    it('should return how many years ago that was.' , function(){
        assert.equal(new Date().getFullYear() - 1976, yearsAgo(1976));
        assert.equal(new Date().getFullYear() - 2000, yearsAgo(2000));
    });
});
