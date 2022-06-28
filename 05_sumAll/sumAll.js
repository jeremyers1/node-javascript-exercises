const sumAll = function (num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    let total = 0;
    if (num2 >= num1) {
        for (let i = num1; i <= num2; i++) {
            total += i;
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
