// const fruits = ["orange", "strawberry", "banana", "blueberry"];
// //values dont need to be same data type
// const firstFruit = fruits[0];
// const numOfFruits = fruits.length; //this starts at 1, not 0
// //traditional for loop
// for(let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     if(fruit.includes("berry")) {
//         console.log(fruit);
//     }
// }
// //for of loop. weakness: doesn't show increment, no access to index
// for(let fruit of fruits) {
//     if(fruit.includes("berry")) {
//         console.log(fruit);
//     }
// }
// //forEach method (only can be used on arrays), function w no name
// fruits.forEach((fruit/*item*/, index, /*number position in loop of array*/array =>) {
//     if(fruit.includes("berry")) {
//         console.log(fruit);
//     }
// });
//
// //IIFE (immediately invoke function expression). has its own scope, protects variables inside, doesnt trash global namespace. we arent calling this anywhere else so it doesnt need a name
// //AKA main method. dont need to define functions in here either. All you need in here is what is actually runnning. dont define anything
//
// (()=>{
//     //START HERE when writing code
// } )();
//
// //combining arrays via the spread operator (...)
// const products = [
//     ...fruits,
//     ...saladDresseings,
//     ..."watermelon"
// ]
/** PRACTICE PROBLEMSSSSSS */
    (function(){
        "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */

        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */

        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */


        /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */

        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */

        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */

//     })();
// const names = ["Gina", "George", "Geoffrey", "Gohnathan"];
// const nameCount = names.length;
// for(let i =0; i < nameCount; i++) {
//     const name = names[i];
//     console.log(name);
// }
//
// names.forEach(name => {
//     console.log(name)
// });
//
// const names = ["Gina", "George", "Geoffrey", "Gohnathan"];
// const nameCount = names.length;
// for(let i =0; i < nameCount; i++) {
//     const name = names[i];
//     console.log(name);
//     if(name.indexOf(1)) {
//         console.log(name);
//     }
// }
const names = ["Gina", "George", "Geoffrey", "Gohnathan"];
const nameCount = names.length;
names.forEach(name => {
    console.log(name);
});