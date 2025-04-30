//Ordenamiento con metodo sort y filro de datos dobles
let arr = [2, 5, 5, 6, 7, 8, 6, 9, 11, 10, 13, 14, 2, 2, 6, 7]
let secondArr = [2, 2, 4, 4, 6, 10, 13, 15, 7, 8, 9, 5, 6, 7, 4, 9]


// Using filter method
const newArr = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index
  })
  
}
newArr(secondArr)
console.log(newArr(secondArr))

// Without filter method
const duplicatedNum = (arr) => {
  let noDuplicatedNum = []
  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicatedNum.includes(arr[i])) {
      noDuplicatedNum.push(arr[i])
    }
  }
  return noDuplicatedNum
}

console.log(duplicatedNum(secondArr))

function order(arr) {
  return arr.sort((a, b) => a - b)
}

console.log(order(newArr(secondArr)))

let thirdarr = [1, 4, 6, 7, 2, 3, 9, 8, 5, 11, 10]

const quickSort = (arr) => {
  let minor = [];
  let major = [];
  let indexMid = Math.floor(arr.length/2)
  let pivot = arr[indexMid]
  console.log(pivot)

  if (arr.length < 1) return []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      major.push(arr[i])
    } else if (arr[i] < pivot) {
      minor.push(arr[i])
    }
    
  }
  let ordered = []
  return ordered.concat(quickSort(minor), pivot, quickSort(major))
}

console.log(quickSort(thirdarr))