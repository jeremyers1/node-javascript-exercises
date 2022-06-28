const palindromes = function (str) {
    let revStr = '';
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


    // Help: https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
    // first remove punctuation
    /* str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    // second remove spaces
    str = str.replace(/\s+/g, '');

    //then make sure string is in lower case
    str = str.toLowerCase();
    */
    
    // Can I chain them?
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
             .replace(/\s+/g, '')
             .toLowerCase();

    // then reverse to a new string, check, and return
    for (let i = str.length-1; i >= 0; i--){
        revStr += str[i];
    }

    if (str === revStr) return true;
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
