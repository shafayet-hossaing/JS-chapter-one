// IIFE
(function myFunc(x,y){
    console.log(`The sum is ${x+y}`);
})(5,6)



// IIFE jokhon function expression hishebe newa hoy tokhon oitar bhitorer value k amra object akare pete pari
// IIFE As Function Expression
var funcExpress = (function(){ // 
    var x = {
        name: "Shafayet"
    }
    return x
})()

console.log(funcExpress.name);