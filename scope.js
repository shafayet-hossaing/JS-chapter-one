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



