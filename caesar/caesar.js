const caesar = function(string, numShift) {
    chars = string.split("");
    numShift = numShift % 26; // range shift cap
    const caesarCode = chars.map((char) => {
        let isLowerCase = false;
        if(char === char.toLowerCase()){
            isLowerCase = true;
            char = char.toUpperCase();
        }
        char = char.charCodeAt(0);
        if(char >= 65 && char <= 123){ // if a letter
            char += numShift;
            if (char > 90) {
                char = (char - 90) + 64;
            } // 90 is Z
            if (char < 65){
                char = 91 - (65 - char);
            } // 65 is A
            char = String.fromCharCode(char);
            if (isLowerCase){
                char = char.toLowerCase();
            }
            return char;
        }

        return String.fromCharCode(char);
        
    });
    return caesarCode.join("");



}

module.exports = caesar

// for (i=65;i<=90;i++){
// 	console.log(String.fromCharCode(i));
// } // printing all letters in the alphabet using key codes

/**
 * 1. breakdown all letter into an array
 * 2. loop thru the array
 * 3. check if char is upperCase, toogle isUpperCase
 * 4. convert char into charCode
 * 5. add shift into charCode
 * 6. convert charCode into char
 * 7. make upperCase depending on isUpperCase
 * 8. add to a new Array
 * 9. return and join new Array
 */

 /**
  * optimized for larger shifts
  * 1. breakdown all letter into an array
  * 2. let shifts = get modulo of shifts by 26 
  * 3. map thru the array
  * 4. for each item, convert item into charCode
  * 5.  
  */