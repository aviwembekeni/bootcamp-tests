describe('the findItemsOver20 function' , function(){
    it('should return all the products that have a quantity higher than 20.' , function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}],
         findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));

    });

    it('should return all the products that have a quantity higher than 20.' , function(){
        assert.deepEqual([],
         findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]));

    });

    it('should return all the products that have a quantity higher than 20.' , function(){
        
        assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}],
         findItemsOver20([{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]));
    });
});
