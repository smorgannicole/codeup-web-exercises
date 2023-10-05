//console.log("testing")

// let bankAccount = "19.23456";
// bankAccount = parseFloat(bankAccount.toFixed(2));
//
// console.log(bankAccount);

let x = "griffin";
let xNumber = Number(x);
console.log(xNumber);
let isEqual = xNumber === NaN;
let isReallyEqual = isNaN(xNumber);
console.log(isReallyEqual);
//not equal because Nan is a concept

let emptyString = "" == false;
//runs as false
let zero = 0 == false;
//runs as false
let noValue;
//runs as undefined (which is also interpreted as false)
let noData = null;
// null is intentional absence of data (which is also interpreted as false)
let middleName = "Adam";
//runs as true (true- has value and is not a false value)
let username = "justino (nova)";
let guildname;
let nameLength = username.length;
let guildnameStart = username.indexOf("(");
//length does NOT start at 0. When counting indexes, start at 0.
let guildnameEnd = nameLength - 1;
let guildnameWithParenthesis = "(" + guildname + ")";
//guildname = username.substring(guildnameStart + 1, guildnameEnd);
username = username.replace("(" + guildname + ")", "");
username = username.trim;
console.log(guildname);
console.log(username);

//Template strings
let channelMessage = "username form the guildname guild has logged in";
channelMessage = username + " from the " + guildname + " guild has logged in";
channelMessage = `${username} from the ${guildname} guild has logged in`;
console.log(channelMessage);
//`${}` allows you to insert data
let i = 35;
console.log(++i);