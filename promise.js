

function flipCoin() {
    return (Math.random() > 0.5);
}

function heads() {
    console.log("Heads!");
}

function tails() {
    console.log("Tails!");
}

// This is the function that the Promise will invoke when it's "go" time.
// The parameters are *functions* that will be called depending on what happens
function resolvePromise(resolve, reject) { 
    if (flipCoin()) resolve();
    else reject();
}   

let p = new Promise(resolvePromise); // this sets the Promise up, but nothing happens yet

for (let i = 0; i < 10; i++) {
    p.then(heads, tails);
    p = new Promise(resolvePromise); // what happens if you remove this?
}



//////////////////////////////////////////
// More often, you'll see it written like this...


// for (let i = 0; i < 10; i++) {
//     new Promise((resolve, reject) => {
//         res = Math.random() > 0.5;
//         if (res) resolve();
//         else reject();
//     }).then(
//         () => {console.log("Heads!")}, 
//         () => {console.log("Tails!")}
//     );
// }


