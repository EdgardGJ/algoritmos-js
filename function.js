//Ordenamiento con metodo sort y filro de datos dobles
let arr = [2, 5, 5, 6, 7, 8, 6, 9, 11, 10, 13, 14, 2, 2, 6, 7]
let secondArr = [2, 2, 4, 4, 6, 10, 13, 15, 7, 8, 9, 5,6, 7, 4, 9]

const newArr = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index
  })
  
}
newArr(secondArr)
console.log(newArr(secondArr))

function order(arr) {
  return arr.sort((a, b) => a - b)
}

console.log(order(newArr(secondArr)))

