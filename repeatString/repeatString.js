const repeatString = function(text, num) {
    let allText = "";
    if (num >= 0){ 
        for(i = 0; i < num; i++){
            allText += text;
        }
    } else {
        return "ERROR";
    }
    return allText;
}

module.exports = repeatString
