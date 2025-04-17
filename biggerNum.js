// Given an array of integers, create a function who returns the bigger number in the array

// With a Math method
const bigerNumMethod = (arr) => {
    let biggerNum = Math.max(...arr)
    return biggerNum
}

// Without Math method
const biggerNum = (arr) => {
    let largestNum = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            largestNum = arr[i]
        }
    }
    return largestNum
}

let array = [2, 5, 8, 9, 12, 25, 23]

console.log(bigerNumMethod(array))
console.log(biggerNum(array))