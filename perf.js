
function snippet() {
    /o/.test('Hello World!')
    // 'Hello World!'.indexOf('o') > -1
}

function patternA(fn) {
    let totalTime, start = new Date, iterations = 6

    while (iterations--) {
        fn()
    }
    totalTime = new Date - start

    console.log('totalTime: ', totalTime)
}


function patternB(fn) {
    let totalTime, hz, period, startTime = new Date, runs = 0;
    do {
        fn()
        runs++;
        totalTime = new Date - startTime;
    } while (totalTime < 1000);

    // convert ms to seconds
    totalTime /= 1000;
    // period → how long per operation
    period = totalTime / runs;
    // hz → the number of operations per second
    hz = 1 / period;
    // can be shortened to
    // hz = (runs * 1000) / totalTime;
    console.log('hz: ', hz)
}

// patternA(() => {/o/.test('Hello World!')})
patternB(() => {/o/.test('Hello World!')})
patternB(() => {'Hello World!'.indexOf('o') > -1})
