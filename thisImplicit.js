// Implicit binding

// 3: This keyword. ei this keyword ta cofusing and eitakei valo bhabe bujhaise....
// 3.1: Implicit binding => Ei roll ta follow korte hbe...like: kono function jokhon call kora hbe amdr jeta dekhte hbe sheta holo oi function ta koto number line e call kora ache & dekhte hbe j oi function er left e kono dot notation ache kina ( . ) jodi thake then oi dot notation ( . ) er left e jeta thakbe oi takei actually THIS bujhano hoyeche...niche kichu example dewa holo.



// ***************************************
// First example :
let mark = {
    name: "Jhon",
    printPlayerName : function () {
        console.log(this.name);
    }
}
mark.printPlayerName()


// Second Example
let printPlayer = function (obj) {
    obj.player = function () {
        console.log(this.name);
    }
}

var tamim = {
    name : "Tamim",
    age : 23
}
var sakib = {
    name : "Sakib",
    age : 23
}


printPlayer(tamim)
printPlayer(sakib)
sakib.player()
tamim.player()



// Third Example
let person = function (name, age) {
    return{
        name: name,
        age: age,
        printName : function () {
            console.log(this.name);
        },
        mother : {
            name : "Bilkis",
            motherName : function () {
                console.log(this.name);
            }
        },
        father: {
            name: "Rahman",
            grandFather : {
                name: "Grandfather",
                grandFatherName: function () {
                    console.log(this.name);
                }
            }
        }
    }
}

let sakibs = person("sakib", 23)
sakibs.printName()
sakibs.mother.motherName()
sakibs.father.grandFather.grandFatherName()