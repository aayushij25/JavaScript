// a();
// b(); 
// b above is undefined variable, 
// not a function so throws TypeError

// Function Statement aka Function Declaration
function a() {
    console.log("a called");
}
// a();

// Function Expression 
var b = function () {
    console.log("b called");
}
// b();

// Anonymous Function
// function () { // Syntax error - requires a name
//     console.log("anonymous function called");
// }

// Named Function Expression
var c = function xyz() {
    console.log("c called");
    console.log(xyz);
}
// c();
// xyz(); // Reference error - xyz is not defined 
// because its scope is not in global scope, it is 
// created as local variable

// Difference between Parameters & Arguments ?
function d(param1, param2) { 
    // param1, param2 are parameters - local variables
    // in function scope
    console.log("d called");
    console.log(param1, param2);
}
// d(2,3); // 2,3 are arguments

// First Class Functions - ability to be used as values
// OR first class citizens
var e = function(param3="hi") {
    console.log(param3);
    return function() {console.log("anonymous 2")};
}
// e(function(){console.log("anonymous 1")});
// console.log(e());

// Arrow Functions
