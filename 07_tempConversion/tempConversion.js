const ftoc = function(temp) {
return Number((Math.round((((temp - 32) * (5 / 9)) * 10)) / 10).toFixed(1));
// return Number(((temp - 32) * (5 / 9)).toFixed(1)); // works, but other has better accuracy???
};

const ctof = function(temp) {
return Number((Math.round((((temp * (9 / 5)) + 32) * 10)) / 10).toFixed(1));
// return Number(((temp * (9 / 5)) + 32).toFixed(1)); // works, but other has better accuracy???
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
