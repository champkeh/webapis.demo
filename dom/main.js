class MyEventTarget extends EventTarget {
    constructor(secret) {
        super()
        this._secret = secret
    }

    get secret() {
        return this._secret
    }
}

const myEventTarget = new MyEventTarget(5)
const value = myEventTarget.secret
console.log(value)

myEventTarget.addEventListener('foo', function(evt) {
    this._secret = evt.detail
})

const event = new CustomEvent('foo', { detail: 7 })
myEventTarget.dispatchEvent(event)
const newValue = myEventTarget.secret
console.log(newValue)
