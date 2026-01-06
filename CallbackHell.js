/* 
console.log("Namaste");
setTimeout(function() {
    console.log("JavaScript");
}, 5000);
console.log("Season 2");
*/

const cart = ["shoes", "pants", "kurta"];
// Callback Hell
// Pyramid of doom
api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet()
        })
    })
})

// Inversion of Control
// Main part of code is provided as callback to another 
// function which we don't know if its reliable or not
api.createOrder(cart, function() {
    api.proceedToPayment()
})