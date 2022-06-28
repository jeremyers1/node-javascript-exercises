const add = function(num1, num2) {
  return num1 + num2; 
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(element => total += element);
  return total;
};

const multiply = function (arr) {
  let total = 1; 
  arr.forEach(element => total *= element);
  return total;
};

const power = function(num, pow) {
  return Math.pow(num, pow); //TOP probably wanted me to do a loop here
};

const factorial = function(num) {
  let total = 1; 
  while (num > 0) {
    total *= num;
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
