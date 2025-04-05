const { parentPort } = require("node:worker_threads");


parentPort.once('message', (data) => {
    // Simulate decode
    const decoded = `[decoded:${data}]`;
    parentPort.postMessage(decoded);
})