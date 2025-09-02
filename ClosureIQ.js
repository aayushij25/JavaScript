function x() {
    // var i = 1;
    /*
    for(var i=1; i<=5; i++) {
        setTimeout(function() {
            console.log(i); //gives 6 because of closures
        }, i*1000);
    }
    */

    // To fix this we use let
    /*
    for(let i=1; i<=5; i++) { 
        // because let is block scoped so it creates a new copy of i everytime loop is run
        setTimeout(function() {
            console.log(i); 
        }, i*1000);
    }
    */

    // How to execute the same using var instead of let
    for(var i=1; i<=5; i++){
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x* 1000);
        }
        close(i);
    }
    
    // setTimeout(function() {
    //     console.log(i);
    // }, 1000);
    console.log("Namaste JS");
}
x();