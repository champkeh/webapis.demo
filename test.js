const {Benchmark} = require('benchmark')

function generateRandomString(length) {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

function generateRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const data = []
for (let i = 0; i < 100; i++) {
    data.push(generateRandomString(generateRandomNumberBetween(1, 1000)))
}

const suite = new Benchmark.Suite('app')
suite.add('string.split()', function () {
    for (const str of data) {
        str.split('').reverse()
    }
})
suite.add('Object spread', function() {
    for (const str of data) {
        [...str].reverse()
    }
})
suite.add('Array.from()', function() {
    for (const str of data) {
        Array.from(str).reverse()
    }
})
suite.on('cycle', function(event) {
    console.log(String(event.target))
})
suite.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
})

suite.run()
