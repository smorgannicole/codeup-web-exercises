// if (true){
//     console.log("condition is true"); //runs
//
// } else {
//     console.log("condition is false"); //doesnt run
// }
//
// colsole.log("this is after the conditional statement");//runs (it moves on)
//for readability

// let isLoggedIn = true;
//
// if(isLoggenIn){
//     console.log("the user is logged in");
// }  else {
//     console.log("the user is not logged in");
// }
//
// let username = "merrellj";
//
// if(username){ //evaluates as true because it has value and is defined (not falsy values)
//     console.log("the user is logged in");
// }  else {
//     console.log("the user is not logged in");
// }

// const users = 157;
//
// if(users >= 200){ //evaluates as true because it has value and is defined (not falsy values)
//     console.log("thats a lot of users");
// }  else if (users >= 1000) {
//     console.log("Thats too many users")
// }  else {
//     console.log("marketing needs to do a better job");
// }

//if statement can also be a 3 forked road
//looking for first  true statement, swith if and else if

// const userRole = "admin";
//
// if (userRole = "student") {
//     console.log("let them see cirriculum");
// }  else if (userRole == "admin") {
//     console.log("let them see cirriculum and portal");
// }  else {
//     console.log("dont lett the see anything");
// }
//
//
// const isTwo = (number) => {
//     if (typeof number !== "number") {
//         return false;
//     }
//     let result = number === 2;
//     return result;
// }

//ternary meant for simple if/else



