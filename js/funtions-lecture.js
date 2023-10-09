//break down a function
//function sayHello(usersFullName){ //parameter (placeholder) within parenthesis, within funtion
//    console.log(`Hello, ${usersFullName}`);
//};

//sayHello("Isaac");
//function has been invoked
//argument is passing info, invoking. can invoke infinitely.


//Ex
// function isCoding(codeLover){
//     console.log(`${codeLover} loves coding`);
// }
// isCoding("Morgan");
// isCoding("insert any name");

//Ex
// function coding(){
//     console.log("I love coding");
// };
//
// coding();

//function declaration
// function isCoding(codeLover){
//     console.log(`${codeLover} loves coding`);
// }

//anonymous function, rarely used
// const sayHello = function (usersFullName) {
//     console.log(`Hello, ${usersFullName}`);
// };

//arrow function expression
// const sayHello = (usersFullName) =>
//     console.log(`Hello ${usersFullName}`);
//brackets can be omitted if only doing one thing

//Changing declaration function into arrow
// function isCoding(codeLover){
//     console.log(`${codeLover} loves coding`);
// }
// isCoding("Morgan");
// isCoding("insert any name");
//
// const isCoding = (codeLover) =>
//     console.log(`${codeLover} loves to code`);
// isCoding("morgan");


//return keyword- orders console log to go grab info for dev to do something with
//want to invoke and save info in variable to do something with
//can't run console.log after a return... it won't work
// can only return one thing
// const sayHello = (usersFullName) => {
//     return `Hello ${usersFullName}`;
// }
// const greeting = sayHello("Jason");
// console.log(greeting);

//Ex
// const sayHello = (codeLover) => {
//     return `Hello ${codeLover}`;
//     }
// const greeting = sayHello("Morgan");
// console.log(greeting)
//
// can send multiple parameters, but need 2 variables to capture the data

//ex
// const returnInt = (enterInterger) => {
//     return parseFloat(`${enterInterger}`).toFixed(1);
// }
// const open = returnInt("43.5553");
// console.log(open);

//default values
// const sayHello = (usersFullName = "no username") => //another way to have a username if no argument is invoked
//      console.log(`Hello ${usersFullName}`);
// const greeting = sayHello("Morgan");
// const greeting2 = sayHello();

//scoping

// const globalVar = "I am global"; // avoid using the global bc it cripples the function
//
// const tieFighter = () => {
//     const localVariable = "I am local";//local scope, cant be accessed outside of function, only global
//     console.log(globalVar);
// };
// console.log(localVariable);
// tieFighter();

//Better
// const globalVar = "I am global";
// const tieFighter = (global) => {
//     console.log(global);
// };
// tieFighter(globalVar);

// let color = "4";
// const enteredNumber = typeof parseInt(color) == "number";
// console.log(enteredNumber);
//
// let notColor = !color;
// console.log(notColor);

// let str1 = prompt("enter string");
// const enteredString = typeof parseInt(str1) == "string";
// console.log(enteredString)

let test = prompt("enter");
console.log(typeof test)
