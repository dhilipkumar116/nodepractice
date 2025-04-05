

const WorkerPool = require('./workerPool3.js');
const pool = new WorkerPool('./worker.js', 4);

const tasks = [2, 4, 6, 8, 10, 12, 14, 16];
tasks.forEach(task => {
    pool.runTask(task, (err, result) => {
        if (err) console.error(err);
        else console.log(`Task ${task} result:`, result);
    });
})

