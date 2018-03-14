describe('the yearsAgo function' , function(){
    it('should return how many years ago 1976 was.' , function(){
        assert.equal(new Date().getFullYear() - 1976, yearsAgo(1976));
    });

    it('should return how many years ago 2000 was.' , function(){
        assert.equal(new Date().getFullYear() - 2000, yearsAgo(2000));
    });
});
