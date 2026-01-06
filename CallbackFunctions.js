// What is a Callback Function in JS?
/*
// setTimeout requires a callback function and a time
// as parameters
setTimeout(function() {
    console.log("timer");
}, 5000);

function callbackFunctionX(y) {
    console.log("x");
    y();
}
callbackFunctionX(function callbackFunctionY() { 
    // here callbackFunctionY is a callback function
    console.log("y");
}) 
*/

// JS is a synchronous and single-threaded language

// Blocking the main thread

// Power of Callbacks?

// Deep about Event Listeners

// Scope Demo with Event Listeners

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
}
attachEventListeners();

// Garbage Collection & removeEventListeners