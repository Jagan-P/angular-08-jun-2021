/* Callbacks and Promises 

statement 1;
async statement 2;
statement 3; -> dependent on results of statement 2


callbacks
promises
observables


let a = 0;
function assignA(executeAfterA) {
    setTimeout(() => {
        a = 10;
        executeAfterA();
    });
}
assignA(executeAfterA);
function executeAfterA() {
    let c = a + 10;
    console.log(c);
}

function c() {
}


let prom = new Promise((resolve, reject) => {
    if (true) {
        resolve(10);
    }
    reject("Something went wrong");
});

prom.then((successCase) => {
    console.log("promise passed", successCase)
},
    (failure) => {
        console.log("Promise failed", failure)
    }
)

let a = 0;
let assignA = new Promise((resolve, reject)=>{
    setTimeout(() => {
        a = 10;
        resolve(a);
    }, 1000);
})

assignA.then((a)=>{
    return new Promise((resolve1, reject1)=>{
        a = 20;
        resolve1(a);
    })
})
.then((a)=>{
    let c = a + 10;
    console.log(c);
})

*/