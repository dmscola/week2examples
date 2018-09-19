///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}



//// Add code here that will "flip" the coin ten times and write the
//// result to the console (e.g. "Heads" or "Tails" for each flip).
function heads() {
    console.log("Heads!");
}

function tails() {
    console.log("Tails!");
}
let p = new Promise(flip); // this sets the Promise up, but nothing happens yet

// for (let i = 0; i < 10; i++) {
//     p.then(heads, tails);
//     //p = new Promise(flip); // what happens if you remove this?
// }

for (let i = 0; i < 10; i++) {
    new Promise((resolve, reject) => {
        let res = Math.random() > 0.5;
        if (res) resolve();
        else reject();
    }).then(
        () => {console.log("Heads!")},
        () => {console.log("Tails!")}
    );
}



/// Problem 2 - More fun...

function countBig(bignum) {
    // Add code here that returns a Promise that will resolve after it has counted to bignum
    try {


    return (new Promise(function(resolve, reject){
      for (let x = 0; x < bignum; x++)
      {

      }
      resolve();

    }));
}

catch(e) {
   // handle the rejection here
}

}




start = Date.now();
bignum = 1000000000;
countBig(1000000000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})
