const fruits = ["orange", "strawberry", "banana", "blueberry"];
//values dont need to be same data type
const firstFruit = fruits[0];
const numOfFruits = fruits.length; //this starts at 1, not 0
//traditional for loop
for(let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if(fruit.includes("berry")) {
        console.log(fruit);
    }
}
//for of loop. weakness: doesn't show increment, no access to index
for(let fruit of fruits) {
    if(fruit.includes("berry")) {
        console.log(fruit);
    }
}
//forEach method (only can be used on arrays), function w no name
fruits.forEach((fruit/*item*/, index, /*number position in loop of array*/array =>) {
    if(fruit.includes("berry")) {
        console.log(fruit);
    }
});

//IIFE (immediately invoke function expression). has its own scope, protects variables inside, doesnt trash global namespace. we arent calling this anywhere else so it doesnt need a name
//AKA main method. dont need to define functions in here either. All you need in here is what is actually runnning. dont define anything

(()=>{
    //START HERE when writing code
} )();

//combining arrays via the spread operator (...)
const products = [
    ...fruits,
    ...saladDresseings,
    ..."watermelon"
]
