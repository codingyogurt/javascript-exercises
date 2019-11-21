const reverseString = function(string) {
    let strings = string.split("");
    let stringReversed = "";
    for(i = strings.length - 1; i >= 0; i--){
        stringReversed += strings[i];
    }
    return stringReversed;
}

module.exports = reverseString
