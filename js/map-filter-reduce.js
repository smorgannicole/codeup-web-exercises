const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    },
    {
        id: 6,
        name: 'morgan',
        email: 'morgan@morgan.com',
        languages: ['html', 'css', 'javascript', 'bad english']
    }
];

/** Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. */
// const threeLangUsers = users.filter((howManyUsers) => {
//     if (howManyUsers.languages[2]) {
//         return howManyUsers.languages[2];
//     }
// })
// console.log(threeLangUsers);
/** Use .map to create an array of strings where each element is a user's email address */
// const getUSerEmail = users.map((getTheEmail) => {
//     const justEmail = {
//         email: getTheEmail.email
//     }
//     return justEmail;
// })
// console.log(getUSerEmail);
/** Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.s */
const getTotalYears = users.reduce((accumulator, years) => {
    return accumulator + years.yearsOfExperience;
}, 0)
console.log(getTotalYears);
/** Use .reduce to get the longest email from the list of users. */
// const longestEmail = users.reduce((accumulator, emailLong) => {
//     if (emailLong.email.length > accumulator) {
//         return emailLong.email;
//     } else {
//         return accumulator;
//     }
// }, users[0].email.length)
// console.log(longestEmail);
/** Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. */
const capitalizeFirstLetter = string => {
    let result;
    let stringArray = string.split("");
    stringArray[0] = stringArray[0].toUpperCase();
    result = stringArray.join("");
    return result;
}

const listOfNames = users.reduce((accumulator, user, index) => {
    if (index === 0) {
        return capitalizeFirstLetter(user.name)
    }
    if (index === users.length - 1) {
        return `${accumulator} and ${capitalizeFirstLetter(user.name)}.`
    }
    return `${accumulator}, ${capitalizeFirstLetter(user.name)}`
}, "")
console.log(listOfNames);


