const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    num = parseInt(num);
    if (num <= 2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

module.exports = fibonacci
