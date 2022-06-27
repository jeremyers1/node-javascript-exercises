const reverseString = function(str) {
    let strRet = '';

    for (let i = str.length-1; i >= 0; i--){
        strRet += str[i];
    }

    return strRet;
};

/* elegent way of doing this, as found here:
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
Using string methods: 

function reverseString(str) {
    return str.split("").reverse().join("");
}

*/

// Do not edit below this line
module.exports = reverseString;
