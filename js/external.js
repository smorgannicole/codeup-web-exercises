console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favColor = prompt("What's your favorite color?");

alert(`${favColor} is my favorite color too!!`);



const googleName = prompt("Enter the name of the first company you work for");
const amazonName = prompt("Enter the name of the second company you work for");
const facebookName = prompt("Enter the name of the third company you work for");
alert(`You work at ${googleName}, ${amazonName}, and ${facebookName}`);

const googlePay = prompt(`Enter the hourly pay of ${googleName}`);
const amazonPay = prompt(`Enter the hourly pay of ${amazonName}`);
const facebookPay = prompt(`Enter the hourly pay of ${facebookName}`);

const googleHours = prompt(`Enter the number of hours you worked this week at ${googleName}`);
const amazonHours = prompt(`Enter the number of hours you worked this week at ${amazonName}`);
const facebookHours = prompt(`Enter the number of hours you worked this week at ${facebookName}`);

const googleTotal = googlePay * googleHours;
const amazonTotal = amazonPay * amazonHours;
const facebookTotal = facebookPay * facebookHours;

let totalWeeklyPay = googleTotal + amazonTotal + facebookTotal;
alert(`Your total weekly income was ${totalWeeklyPay}`);


// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.