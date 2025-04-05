
const errorHandler = (error, data) => {
    if(error) {
        console.log('error ', error)
        return
    }
    console.log('result ', data);
}


function asyncOperation(callback) {
    setTimeout(() => {
        callback(new Error("something happend"))
    }, 0);
}


asyncOperation(errorHandler);





