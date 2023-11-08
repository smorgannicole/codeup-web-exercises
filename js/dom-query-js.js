// const buttonFunct = (buttonAttribute) => {
//     if (buttonAttribute === "button-1") {
//         const mainHeader = document.querySelector(`#main-header`);
//         mainHeader.innerHTML = "JavaScript is Cool";
//     } else if (buttonAttribute === "button-2") {
//         const subHeader = document.querySelector(`#sub-header`);
//         subHeader.style.color = "blue";
//     } else if (buttonAttribute === "button-3") {
//         const listItems = document.querySelectorAll(`li`)
//         for (let item of listItems) {
//             if (item.dataset.dbid === `1`) {
//                 item.style.color = "blue";
//             }
//         }
//     } else if (buttonAttribute === "button-4") {
//         const listItems = document.querySelectorAll(`li`)
//         listItems.forEach((listItem, index) => {
//             if (index % 2 !== 0) {
//                 listItem.style.color = "grey";
//             }
//         })
//     } else if (buttonAttribute === "button-5") {
//         const subParagraphs = document.querySelectorAll(`.sub-paragraph`);
//         for (let word of subParagraphs) {
//             if (word.firstChild) {
//                 word.innerHTML = "Mission Accomplished!";
//             }
//         }
//     }
// }

//IIFE
(() => {
    // document.body.addEventListener("click", e => {
    //     const buttonAttr = e.target.getAttribute(`data-buttonNum`)
    //     buttonFunct(buttonAttr);
    const clickBtn = document.querySelector(".click-btn");
    clickBtn.addEventListener("click", (e) => {
        const h1 = document.querySelector(`#main-header`)
        h1.style.backgroundColor = "blue";

    });
    const clickBtnDbl = document.querySelector(".click-btn2");
    clickBtnDbl.addEventListener("dblclick", (e) => {
        const p = document.querySelectorAll(`p`)
        for (let singlep of p) {
            singlep.style.fontSize = `18px`;
        }


    });
    const hoverBtn = document.querySelector(`.hover-btn`)
    hoverBtn.addEventListener(`mouseenter`, e => {
        const li = document.querySelectorAll(`li`)
        for (let singleli of li) {
            singleli.style.color = `red`;
        }
    })
    const leaveBtn = document.querySelector(`.leave-btn`)
    hoverBtn.addEventListener(`mouseleave`, e => {
        const li = document.querySelectorAll(`li`)
        for (let singleli of li) {
            singleli.style.color = `black`;
        }
    })

    // });
})();

//bracket notation to grab 1st position
//subParagraphs[0].innerText = "Mission Accomplished!";

//listItems.forEach((listItem, index) =>{
// if (index % 2 !== 0) {
//{ listItem.style.color = "grey";
//}));
//li:nth-child(even) to do in css to make it EASIER
//document.querySelector(`li[data-dbid=`1`]`).style.color= "blue";