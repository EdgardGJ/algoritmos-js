// Given a number as a limit, create a function that 
// returns the sequence of prime numbers in that numerical range.

const itsPrimes = (n) => {
    let primes = [] // We create an empty array to save every prime number
    for (let i = 2; i <= n; i++) { // We need a loop so we can run every number from 2 to the limit
        let isPrime = true; // This is just a controller so we can identify if the number is prime
        for (let j = 2; j < i; j++) { // Now we create other loop so we can run our count and find every prime in the count
            if (i % j === 0) {
                isPrime = false
                break // If the number is divisible with other number then itself and 1 it's not prime, so we denied the controller and break the loop
            }
        }

        if (isPrime) { // If the number is prime, we save it in our array
            primes.push(i)
        }
    }
    console.log(primes)
    return primes
}
itsPrimes(23)

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
    let largestPrime = 1; //In this case we don't need to save the complete sequence, so we just start a counter
    let divisor = 2; // In order to avoid repeat structures, we defined a divisor
 
    while (divisor <= number) { // Start to run our iteration through the range
        if (number % divisor === 0) {  // This condition verify if the divisor is a factor of the number
            let isDivisorPrime = true; // Start our controller
            for (let i = 2; i <= Math.sqrt(divisor); i++) { // We iterate from 2 to the square root of the divisor to check its primality.
                if (divisor % i === 0 && divisor !== i) { 
                    isDivisorPrime = false; // In case that the number is divisable of any other number then himself it's not a prime
                    break;
                }
            }
 
            if (isDivisorPrime) { // If the number is prime we save it and return the largest character
                largestPrime = Math.max(largestPrime, divisor);
            }
 
            number /= divisor; // Once we find the prime factor, we divide the number with it in order to reduce the range
        } else { // If the divisor is not a factor we incremented the divisor to try the next number
            divisor++;
        }
   }
 
   return largestPrime;
}
 
largestPrimeFactor(8);