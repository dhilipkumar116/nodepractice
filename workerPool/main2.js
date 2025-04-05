const { Worker } = require('node:worker_threads')

function runWorkers(input) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js");
        worker.postMessage(input)
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', () => worker.terminate());
    })
}

async function runTasks() {
    const tasks = [1, 2, 3, 4, 5, 6];
    const results = await Promise.all(tasks.map(t => { return runWorkers(t) }));
    console.log('All results:', results);
}

runTasks();
