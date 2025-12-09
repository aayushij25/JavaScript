/* Example of Closures */
function x() {
    // var a = function y() { // valid
    //     console.log(a);
    // }
    var a = 7;
    return function y() { // valid
        console.log(a);
    }
    // y();
    // return y; //valid - closure is returned not just the function
}
// x();

// x(function y() { //valid
//     console.log(a);
// });

var z = x();
console.log(z);
z();

/////////////////////////////////////////////
/* Corner Cases */
// Case 1
function x1() {
    var a = 7;
    function y1() {
        console.log(a); // a refers to reference and not value
    }
    a = 100;
    return y1;
}

var z1 = x1();
console.log(z1);
z1();

// Case 2
function z2() {
    var b = 900;
    function x2() {
        var a = 7;
        function y2() {
            console.log(a, b);
        }
        y2();
    }
    x2();
}
z2();