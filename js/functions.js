// exercises
"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// const sayHello = (name) => {
//     return `Hello ${name}!`;
// };

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// const helloMessage = sayHello("Morgan");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

// const myName = "Morgan";
// sayHello(myName);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// const isTwo = (number) => {
//     return number === 2;
// };
// const returnIsTwo = isTwo(random);
// console.log(returnIsTwo);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// const enterBill = prompt("Enter the amount of your bill");
// const enterPercentage = prompt("Enter the percentage (as a decimal) you would like to tip");
// const calculateTip = (totalBill, tipPercentage) => {
//     return (totalBill * tipPercentage).toLocaleString("en-US", {style: "currency", currency: "USD"});
// };
// const actualTip = calculateTip(enterBill, enterPercentage);
// const jeremysTipTtoal = calculateTip(1000,.10);
// const isaacsBill = calculateTip(600,.20);
// console.log(actualTip)
// console.log(jeremysTipTtoal)
// console.log(isaacsBill)
// alert(actualTip);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.

 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// const takePrice = prompt("Enter the price of the item");
// const takeDiscount = prompt("Enter the discount percentage as a decimal");
// const applyDiscount = (originalPrice, discountPrice) => {
//     return originalPrice * (1-discountPrice);
// };
// const finalPrice = applyDiscount(takePrice, takeDiscount).toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(finalPrice);
//
// //this method will allow you to prompt, but are confined bc you can't reuse function. this is preferred tho
// const applyDiscount = () => {
//     const takePrice = prompt("Enter the price of the item");
//     const takeDiscount = prompt("Enter the discount percentage as a decimal");
//     return takePrice * (1-takeDiscount);
// };
// const finalPrice = applyDiscount().toLocaleString("en-US", {style: "currency", currency: "USD"});
// console.log(finalPrice);

const sumEvenNumbers = (num1, num2, num3, num4, num5, num6) => {
    let sum = 0;

    // Loop through the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        // Check if the current number is even
        if (numbers[i] % 2 === 0) {
            // If it's even, add it to the sum
            sum += numbers[i];
        }
    }

    // Return the final sum
    return sum;
};

// Test cases
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Should return 12
console.log(sumEvenNumbers([10, 20, 30, 40, 50])); // Should return 150
console.log(sumEvenNumbers([3, 7, 11])); // Should return 0
This function, sumEvenNumbers, initializes a sum variable to 0 and then iterates through the array of numbers. For each number, it checks if it's even using the modulo operator (%) and adds it to the sum if it is. Finally, it returns the sum as the result.

