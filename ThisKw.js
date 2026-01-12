"use strict";

// this in global space /////////////////////////////
console.log(this); // globalObject - window

// this inside a function /////////////////////////// 
function thisKwX() {
    console.log(this); // undefined - but because of 
    // 'this substitution', value becomes globalObject
    // ONLY in non-strict mode
}
thisKwX();

// this in non-strict mode - (this substitution) ////

/* if value of 'this' k/w is undefined or null, due to
'this substitution' in non-strict mode, it is replaced
with globalObject */

// this value depends on how this is called (window) //
console.log("Function called in different ways");
thisKwX();
window.thisKwX();

// this inside a object's method ////////////////////
const obj = {
    a: 10,
    x: function() {console.log(this)}, 
    // x is method of object obj
}

obj.x();

// call apply bind methods (sharing methods) /////////
const student = {
    name: "Aayushi",
    printName: function() {console.log(this.name)},
};

student.printName();

const student2 = {
    name: "Deepika",
};

// student2.printName(); // throw error then method 
// can be reused by sharing i.e. overriding 'this' value

student.printName.call(student2); // value of 'this' 
// becomes student2 

// this inside arrow function //////////////////////
const obj1 = {
    a:10,
    x:() => {console.log(this)},
};
obj1.x();

// this inside nested arrow function ////////////////
const obj2 = {
    a:10,
    x: function() {
        const y = () => {
            console.log(this);
        };
        y();
    },
};
obj2.x();

// this inside DOM //////////////////////////////////
// in html
// this inside DOM element is reference to html element