// If we list all the natural numbers less than 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. 
// The sum of these multiples is 23.
// Find the sum of all multiples of 3 or 5 below the value of the provided parameter number.

const multiples = (n) => {
    let sum = 0  //first we need a counter

    for (let i = 1; i < n; i++) { // Now we have to run every number in the range of the given parameters
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i  // If the number indexed is a multiple of 3 or 5, we will plus it in our counter
        }
    }
    return sum
} 

console.log(multiples(10))