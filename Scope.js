function a() {
    // console.log(b);
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
// var b = 10;
a();
// console.log(b);