// Understanding Promises

const cart = ["shoes", "pants", "kurta"];
// inversion of control and callback hell
// code increases horizontally instead of vertically
// creates a pyramid of doom
// passing a callback function to another function
createOrder(card, function(orderId) { //returns orderId
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        })
    });
}); 

// using promise = {data: undefined} 
// -- after async time --> {data : orderDeatils}
const promise = createOrder(cart);
// attaching a callback function to a promise object
promise.then(function(orderId) {
    proceedToPayment(orderId);
});
// OR 
// promise chaining
createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo) {
    return updateWalletBalance(paymentInfo);
})

// OR using arrow functions
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo))


/*
// Example 1
const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
console.log(user);

user.then(function(data) {
    console.log(data);
})
*/

