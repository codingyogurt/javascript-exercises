const sumAll = function(startNum, endNum) {

    if (typeof startNum !== "number" ||
        typeof endNum !== "number" ||
        startNum < 0 ||
        endNum < 0 ) return "ERROR";

    if (startNum > endNum){
        const temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    let sum = 0;
    for(i = startNum; i <= endNum; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
