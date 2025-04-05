const { parentPort } = require("node:worker_threads");


parentPort.once('message', (data) => {
    // Simulate compress
    const decoded = `[compress:${data}]`;
    parentPort.postMessage(decoded);
})