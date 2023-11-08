const button1Funct = (buttonAttribute) => {
    if (buttonAttribute === "button-1") {
        const mainHeader = document.querySelector(`#main-header`);
        mainHeader.innerHTML = "JavaScript is Cool";
    } else if (buttonAttribute === "button-2") {
        const subHeader = document.querySelector(`#sub-header`);
        subHeader.style.color = "blue";
    } else if (buttonAttribute === "button-3") {
        const listItems = document.querySelectorAll(`li`)
        for (let item of listItems) {
            if (item.dataset.dbid === `1`) {
                item.style.color = "blue";
            }
        }
    } else if (buttonAttribute === "button-4") {
        const listItems = document.querySelectorAll(`li`)
        listItems.forEach((listItem, index) => {
            if (index % 2 !== 0) {
                listItem.style.color = "grey";
            }
        })
    } else if (buttonAttribute === "button-5") {
        const subParagraphs = document.querySelectorAll(`.sub-paragraph`);
        for (let word of subParagraphs) {
            if (word.firstChild) {
                word.innerHTML = "Mission Accomplished!";
            }
        }
    }
}

//IIFE
(() => {
    document.body.addEventListener("click", e => {
        const buttonAttr = e.target.getAttribute(`data-buttonNum`)
        button1Funct(buttonAttr);


    });
})();

//bracket notation to grab 1st position
//subParagraphs[0].innerText = "Mission Accomplished!";

//listItems.forEach((listItem, index) =>{
// if (index % 2 !== 0) {
//{ listItem.style.color = "grey";
//}));
//li:nth-child(even) to do in css to make it EASIER
//document.querySelector(`li[data-dbid=`1`]`).style.color= "blue";