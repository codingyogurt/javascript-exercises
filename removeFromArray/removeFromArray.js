const removeFromArray = function(arr, remove) {
    for (i = 1; i < arguments.length; i++){
        let index = arr.indexOf(arguments[i]);
        if (index != -1){
            arr.splice(index,1);
        }
    }
    return arr;
}

module.exports = removeFromArray
