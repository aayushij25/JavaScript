// Event Bubbling //////////////////////////////
// useCapture flag is false
/*
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
});

document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked");
});
*/

/*
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, false);

document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, false);

document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, false);
*/

// Event Capturing/Trickling //////////////////
// useCapture flag is true
/*
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true); 

document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, true);
*/

// this has a performance issue 
/*
document.querySelector("#grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true);

document.querySelector("#parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, false);

document.querySelector("#child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, false);
*/

// stopping propagation 
document.querySelector("#grandparent")
.addEventListener("click", (e) => {
    console.log("Grandparent clicked");
    e.stopPropagation();
}, true);

document.querySelector("#parent")
.addEventListener("click", (e) => {
    console.log("Parent clicked");
    // e.stopPropagation();
}, true);

document.querySelector("#child")
.addEventListener("click", (e) => {
    console.log("Child clicked");
    // e.stopPropagation();
}, true);