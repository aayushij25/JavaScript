// Map //////////////////////////////////////
/*
const arr = [5,1,3,2,6];
function double(x) {
    return x*2;
}
const output1 = arr.map(double);
console.log(output1);

 
// function triple(x) {
//     return x*3;
// }
// const output2 = arr.map(triple);
// 
// OR
const output2 = arr.map(x => x*3);
console.log(output2);

const output = arr.map(function binary(x) {
    return x.toString(2);
});
console.log(output);
*/

// Filter ////////////////////////////////////
/*
const arr = [5,1,3,2,6];

function isOdd(x) {
    return x%2;
}
const output1 = arr.filter(isOdd);
console.log(output1);

// function isEven(x) {
//     return x%2 === 0;
// }
// const output2 = arr.filter(isEven);
// console.log(output2);
// OR
const output2 = arr.filter(function isEven(x) {
    return x%2===0;
});
console.log(output2);

// function greaterThan4(x) {
//     return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log(output);
// OR
const output = arr.filter(x => x>4);
console.log(output);
*/

// Reduce ///////////////////////////////////
/*
const arr = [5,1,3,2,6];
// E.g. 1
// transform this logic to reduce
function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// OR 

// acc = accumulator
// curr = arr[i]
const output = arr.reduce(function(acc, curr) {
    acc += curr;
    return acc;
}, 0);
console.log(output);

// E.g. 2

function findMax(arr) {
    let max = 0;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

// OR

const output1 = arr.reduce(function(acc, curr) {
    if(curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);
console.log(output1);
*/

// Practice Problems //////////////////////////
// Example 1
// ["akshay saini", "donald trump", ..];
const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26},
];
const output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);

// Example 2
// {26: 2, 75: 1, 50: 1}
const ages = users.reduce(function(acc, curr){
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {});
console.log(ages);

// Example 3
// first name of all people whose age is < 30 => [askay, deepika]
const young = users.filter(x => x.age<30).map(x => x.firstName);
console.log(young);

const young1 = users.reduce(function(acc, curr){
    if(curr.age<30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(young1);