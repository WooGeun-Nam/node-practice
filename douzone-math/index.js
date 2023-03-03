module.exports = {
    PI: 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        // Array.prototype.forEach.call(arguments,function(e){});
        
        Array.from(arguments).forEach(function(){
            if(e < min) {
                min = e;
            }
        });
        return min;
    },
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(){
            if(e > max) {
                max = e;
            }
        });
        return max;
    }
}