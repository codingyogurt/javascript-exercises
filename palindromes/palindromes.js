const palindromes = function(string) {
    const letters = cleanWord(string);
    for (i=1; i < letters.length / 2; i++ ){
        // console.log(`${letters[i-1]} ${letters[letters.length - i]}`);
        if (letters[i-1] !== letters[letters.length - i]){
            return false
        }
    }
    return true;
}

const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '; //added a space

function cleanWord(string){
    // clean all punctations spaces
    string = string.toLowerCase();
    const letters = string.split("");
    const cleanLetters = letters.filter((item) => {
        return punctuation.indexOf(item) === -1;
    });
    return cleanLetters; //array filtered
}

module.exports = palindromes
