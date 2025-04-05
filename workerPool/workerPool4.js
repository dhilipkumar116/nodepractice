const { Worker } = require('node:worker_threads')
const os = require('os')

class WorkerPool {

    constructor(workerPath, poolSize = os.cpus().length) {
        this.workerPath = workerPath;
        this.poolSize = poolSize;
        this.workers = [];
        this.queue = [];

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
            this.runNext();
        })
        worker.on('error', (error) => {
            worker.busy = false;
            worker.callback(error, null);
            this.runNext();
        })
        return worker;
    }


    runNext() {
        if (this.queue.length === 0) return;

        const { data, callback } = this.queue.shift();
        this.runTask(data, callback);
    }

    runTask(data, callback) {
        const availableWorker = this.workers.find(w => !w.busy);
        if (availableWorker) {
            availableWorker.busy = true;
            availableWorker.callback = callback;
            availableWorker.postMessage(data);
        } else {
            this.queue.push({ data, callback });
        }
    }

    terminateAll() {
        this.workers.forEach(worker => worker.terminate());
        this.workers = [];
    }

}

module.exports = WorkerPool;


// https://chatgpt.com/share/67efa227-dd4c-8012-9e21-66ba19e70aa7