// //main method
//
// //IIFE (main method)
// //creating dog object with a function
// // ie factory function
// //dogs as an example
//
// //class creates more readable code for what a thing is and what it does
// const createDog = (name, gender, breed, weight, color, altered) => {
//     let result = {
//         name,
//         gender,
//         breed,
//         weight,
//         color,
//         altered,
//         bark: function (){
//             console.log(`${this.name}, a ${this.breed} barked`)
//         }
//     }
//     return result;
//
// }
// class Dog {
//     constructor(name, gender, breed, weight, color, altered){
//         this.name= name;
//         this.gender= gender;
//         this.breed= breed;
//         this.weight= weight;
//         this.color= color;
//         this.altered= altered;
//     }
//     bark(){
//         console.log(`${this.name}, a ${this.breed} barked`)
//     }
//
// }
// (() => {
//     let dog1 = new Dog("Ryn", "female", "Labrador retriever", 35, "black", false)
//     console.log(dog1)
//
// })();

// build a class for car

class Car {
    constructor(make, model, yearOfManu, miles) {
            this.make = make,
            this.model = model,
            this.yearOfManu = yearOfManu,
            this.miles = miles
        }
        vroom() {
            console.log(`This car is a ${this.make} ${this.model}, made in the year ${this.yearOfManu} with ${this.miles} miles.`);
        }
}

let car1 = new Car("Nissan", "Altima", "2015", "65,000");
car1.vroom()