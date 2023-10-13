(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// const person = {
//     firstName: "Morgan",
//     lastName: "Smith",
//     sayHello: function() { //use traditional function as a method in objects
//         return `Greetings! from ${this.firstName} ${this.lastName}`; // use "this" rather than "person" bc we're using method
//     }
// }
//     console.log(person.firstName);
//     console.log(person.lastName);
//     console.log(person.sayHello());


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // shoppers.forEach(shopper => { // when we are using only element of for.each, we can take out the parenthesis
    //     let discount = 12;
    //     if(shopper.amount >= 200) {
    //         let discountMath = (shopper.amount * (1 - (discount / 100)));
    //         console.log(`${shopper.name}'s total before the discount was ${shopper.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. They received a ${discount}% discount which brought their total to ${discountMath.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);
    //     } else {
    //         console.log(`${shopper.name}'s total is ${shopper.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);
    //     }
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            },
        },
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J. R. R.",
                lastName: "Tolkien"
            },
        },
        {title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {title: "The Catcher in the Rye",
            author: {
                firstName: "J. D.",
                lastName: "Salinger"
            }
        },
        {title: "One Hundred Years of Solitude",
            author: {
                firstName: "Gabriel",
                lastName: "Márquez"
            }
        },
    ];
    for(let book of books) {
        const{author, title} = book;
        const authorName = `${author.firstName} ${author.lastName}`
        const bookNumber = books.indexOf(book);
        console.log(`Book #${bookNumber + 1} is ${title} written by ${authorName}`);
    }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    const createBook = (insertTitle, insertFirstName, insertLastName) => {
        return {
            title: insertTitle,
            author: {
                firstName: insertFirstName,
                lastName: insertLastName,
            },
        };
    }
    const bookCreation = createBook("My title", "My first name", "My last name");
    console.log(bookCreation);

    const books = [
        createBook("The Great Gatsby", "F. Scott Fitzgerald"),
        createBook("To Kill a Mockingbird", "Harper Lee"),
        createBook("1984", "George Orwell")
    ];

    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log('---');
    }
    for (const book of books) {
        showBookInfo(book);
    }

})();