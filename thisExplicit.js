// Explicit Binding
// Explicit => eitar mane holo j ami nije theke bole dite parbo j this bolte kake bujano hoyeche Call() or applay() or bind() function er maddhome.
// First Example
let func = function(){
    console.log(this.name);
}

let mark = {
    name : "Mark"
}
func.call(mark)



// Second Example
let func = function(first, second){
    console.log(`${this.name} is ${first} & ${second}`);
}

let jon = {
    name : "Jon"
}

let looks = "Handsome"
let allRounder = "All-rounder"
func.call(jon, looks, allRounder) // You can call the function direct here just like this line when you use call()




// // Third Example
let func = function(first, second){
    console.log(`${this.name} is ${first} & ${second}`);
}

let jon = {
    name : "Jon"
}

let looks = "Handsome"
let allRounder = "All-rounder"

// Putting variable into array
let arr = [looks, allRounder]
func.apply(jon, arr) // If you want send variable like array then you have to use apply()



// Fourth Example
let func = function(first, second){
    console.log(`${this.name} is ${first} & ${second}`);
}

let jon = {
    name : "Jon"
}

let looks = "Handsome"
let allRounder = "All-rounder"

let bindMethod = func.bind(jon, looks, allRounder) // It's just like call() but you need to put it in a variable as expression
bindMethod()