// Given a whole number with more than one digit, 
// divide its digits and add them until only one digit remains.

//Using split method
const splitNum = (num) => {
    let result = num
    while (result >= 10) { //In this loop, while the number is more than 10 we will make a sum with his digits
        let numToText = result.toString()
        let splited = numToText.split('') //But first, we transform the number into a string to be able to divide its digits
        let sumTotal = 0
        let splitToNum = splited.map(Number) //Now we transform the string into a number again

        for (let i = 0; i < splitToNum.length; i++) {
            sumTotal += splitToNum[i]
        }
        result = sumTotal
        console.log(`la suma de los valores actual es: ${sumTotal}`)
    }
    
    console.log(`el resultado de las sumas es ${result}`)
    return result
}

console.log(splitNum(23))
console.log(splitNum(87))

// Using integer division
const nextSplit = (num) => {
    let allNum = Math.trunc(num) //In this case we won't transform our number to a string, just we avoid a float number
    let digits = [] 
    let sum = num
    while (allNum > 0) { //So, in order to split our number we have to use the module 10 and the whole division, so we will have the digits separated.
        let digit = allNum % 10
        digits.push(digit)
        console.log(`this is the current num ${allNum}`)
        allNum = Math.floor(allNum / 10)
        console.log(`these are all the saved numbers ${digits}`)
    }
    while (sum > 10) { // Now we wil sum our digits while we have more than 1 digit
        let result = 0
        for (let i = 0; i < digits.length; i++) {
           result += digits[i]
           sum = result
        }
    }
    
    return sum
}
console.log(nextSplit(23))