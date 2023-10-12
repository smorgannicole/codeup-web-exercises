(()=>{
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    //the push method. other methods like ".ToUpperCase" method would require you to reassign the variable. Not with arrays
    //push method adds to end
    daysOfTheWeek.push("Friday"); //not reassigning this. just using a method to alter values

    //unshift method adds to beginning
    daysOfTheWeek.unshift("Sunday"); //if you were to save this into a new variable, it would console log into a number


    const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

    //pop method to remove from end
    let choreRemoved = todoList.pop();
    //console.log(choreRemoved) //returns what was taken out

    //shift method to remove from the beginning
    const choreAtBeginning = todoList.shift();

    //locating array elements
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
    const greenIndex = colors.indexOf("green"); //returns position in array when it finds that value (as a number)
    //if it doesnt find it
    const magentaIndex = colors.indexOf("magenta");
    //returns -1

    //starting at the beginning
    const redIndex = colors.indexOf("red"); //would return 0
    //start at end
    const reddIndexLast = colors.lastIndexOf("red"); //would return 7
    //jumping a bit ahead, a higher level function to filter
    const allRedValues = colors.filter((color) => {
        return color === "red" && color.includes("e");
    });
    //console.log(allRedValues); // returns: 2) ['red', 'red']

    //slicing method (very similar to substring). grabs blindly. not very useful. does NOT modify original array, only provides new array as a return
    const lastTwoColors = colors.slice(colors.length - 3, colors.length) //takes starting and stopping point

    //reversing method. DOES alter original array
    colors.reverse()

    //sort method. sorts alphabetically and numerically. DOES alter original array
    colors.sort()
    //can also
    colors.sort().reverse();

    //splitting and joining

    let namesString = "Joe,Bob,Sally";
    const namesArray = namesString.split(",");
    // console logs ["Joe", "Bob", "Sally"]
    const backToString = namesArray.join("|")
    // console logs "Joe|Bob|Sally"
    let url = "https://codeup.edu/";
    let domain = url.split("/")[2]
    //console logs codeup.edu


})();