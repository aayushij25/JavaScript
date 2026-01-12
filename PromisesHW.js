// HW 
// cart and 4 APIs - createOrder, proceedToPayment, showOrderSummary, updateWallet
// Create a Producer and a Consumer

/////// Consumer /////////////////////////////

const cart = ["shoes", "pants", "kurti"];

createOrder(cart)
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    console.log("Payment is successful: " + paymentInfo);
    return paymentInfo;
})
.catch(function(err){
    console.log(err.message);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    console.log("Order summary");
    return paymentInfo;
})
.then(function(paymentInfo) {
    return updateWallet(paymentInfo);
})
.then(function(paymentInfo) {
    console.log("Wallet updated.");
    return paymentInfo;
})
.catch(function(err) {
    console.log(err.message);
})


/////// Producer ////////////////////////////

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId) {
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    })

    return pr;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        if(orderId.length<2) {
            const err = new Error("Payment issue");
            reject(err);
        }
        const paymentInfo = "567";
        if(paymentInfo) {
            resolve(paymentInfo);
        }
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise(function(resolve, reject) {
        resolve(paymentInfo);
    });
}

function updateWallet(paymentInfo) {
    return new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Wallet cannot be updated.");
            reject(err);
        }
        if(paymentInfo) {
            resolve(paymentInfo);
        }
    });
}