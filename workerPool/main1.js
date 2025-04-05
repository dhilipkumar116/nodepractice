const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

worker.on('message', (result) => {
    console.log('Result from worker:', result);
    worker.terminate();
});

worker.postMessage(5);
