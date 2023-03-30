// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// //for loop
// function factorialLoop(n) {
//   let result = 1
//   if (n < 2) {
//     return result
//   } else {
//     for (i = 2; i <= n; i++) {
//       result = i * result
//     }

//   }
//   return result
// }
// console.log(factorialLoop(5));

//   //recursive
// function factorial(n){
//     if(n < 2) {
//       return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5));

//recursive+memoization
const memo = {};
function memoFactorial(n) {
  if (n < 2) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = n * factorial(n - 1);
    return memo[n];
  }
}
console.log(memoFactorial(5));
