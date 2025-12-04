// getName(); //function
// getName1(); //variable
// getName2(); //variable
// console.log(x); //Hoisting
// console.log(getName);

var x = 7;
function getName() {
    console.log("Namaste Javascript");
}

// getName below is not a function
// it behaves like a variable because 
// its an arrow function
var getName1 = () => {
    console.log("Namaste Javascript");
}

// still behaves like a variable
var getName2 = function() {
    console.log("Namaste Javascript");
}

getName();
console.log(x);
console.log(getName);