/* ########################################################################## */


 // * TODO:
 // * Create a function named `analyzeColor` that accepts a string that is a color
 // * name as input. This function should return a message which relates to the
 // * color stated in the argument of the function. For colors you do not have
 // * responses written for, return a string stating so



 /** Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
//- `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// const analyzeColor = (colorName) => {
//
//     if (!colorName) {
//         return "please enter a color";
//     } else if (colorName === "blue") {
//         return "you chose blue";
//     } else if (colorName === "red") {
//         return "you chose red";
//     } else if (colorName === "yellow") {
//         return "you chose yellow";
//     } else {
//         return "congrats, you didn't choose a primary color";
//     }
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
    // switch (randomColor) {
    //     case "red":
    //         console.log("you chose red");
    //         break;
    //     case "blue":
    //         console.log("you chose blue");
    //         break;
    //     case "yellow":
    //         console.log("you chose yellow");
    //         break;
    //     default:
    //         console.log("congrats, you didn't choose a primary color");
    // }



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// const analyzeColor = (colorName) => {
//     const enteredNumber = typeof parseInt(colorName) == "number";
//
//     if (enteredNumber || !colorName) {
//         return "please enter a color";
//     } else if (enterColor === "blue") {
//         return "you chose blue";
//     } else if (enterColor === "red") {
//         return "you chose red";
//     } else if (enterColor === "yellow") {
//         return "you chose yellow";
//     } else {
//         return "congrats, you didn't choose a primary color";
//     }
// }
// const enterColor = prompt("please enter a color");
// const runTheTest = analyzeColor(enterColor);
// console.log(runTheTest);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// const calculateTotal = (luckyNumber, totalAmount) => {
//     const lessAndGreaterThan = luckyNumber >5 || luckyNumber <0;
//     if(lessAndGreaterThan || !luckyNumber) {
//         return "Please enter a number between 0 and 5";
//     } else if (luckyNumber == 0) {
//         return `Your total price is ${(totalAmount).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
//     } else if (luckyNumber == 1) {
//         return `Your total price is ${(totalAmount * .9).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
//     } else if (luckyNumber == 2) {
//         return `Your total price is ${(totalAmount * .75).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
//     } else if (luckyNumber == 3) {
//         return `Your total price is ${(totalAmount * .65).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
//     } else if (luckyNumber == 4) {
//         return `Your total price is ${(totalAmount * .5).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
//     } else {
//         return "Your items are free";
//     }
// }
// const enterLuckyNumber = prompt("Please enter your lucky number");
// const enterTotalAmount = prompt("Please enter the total amount of your groceries");
// const runItUp = calculateTotal(enterLuckyNumber, enterTotalAmount);
// console.log(runItUp);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
// const luckyNumberGenerator = Math.floor(Math.random() * 6);
// const calculateTotal = (luckyNumber, totalAmount) => {
//     if(typeof totalAmount == "string") {
//         return "Please enter numbers for your grocery total";
//     } else if (typeof totalAmount == "number") {
//         if (luckyNumber === 0) {
//             let totalAmountPrice = totalAmount.toLocaleString("en-US", {style:"currency", currency:"USD"});
//             let message = `No discount given. Your total price is ${totalAmountPrice}.`;
//             return message;
//         } else if (luckyNumber === 1) {
//             let groceryMath = totalAmount * .9;
//             let totalAmountPrice = groceryMath.toLocaleString("en-US", {style:"currency", currency:"USD"});
//             return `Your total price was ${totalAmount} and now is ${totalAmountPrice}`;
//         } else if (luckyNumber === 2) {
//             let groceryMath = totalAmount * .75;
//             let totalAmountPrice = groceryMath.toLocaleString("en-US", {style:"currency", currency:"USD"});
//             return `Your total price was ${totalAmount} and now is ${totalAmountPrice}`;
//         } else if (luckyNumber === 3) {
//             let groceryMath = totalAmount * .65;
//             let totalAmountPrice = groceryMath.toLocaleString("en-US", {style:"currency", currency:"USD"});
//             return `Your total price was ${totalAmount} and now is ${totalAmountPrice}`;
//         } else if (luckyNumber === 4) {
//             let groceryMath = totalAmount * .5;
//             let totalAmountPrice = groceryMath.toLocaleString("en-US", {style:"currency", currency:"USD"});
//             return `Your total price was ${totalAmount} and now is ${totalAmountPrice}`;
//         } else {
//             return "Your items are free";
//         }
//     } else {
//         return "Please enter your grocery total";
//     }
// }
// const enterTotalAmount = prompt("Please enter the total amount of your groceries");
// alert(`Your lucky number is ${luckyNumberGenerator}`);
// const runItUp = calculateTotal(luckyNumberGenerator, enterTotalAmount);
// console.log(runItUp);

 // * TODO:
 // * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 // * would like to enter a number. If they click 'Ok', prompt the user for a
 // * number, then use 3 separate alerts to tell the user:
 // *
 // * - whether the number is even or odd
 // * - what the number plus 100 is
 // * - if the number is negative or positive
 // *
 // * Do *NOT* display any of the above information
 // * if the user enters a value that is not of the number data type.
 // * Instead, use an alert to inform them of the incorrect input data type.
 // *
 // *
 // * Can you refactor your code to use functions?
 // * HINT: The way we prompt for a value could be improved

let yesNoAnswer = confirm("Would you like to enter a number?");
if (yesNoAnswer) {
    let enterNum = prompt("Enter a number");
    let itIsNum = typeof parseFloat(enterNum) == "number";
    let itIsString = typeof enterNum == "string";
    if (enterNum % 2 == 0 && itIsNum){
        console.log("Your number is even");
        console.log(`Your number plus 100 is ${parseFloat(enterNum) + 100}`);
        if (enterNum > 0) {
            console.log("Your number is positive");
        } else {
            console.log("Your number is negative");
        }
    } else if (enterNum % 2 == 1 && itIsNum) {
        console.log("Your number is odd");
        console.log(`Your number plus 100 is ${parseFloat(enterNum) + 100}`);
        if (enterNum > 0) {
            console.log("Your number is positive");
        } else {
            console.log("Your number is negative");
        }
    } else if (itIsString) {
        alert("please enter a number");
    }
} else {
    console.log("Thank you anyway");
}





//while and do while practice

// let number = 2;
//
// while (number < 100) {
//     console.log(number + `this number doubled is...`);
//     number * 2;
// }