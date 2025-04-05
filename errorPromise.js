const promiseFunc = new Promise((resolve, reject) => {
    isOperationSuccessfull = true;
    if(isOperationSuccessfull) {
        return resolve('succesful');
    }else{
        return reject('failure');
    }
});


console.log("first")
promiseFunc
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
console.log("second")


