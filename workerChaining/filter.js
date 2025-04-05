const { parentPort } = require("node:worker_threads");


parentPort.once('message', (data) => {
    // Simulate filter
    const decoded = `[filter:${data}]`;
    parentPort.postMessage(decoded);
})