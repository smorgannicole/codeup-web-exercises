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

const users = 157;

if(users >= 200){ //evaluates as true because it has value and is defined (not falsy values)
    console.log("thats a lot of users");
}  else if (users >= 1000) {
    console.log("Thats too many users")
}  else {
    console.log("marketing needs to do a better job");
}

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