var assert = require('assert');

describe('the findItemsOver function' , function(){
    it('should return all the products that have a quantity higher than threshold.' , function(){
        assert.equal([{"name":"pears","qty":37},{"name":"bananas","qty":27}],
         findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 20));

        assert.equal([],
         findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}], 20));

        assert.equal([{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}],
         findItemsOver([{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}], 20));
    });
});
