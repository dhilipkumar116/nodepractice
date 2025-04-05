const { parentPort } = require("node:worker_threads");

parentPort.on('message', (data) => {
    let result = data * data;
    parentPort.postMessage(result);
});
