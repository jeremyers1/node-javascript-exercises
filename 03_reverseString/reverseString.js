const reverseString = function(str) {
    let strRet = '';

    for (let i = str.length-1; i >= 0; i--){
        strRet += str[i];
    }

    return strRet;
};

// Do not edit below this line
module.exports = reverseString;

// reverseString("Hello");