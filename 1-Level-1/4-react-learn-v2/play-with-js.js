"use strict"

//-----------------------------------
// de-structuring  ( es6 )
//-----------------------------------

// let person = {
//     name: 'Nag',
//     age: 35
// }

// let name = person.name;
// let age = person.age;
// or
// let { name: name, age: age } = person;
// or
// let { name, age } = person;
// console.log(name)
// console.log(age)


//-----------------------------------
// arrow function
//-----------------------------------


// let getPrice = function () {
//     return 100 + 200;
// }

// or



// let getPrice = () => {
//     return 100 + 200;
// }





// let getPrice = (count) => {
//     return count * (100 + 200);
// }
//or
// let getPrice = count => {
//     return count * (100 + 200);
// }




// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;s
// }



// why we need arrow function ?

// reason-1 : for compact syntax


// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// arr.sort(function (x, y) { return x - y });
// or
// arr.sort((x, y) => { return x - y });
// or
// arr.sort((x, y) => x - y);

// console.log(arr);


// reason-2 : to bind 'this'


let trainer = {
    name: 'nag',
    teach: function () {
        console.log(this.name + " teaching js")
        let askQues = (q) => {
            console.log(this.name + " answering " + q)
        }
        console.log("teaching ends")
        return askQues;
    }
}

let askQues = trainer.teach();
askQues("Q1")