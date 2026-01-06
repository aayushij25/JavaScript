/*
// Higher Oder Functions
function fPx() {
    console.log("Namaste");
}

function fPy(x) {
    x();
}

fPy(fPx); // fPy is higher order function 
// and fPx is callback function
*/

// Functional programming
// reusability, modularity, callback, higher order function
const radius = [3,1,2,4];

const area = function(radius) {
    return Math.PI*radius*radius;
}

const circumference = function(radius) {
    return 2*Math.PI*radius;
}

const diameter = function(radius) {
    return 2*radius;
}

// same as map function
const calculate = function(arr, logic) {
    const output = [];
    for(let i=0; i<arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

// can be written as
// Polyphil of map function
Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i=0; i<this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area));

console.log(radius.calculate(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));