console.log("loops");
//meant for repeating blocks of code multiple times (usually arrays)

//For loop
// for(/*initialization (has to be init. w/ let); condition (to stop); increment (needs to eventually happen)*/){
//     //code that will repeat
// }
// for(let i = 0; i < 10; i++) {
//     console.log(`the code ran at index ` + i);
// }
//
// //While loop
//weakness is tendency to create infinite
// while(condition) {
//
// }

// let index = 0;
// while(index <10) {
//     console.log('The code ran at index' + index);
//     index++;
// }


//Do while loop

// do {
//     //body
// } while(condition)

// let myNumber = 0;
// do {
//     console.log(myNumber);
//     myNumber++;
// } while(myNumber < 10);

//write a function called buildPyramid that takes a number as an argument. The function should return an asterik pyramid that has as many rows as the number
//loops within loops
// const buildRow = (num) => {
//     let result = "";
//     for(let i = 0; i < num; i++) {
//         result += `*`
//     }
//     result += "\n"
//     return result;
// }
// const buildPyramid = (rows) => {
//     let result = "";
//     for(let i = 1; i <= rows; i++) {
//         result += buildRow(i);
//     }
//     return result;
// }
// let pyramid = buildPyramid(5);
// console.log(pyramid);
//break stops whole loop
//continue leaves out a line in a particular iteration

// for(let i = 0; i <= 10; i++) {
//     if(i ===5) {
//         continue;
//     }
//     console.log(`the current index is ${i}`);
// }
//
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
