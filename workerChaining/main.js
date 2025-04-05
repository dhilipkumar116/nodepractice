const { Worker, } = require("node:worker_threads");


/*

Awesome — this is where Worker Threads really shine in Node.js, especially for CPU-heavy tasks you want to parallelize. Let’s break it down step-by-step and show both:

Worker chaining – where output of one worker becomes input for another.

Worker pool – a pool of reusable workers handling multiple tasks efficiently.

*/

// decode
const decoder = new Worker('./decoder.js');
decoder.postMessage('raw_video');


decoder.once('message', (decodedData) => {
    const filter = new Worker('./filter.js');
    filter.postMessage(decodedData);

    filter.once('message', (filteredData) => {
        const compressor = new Worker('./compress.js');
        compressor.postMessage(filteredData);

        compressor.once('message', (compressedData) => {
            console.log(compressedData);
        })

    })
})



