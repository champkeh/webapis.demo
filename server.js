const Koa = require('koa')
const serve = require('koa-static')
const cors = require('@koa/cors')

const PORT = 3000
const app = new Koa()

app.use(cors())
app.use(serve('static'))

app.use(async ctx => {
    console.log(ctx.path)
    switch (ctx.path) {
        case '/style.css':
            await sleep(6000)
            ctx.body = `h1 {font-size: 1.5em;color:${randomColor()};}`
            ctx.type = 'text/css'
            break
        default:
            break
    }
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`server running at http://localhost:${PORT}`)
})


function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

function randomNumber(start = 0, stop = 255) {
    return Math.floor(Math.random() * 255)
}
function randomColor() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}
