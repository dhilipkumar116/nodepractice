const { Worker } = require('node:worker_threads')
const os = require('os')

class WorkerPool {

    constructor(workerPath, poolSize = os.cpus().length) {
        this.workerPath = workerPath;
        this.poolSize = poolSize;
        this.workers = [];

        for (let i = 0; i < poolSize; i++) {
            this.workers.push(this.createWorker());
        }

    }

    createWorker() {
        const worker = new Worker(this.workerPath);
        worker.busy = false;
        worker.on('message', (result) => {
            worker.busy = false;
            worker.callback(null, result);
        })
        worker.on('error', (error) => {
            worker.busy = false;
            worker.callback(error, null);
        })
        return worker;
    }

    runTask(data, callback) {
        const availableWorker = this.workers.find(w => !w.busy);

        if (availableWorker) {
            availableWorker.busy = true;
            availableWorker.callback = callback;
            availableWorker.postMessage(data);
        } else {
            console.warn(`No free workers! Task ${data} is lost.`);
        }
    }

}

module.exports = WorkerPool;