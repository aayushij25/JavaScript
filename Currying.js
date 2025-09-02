// Function Currying using bind
let multiply = function (x,y) {
    console.log(x * y);
}

/* How bind works
let multiplyByTwo = function (y) {
    let x = 2;
    console.log(x * y);
}
*/

// let multiplyByTwo = multiply.bind(this, 2,3);
// multiplyByTwo(5);
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// Function Currying using closures
let Multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let MultiplyByTwo = Multiply(2);
MultiplyByTwo(3);

let MultiplyByThree = Multiply(3);
MultiplyByThree(10);