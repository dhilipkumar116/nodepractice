const crypto = require('node:crypto')

// const start = Date.now();
// crypto.pbkdf2Sync("password","salt",10000, 512, "sha512")
// crypto.pbkdf2Sync("password","salt",10000, 512, "sha512")
// crypto.pbkdf2Sync("password","salt",10000, 512, "sha512")
// const end = Date.now();
// console.log("hash : ", end-start);


const maxCall = 16;
const start = Date.now();
for(let i = 0; i < maxCall; i++) {
    crypto.pbkdf2("password","salt",10000, 512, "sha512", () => {
        console.log(`hash ${i+1}: `, Date.now()-start);
    });
}
