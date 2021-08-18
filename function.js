// To Know more about it check first-chapter (10)

// Function Statement
function funcName(){
    // Statements
}


// Function Expression
const funcName = function(){
    // Statements
}


// Call Back Function
function callBack(callbackFunc){
    callbackFunc()
}


// This is the function I'm sending through argument
function callbackFunc(){
    const myName = "Shafayet"
    console.log(`My name is ${myName}`);
}


// Calling the function
console.log(callBack(callbackFunc));