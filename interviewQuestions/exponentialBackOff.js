
function a() {
    console.log("entering function A")
    return Promise.reject("failure");
}
function b() {
    console.log("entering function B")
    return Promise.resolve("success");
}

const RETRY_FACTOR = 2;
const MAX_RETRY = 3;
let CUR_RETRY = 1;
let CURRENT_RETRY_TIME = 1000;


const handleApiErrors = (retry) => {
    setTimeout(() => {
        CUR_RETRY++;
        CURRENT_RETRY_TIME = CURRENT_RETRY_TIME * RETRY_FACTOR;
        makeApiCall(a)
    }, retry);
}


const makeApiCall = async (callback) => {
    try {
        const output = await callback();
        console.log(output, "retry count ", CUR_RETRY)
    } catch (error) {
        if (CUR_RETRY <= MAX_RETRY) {
            handleApiErrors(CURRENT_RETRY_TIME);
        } else {
            makeApiCall(b)
        }
    }
}


(async () => {
    makeApiCall(a)
})()

