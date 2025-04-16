// Each new term in the Fibonacci sequence is generated by adding the two previous terms. 
// Starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Considering the terms in the Fibonacci sequence whose values ​​do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(n) {
    // First we need to take the two first digit of fibonacci sequence
    let a = 1;
    let b = 2;
    let sumOfEvens = 0; // We also need to create a counter for the sum
      
    while (b <= n) { // We will run every digits since the limit
        if (b % 2 === 0) { // If the digits is even we will sum it at the counter
        sumOfEvens += b;
        }
        let nextFib = a + b; // Now we run the next digits on the sequence
        a = b;
        b = nextFib;
    }
      
    return sumOfEvens;
}
      
console.log(fiboEvenSum(10));   // Salida: 10 (2 + 8)
console.log(fiboEvenSum(4000000)); // Salida: 4613732


// If we need to show every digits since a limits we can use this next function

function fiboSequence(n) {
    let fib = [] // We need a place to save the sequence
    let a = 0;
    let b = 1;
  
    // We verify the limit so we can run the first digit in the sequence
    if (n >= 0) {
      fib.push(a)
    }
    if (n >= 1) {
      fib.push(b)
    }
    while (b <= n) { // Now we verify to not exced the limit
      let nextFib = a + b // Get the next fib digit in the sequence 
      if (nextFib <= n) {
        fib.push(nextFib)
      }
      a = b;
      b = nextFib
    }
    
    return fib;
}
console.log(fiboSequence(20))