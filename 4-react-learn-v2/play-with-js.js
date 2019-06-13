

// de-structuring  ( es6 )

let person = {
    name: 'Nag',
    age: 35
}

// let name = person.name;
// let age = person.age;
// or
// let { name: name, age: age } = person;
// or
let { name, age } = person;
console.log(name)
console.log(age)