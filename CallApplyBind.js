// Call //////////////////////////////////////////
let name = {
    firstName: "Aayushi",
    lastName: "Jaiswal",
    // printFullName: function() {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

// name.printFullName();
printFullName.call(name, "Nagpur", "Maharashtra");

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

// function borrowing
// name.printFullName.call(name2);

printFullName.call(name2, "Mumbai", "Maharashtra");

// Apply //////////////////////////////////////////
// only difference between Call is Apply method is 
// the way we pass arguments

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// Bind //////////////////////////////////////////

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();