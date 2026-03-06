(function require() {

    var num1 = 11;
    function some_function() {
        console.log(num1);

        var num3 = 23;
        console.log(num3);
    }
    return some_function();

})();