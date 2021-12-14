const { Benchmark } = require('benchmark')

const suite = new Benchmark.Suite('test')

function makeArray(num) {
    let arr = Array.from(new Array(++num).keys())
    arr.splice(0, 1)
    return arr
}

function makeArray2(num) {
    return Array.from({length: num}, (v,i) => i+1)
}

function makeArray3(num) {
    const result = []
    for (var i = 1; i <= num; i++) result.push(i)
    return result
}

suite.add('makeArray', () => {
    makeArray(500)
})

suite.add('makeArray2', () => {
    makeArray2(500)
})

suite.add('makeArray3', () => {
    makeArray3(500)
})

suite.on('cycle', function(event) {
    console.log(String(event.target))
})
suite.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
})

suite.run()
