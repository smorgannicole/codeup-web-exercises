// let a = 1;
// let b = a++;
// let c = ++a;
// // what is the value of a, b, and c?
// console.log(a); //3
// console.log(b); //1
// console.log(c); //3
//
//
// let d = "hello";
// let e = false;
//
// d++;
// e++;
// console.log(d);
// console.log(e);


let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);


// let price = 2.7;
// price = price.toFixed(2);
// console.log(price);


// let price = "2.7";
// price.toFixed(2);
// console.log(price);



let nan1 = isNaN(0)

let nan2 = isNaN(1)

let nan3 = isNaN("")

let nan4 = isNaN("string")

let nan5 = isNaN("0")

let nan6 = isNaN("1")

let nan7 = isNaN("3.145")

let nan8 = isNaN(Number.MAX_VALUE)

let nan9 = isNaN(Infinity)

let nan10 = isNaN("true")

let nan11 = isNaN(true)

let nan12 = isNaN("false")

let nan13 = isNaN(false)

// to illustrate why the isNaN() function is needed:
let nan14 = NaN == NaN
//console.log(
 //   nan1, nan2, nan3, nan4, nan5, nan6, nan7, nan8, nan9, nan10, nan11, nan12, nan13, nan14)
//     `
// ${nan1}
//
// isNaN(1) is ${nan2}
//
// isNaN("") is ${nan3}
//
// isNaN("string") is ${nan4}
//
// isNaN("0") is ${nan4}
//
// isNaN("1") is ${nan5}
//
// isNaN("3.145") is ${nan6}
//
// isNaN(Number.MAX_VALUE) is ${nan7}
//
// isNaN(Infinity) is ${nan8}
//
// isNaN("true") is ${nan9}
//
// isNaN(true) is ${nan10}
//
// isNaN("false") is ${nan11}
//
// isNaN(false) is ${nan12}
//
// NaN == NaN is ${nan13}
//     `
//
//
// )

//let sample = "hello codeup";
//let upperCase = sample.toUpperCase("hello codeup");
let sample = "Hello Codeup" + " Class";
let sampleLength = sample.length;
//let bigc = sample.indexOf("C");
let codeupStart = sample.indexOf("Codeup");
let codeupEnd = sample.length - 6;
let pullSubstring = sample.substring(codeupStart, codeupEnd);


console.log(pullSubstring);




// let username = "Justino (Nova)";
//
// let nameLength = username.length;
// let guildNameStart = username.indexOf("(");
// let guildNameEnd = nameLength - 1;
// let guildName = username.substring(guildNameStart +1, guildNameEnd);
// let guildNameWithParenthesis = "(" + guildName + ")";
// username = username.replace(guildNameWithParenthesis, "");
// username = username.trim();
// console.log("username => ", username, "guildname =>", guildName);



let mermaidDays = 3;
let bearDays = 5;
let herculesDays = 1;
let pricePerDay = 3.1;

let totalPrice = (mermaidDays + bearDays + herculesDays) * pricePerDay;
//let totalPriceAccurate = parseFloat(totalPrice.toFixed(2));
let totalPriceAccurate = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(`$ ${totalPriceAccurate}`);



let googleRatePerHour = 400;
let amazonRatePerHour = 380;
let facebookRatePerHour = 350;

let googleHoursWorked = 6;
let amazonHoursWorked = 4;
let facebookHoursWorked = 10;

let weeklyPay = (googleRatePerHour * googleHoursWorked) + (amazonRatePerHour + amazonHoursWorked) + (facebookRatePerHour + facebookHoursWorked);

10/5
//let number = "3.1";
//number.toString();
//number = number.toFixed(2);
//let numberLength = number.length;
//let startOf1 = number.indexOf(1);
//onsole.log(startOf1);
//number = parseFloat(number);
//number = number.toFixed(3);

const username = "Codeup";
const password = "notapassword";

const is5Chars = password.length >= 5;
const passNotContainUsername = !password.toLowerCase().includes(username.toLowerCase());
//password.toLowerCase turns password string into a lower case string... .includes scans that string for (username.toLowerCase)
// .includes is boolean
const userLengthValid = username.length <= 20;
const usernameNoWhiteSpace = username.trim() == username;
const passNoWhiteSpace = password.trim() == password;
// if you trim something that doesn't have space around it, nothing changes

const validPassword = is5Chars && passNotContainUsername && passNoWhiteSpace;
console.log(`The password is valid ${validPassword}`)
const validUsername = userLengthValid && usernameNoWhiteSpace;
console.log(`The username is valid ${validUsername}`);
