// Example 1
/*
function x() {
    var i = 1;
    // setTimeout attaches a timer to this function and stores it
    // it goes on to next lines of code and does not wait
    // once timer expires it bring the function into call stack and executes it
    setTimeout(function() { // this function forms a closure with reference of i
        console.log(i);
    }, 3000);
    console.log("Namaste JS");
}
x();
*/


// Example 2
/*
function x1() {
    // function in its closure remembers the 
    // reference of i not the value
    // 5 copies of the function are created but
    // all of them point to the same reference 
    // because of 'var'
    // loop runs 5 times and value comes to 6
    // which is what the reference is pointing to
    
    for(var i=1; i<=5; i++){
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS 1");
    

    // solution is to use 'let' instead of 'var'
    // 'let' creates 5 copies pointing to a new
    // copy of i because of block scope
    for(let i=1; i<=5; i++){
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JS 1");
}
x1();
*/

// Example 3
// solution of example 2 using 'var' instead of 'let'
function x3() {
    for(var i=1; i<=5; i++) {
        // var is function scoped so just wrapping
        // a setTimeout in a function where i is
        // given as parameter/argument will create
        // new copies of i
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste JS");
}
x3();