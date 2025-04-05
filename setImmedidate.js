// setImmediate(() => {console.log("set immedidate 1")})
// setImmediate(() => {
//     console.log("set immedidate 2")
//     process.nextTick(() => console.log("next tick 1"))
//     Promise.resolve().then(() => {
//         console.log("promise 1")
//     })
//     Promise.resolve().then(() => {
//         process.nextTick(() => {
//             console.log("next tick 2")
//         });
//         console.log("promise 2")
//     })
// })
// setImmediate(() => {console.log("set immedidate 3")})

setTimeout(() => { console.log("setTimeout 1") })
setTimeout(() => {
    console.log("setTimeout 2")
    process.nextTick(() => {
        console.log("next tick 1")
        process.nextTick(() => console.log("inner next tick 1"))
    })
    Promise.resolve().then(() => {
        console.log("promise 1")
    })
    Promise.resolve().then(() => {
        process.nextTick(() => {
            console.log("next tick 2")
        });
        console.log("promise 2")
    })
})
setTimeout(() => { console.log("setTimeout 3") })


const os = require('node:os')
console.log(os.cpus())