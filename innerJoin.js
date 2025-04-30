const a = [
    {Name: "Miguel", id: 1},
    {Name: "Jhon", id: 0}
]

const b = [
    {id: 1, email:"miguelLopez@gmail.com"},
    {id: 2, email:"jhonKing@gmail.com"}
]

const innerJoin = (leftArr, rightArr, key) => {
    const map = new Map()
    leftArr.forEach(item => map.set(item[key], item));
    console.log(map)

    let join = []
    rightArr.forEach(rightItem => {
        const leftItem = map.get(rightItem[key])
        if (leftItem === undefined) return

        join.push({... leftItem, ...rightItem})
    })

    return join
}

console.log(innerJoin(a, b, "id"))