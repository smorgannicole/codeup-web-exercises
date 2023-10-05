//Question 1
let a = 1;
let b = a++;
let c = ++a;

console.log(a); //3
console.log(b); //1
console.log(c); //3


//Question 2
let d = "hello";
let e = false;

d++;
e++;
console.log(d);
console.log(e);


//Question 3
let perplexed;
perplexed + 2;
console.log(perplexed);


//Question 4
let price1 = 2.7;
price1 = price1.toFixed(2);
console.log(price1);


//Question 5
//let price2 = "2.7";
//price2.toFixed(2);
//console.log(price2);


//Question 6
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

let nan14 = NaN == NaN
console.log(nan1, nan2, nan3, nan4, nan5, nan6, nan7, nan8, nan9, nan10, nan11, nan12, nan13, nan14)

//Question 7
let sample2 = "hello codeup";
let upperCase = sample2.toUpperCase("hello codeup");
sample2 = "Hello Codeup" + " Class";
let sampleLength = sample2.length;
let bigc = sample2.indexOf("C");
let codeupStart = sample2.indexOf("Codeup");
let codeupEnd = sample2.length - 6;
let pullSubstring = sample2.substring(codeupStart, codeupEnd);

console.log(pullSubstring);


//Question 8
let usernameJ = "Justino (Nova)";

let nameLength = usernameJ.length;
let guildNameStart = usernameJ.indexOf("(");
let guildNameEnd = nameLength - 1;
let guildName = usernameJ.substring(guildNameStart +1, guildNameEnd);
let guildNameWithParenthesis = "(" + guildName + ")";
usernameJ = usernameJ.replace(guildNameWithParenthesis, "");
usernameJ = usernamej.trim();
console.log("username => ", username, "guildname =>", guildName);


//Question 9
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

