console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// }, 5000);

setTimeout(function cb() {
    console.log("Callback 0");
}, 0);

console.log("End");

// million lines of code which takes 10sec to execute 

/*
// simulating the blocking of main thread
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While expires");
*/

