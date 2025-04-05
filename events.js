const {EventEmitter} = require('events')
const orderEvent = new EventEmitter();


orderEvent.on("order" ,(temp) => {
    console.log("event captured, ", temp)
})


console.log("before")
orderEvent.emit("order", "hello")
console.log("after")

