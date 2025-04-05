function getUser(callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: 1 })
    }, 2000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log(`Order data fetched for user id = ${user.id}`);
        callback({ email: 'dhilipkumar116@gmail.com' });
    }, 2000)
}

function sendEmail(email) {
    setTimeout(() => {
        console.log(`Email sent to ${email.email}.`);
    }, 2000);
}


// getUser((user) => {
//     getOrders(user, (email) => {
//         sendEmail(email);
//     })
// })

// using promise
function getUser1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ id: 1 });
        }, 2000);
    })
}

function getOrders1(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`order data fetched for user id = ${user.id}`);
            resolve({ email: 'dhilipkumar' });
        }, 2000)
    });
}

function sendEmail1(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`email send to user = ${user.email}`)
        }, 2000);
    });
}

// getUser1()
//     .then((user) => getOrders1(user))
//     .then((user) => sendEmail1(user))
//     .then(() => console.log('all tasks completed'))
//     .catch((e) => confirm.log(e))

// async & await

function getUser2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ id: 1 })
        }, 2000)
    })
}

function getOrders2(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`order data fetched for user id = ${user.id}`);
            resolve({ email: "dhilipkumar116@gmail.com" })
        }, 2000)
    })
}

function sendEmail2(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`email send to user = ${user.email}`)
            resolve()
        }, 2000);
    })
}

async function process() {
    try {
        let user = await getUser2();
        user = await getOrders2(user);
        await sendEmail2(user);
        console.log("All steps completed");
    } catch (error) {
        console.log(error.message);
    }
}
(async () => { await process() })()

