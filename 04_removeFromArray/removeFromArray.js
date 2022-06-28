const removeFromArray = function(arr, ...arg) {
    return arr.filter(item => !arg.includes(item));
};

// Note: Rest paramaters form an array in JS, so array methods can be used on rest paramaters


// Do not edit below this line
module.exports = removeFromArray;
