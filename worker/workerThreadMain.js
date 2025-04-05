const { Worker, isMainThread, parentPort } = require("node:worker_threads")

if (isMainThread) {
    const worker = new Worker('./workerThreadMain.js');

    worker.on('message', (message) => {
        console.log(message);
        worker.terminate()
    });
    worker.on('error', (error) => {
        console.log('error :', error.message);
    });
    worker.on('exit', (code) => {
        console.log('process exited :', code);
    });
    worker.postMessage(10, 10);
} else {

    parentPort.on('message', (input) => {
        console.log(input)
        const { num, user } = input;
        const result = fibonacci(num);
        parentPort.postMessage(result);
    });


    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}