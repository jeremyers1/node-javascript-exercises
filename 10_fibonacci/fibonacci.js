const fibonacci = function (num) {
    if (typeof num != 'number') Number(num);
    
    if (num < 0) return "OOPS";
    else {
        let num1 = 0, num2 = 1; 
        let fib = 0;
        for (let i = 0; i < num; i++){
            num1 = num2;
            num2 = fib;
            fib = num1 + num2;
        }
        return fib;
    }
};

/* The recursive approach works also, but time complexity is exponential
const fibonacci = function (num) {
  if(num < 2){
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
} */

// Do not edit below this line
module.exports = fibonacci;
