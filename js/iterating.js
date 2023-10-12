(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ["Gina", "George", "Geoffrey", "Gohnathan"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    let numOfElements = names.length;
    console.log(`The number of elements in this array is: ${numOfElements}`);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(`Name one is ${names[0]}`); //bracket notation
    console.log(`Name two is ${names[1]}`);
    console.log(`Name three is ${names[2]}`);
    console.log(`Name four is ${names[3]}`);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < numOfElements; i++) {
        // let indexPosition = [i];
        // let namePosition = names[i];
        console.log(`Using for loop to show index ${i} is name ${names[i]}`);
    }
    // for of
    for (let name of names) {
        console.log(name);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //aka anonymous element
    names.forEach(function/*can omit this*/(name, index){
        console.log(`Using for each to show at index ${index}: ${name}`);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    const returnFirstElement = (array) => {
        let result = array[0];
        return result;
    }
    let getArray = returnFirstElement(names);
    console.log(getArray);

    const returnSecondElement = (array) => {
        let result = array[1];
        return result;
    }
    let getArray2 = returnSecondElement(names);
    console.log(getArray2);

    const returnLastElement = (array) => {
        let result = array[numOfElements - 1];
        return result;
    }
    let getLastElement = returnLastElement(names);
    console.log(getLastElement);

})();
