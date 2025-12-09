/*
{
    // Block - Compound statement
    // groups multiple statements
    var a = 10;
    console.log(a);
}
*/

var a = 100;
let b = 200;
const c = 300;
{
    var a = 10; // global scope - can be accessed outside of block
    let b = 20; // block scope - cannot be accessed outside of block
    const c = 30; // block scope
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(a); 
// console.log(b);
// console.log(c);

console.log(a); // blocked a has 
// shadowed global a because 
// they are pointing to the same memory location

console.log(b); // shadowing but let is 
// block scoped and has separate memory location

console.log(c); // shadowing but const is 
// block scoped and has separate memory location

// Shadowing in function scope
function x() {
    const c = 30;
    console.log(c);
}
x();
console.log(c);

// Legal shadowing 
var m = 19;
{
    let m = 29; // same for const
}

let n = 39;
function hi() {
    var n = 49; 
}

// Illegal shadowing
/*
let x = 20;
{
    var x = 10; // same for const
} 
    */

// Lexical scope in block
const v = 20;
{
    const v = 30;
    {
        const v = 40;
        console.log(v);
    }
    console.log(v);
}
console.log(v);