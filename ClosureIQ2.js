// CLOSURES
/*
function outest() {
    var c = 20;
    function outer(b) {
    // var a = 10;
        function inner() {
            console.log(a, b, c);
        }
        // var a = 10;
        // let a = 10; // When commented, it goes up the scope chain to globally defined a
        return inner;
    }
    return outer;
}
//let a = 100; // Completely different variable // When commented, throws a referenceError
// outer()(); // Calling inner function in the same line
// Above is modified as
var close = outest()("Hello world"); //outest() => returns outer("Hello world")
close();
*/

// DATA HIDING AND ENCAPSULATION
/*
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
// console.log(count); //will throw referenceError
var counter1 = counter();
counter1();
counter1();

var counter2 = counter(); // Completely new counter
counter2();
*/

// To make above code scalable and 
// follow good practice while adding a 
// decrement counter, we use constructor function
/*
function Counter() { //constructor function
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
*/

// RELATION BETWEEN CLOSURES AND GARBAGE COLLECTOR
function a() {
    var x = 0, z = 10; 
    // Even though b forms closure with x and z, 
    // since z is not being used it is 
    // garbage collected and is removed from memory
    return function b() {
        console.log(x);
    }
}
var y = a();
y();