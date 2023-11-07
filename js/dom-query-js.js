const mainHeader = document.querySelector(`#main-header`);
mainHeader.innerHTML = "JavaScript is Cool";
const subHeader = document.querySelector(`#sub-header`);
subHeader.style.color = "blue";
const listItems = document.querySelectorAll(`li`);
for (let item of listItems) {
    if (item.dataset.dbid % 2 === 0) {
        item.style.color = "grey";
    }
}
//listItems.forEach((listItem, index) =>{
// if (index % 2 !== 0) {
//{ listItem.style.color = "grey";
//}));
//li:nth-child(even) to do in css to make it EASIER
//document.querySelector(`li[data-dbid=`1`]`).style.color= "blue";
for (let item of listItems) {
    if (item.dataset.dbid === `1`) {
        item.style.color = "blue";
    }
}

const subParagraphs = document.querySelectorAll(`.sub-paragraph`);
for (let word of subParagraphs) {
    if (word.firstChild) {
        word.innerHTML = "Mission Accomplished!";
    }
}
//bracket notation to grab 1st position
//subParagraphs[0].innerText = "Mission Accomplished!";