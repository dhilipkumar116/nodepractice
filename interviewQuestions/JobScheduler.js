class Job {
    constructor(name, executionTime) {
        this.name = name;
        this.executionTime = executionTime;
    }
}

const job1 = new Job('job1', 2000)
const job2 = new Job('job2', 10000)
const job3 = new Job('job3', 10000)
const job4 = new Job('job4', 10000)
const job5 = new Job('job5', 5000)
const job6 = new Job('job6', 5000)

var JobQueue = [job1, job2, job3, job4, job5, job6];


const MAX_PROCESS = 3;
let CURRENT_PROCESS_COUNT = 0;
let currentProcess = []

const startProcess = async () => {
    CURRENT_PROCESS_COUNT++;
    const job = currentProcess.pop();
    startProcesssingJob();
    console.log(`Job ${job.name} started, will take ${job.executionTime}ms`);
    await new Promise(resolve => setTimeout(() => { resolve() }, job.executionTime)); // Simulate async processing
    console.log(`Job ${job.name} finished after ${job.executionTime}ms`);
    CURRENT_PROCESS_COUNT--;
    startProcesssingJob()
}
const startProcesssingJob = async () => {

    if (CURRENT_PROCESS_COUNT < MAX_PROCESS && JobQueue.length >= 1) {
        currentProcess.push(JobQueue.shift())
        startProcess();
    }

}
startProcesssingJob()