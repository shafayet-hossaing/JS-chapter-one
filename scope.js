// Lexical scope
function global(){
    var a = 5
    function local(){
        var b = 10
        console.log(a + b);
    }
    return local()

}
console.log(global());



names = "Hello" // Automatic global variable "use strict" mode e kaj korbe na....r eita good practice na
function hello () {
    console.log(names);
}

console.log(hello());