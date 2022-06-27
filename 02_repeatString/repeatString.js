const repeatString = function (string, num) {
    let stringReturn = '';
    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++){
        stringReturn += string;
    }
    return stringReturn;
};

// Do not edit below this line
module.exports = repeatString;
