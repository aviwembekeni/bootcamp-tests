describe('the greet function' , function(){
    it('should greet Janine correctly' , function(){
        assert.equal('Hello, Janine', greet('Janine'));

    });

    it('should greet Aviwe correctly' , function(){
        assert.equal('Hello, Aviwe', greet('Aviwe'));

    });
});
