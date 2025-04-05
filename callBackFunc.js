
console.log("step1")
const temp = (callback) => {
    callback()
}
temp(callback)
console.log("step2")

function callback() {
    console.log("inside callback")
}