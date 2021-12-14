function makeArray(num) {
    let arr = Array.from(new Array(++num).keys())
    arr.splice(0, 1)
    return arr
}

function makeArray2(num) {
    return Array.from({length: num}).map((v,i) => i+1)
}


console.log(makeArray(5))
console.log(makeArray2(5))
