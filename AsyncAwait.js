/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 10000);
});
*/

// Async function ///////////////////////////////
/*
async function getData() {
    // return "Namaste";
    return p;
}

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then(res => console.log(res));
*/

// Promise handling before async await /////////
/*
function getData() {
    p.then(res => console.log(res));
    console.log("Namaste JavaScript");
}

getData();
*/

// Using async await to handle Promise //////////
/*
async function handlePromise() {
    console.log("Hello World");
    const val = await p;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();
*/

// Diving deep into async await ////////////////
/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value 1");
    }, 20000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value 2");
    }, 40000);
});

async function handlePromise() {
    console.log("Hello World");
    const val1 = await p1;
    console.log("Namaste JS 1");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste JS 2");
    console.log(val2);
}

handlePromise();
*/

// Real world example of async-await /////////////
/*
const API_URL = "https://api.github.com/users/aayushij25";

async function handlePromise() {
    // fetch() => Response object 
    // Response object is a readable stream
    // Response.json (which is again a promise)
    // Response.json => jsonValue
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

handlePromise();
*/

// Error Handling - try catch /////////////////////
const API_URL = "https://api.github.co/users/aayushij25";

// Method 1
/*
async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch(err) {
        console.log(err);
    }
}
handlePromise();
*/

// Method 2
async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handlePromise().catch(err => console.log(err));