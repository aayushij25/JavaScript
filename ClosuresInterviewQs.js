// Example 1
/*
function outer(b) { // b will still part of parent env of function inner
    // var a = 10;
    function inner() {
        // console.log(a);
        console.log(a, b); // b will be accessible becaus of closure
    }
    // var a = 10;
    let a = 10; // even though let has block scope
    // it forms a closure and works the same
    return inner;
}
// Here outer()() = inner()
// outer()();
// OR
// var close = outer();
// close();

outer("Helloworld")();
var close = outer("Helloworld");
close();
*/

// Example 2
/*
function outest2() {
    var c = 20;
    function outer2(b) {
        function inner2() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner2;
    }
    return outer2;
}
var close = outest2()("helloworld");
close();
*/

// Example 3
/*
function outest3() {
    var c = 20;
    function outer3(b) {
        function inner3() {
            console.log(a, b, c);
        }
        // let a = 10; // if this did not exist 
        // inner would've tried to find a in heirarchy 
        // hence global a would've been accessed
        return inner3;
    }
    return outer3;
}
let a = 30; // new reference but inner won't care
var close = outest3()("helloworld");
close(); 
*/

// Example 4 - Data Hiding
/*
// Encapsulating the count var and adjoining 
// increment function in a function so it can't
// be easily accessed outside of its scope
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
// console.log(count);
var counter1 = counter();
var counter2 = counter(); // fresh counter 
// won't interfere with counter1's scope

counter1();
counter1();
counter1();

counter2();
*/

// Example 5 - Example 4 enhancement 
// (scalable for decrement as well)
// using constructor function
/*
function Counter5() { //constructor function
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
var counter51 = new Counter5();
counter51.incrementCounter();
counter51.incrementCounter();
counter51.decrementCounter();
*/

// Example 6 - Relation b/w Closures & Garbage Collector
/*
function a6() {
    var x = 0;
    return function b6() {
        console.log(x);
        // b forms closure with x so x cannot be 
        // garbage collected
    }
}
var y6 = a6(); // b is returned into y and it 
// might need to be used later hence x is not 
// garbage collected
y6();
*/

// Example 7 - Smart garbage collection by modern browsers
function a7() {
    var x = 0, z = 10; // z is garbage collected
    return function b7() {
        console.log(x);
    }
}
var y7 = a7();
y7();