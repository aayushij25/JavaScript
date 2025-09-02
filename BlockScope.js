/* BLOCK SCOPE */
// if(true) console.log("jsnfiojf");
// if(true){
//     //Compound Statement
//     var a =10;
//     console.log(a);
// };

/* SHADOWING IN BLOCK */
// var a = 100;
// let b = 100;
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

/* SHADOWING IN FUNCTION */
// const c = 100;
// function x() {
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);

/* ILLEGAL SHADOWING */
// let a = 20;
// {
//     var a = 10;
// }

/* VALID SHADOWING */
// var a = 10;
// {
//     let a = 20;
// }

// let a = 10;
// function x() {
//     var a = 100;
// }

const b = 20;
{
    const b = 100;
    {
        const b = 30;
        // console.log(b);
    }
}
console.log(b);