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

const singleClick = (oneClick, header1) => {
    oneClick.addEventListener("click", (e) => {
        header1.style.backgroundColor = "blue";
    });
}
const doubleClick = (twoClicks, para) => {
    twoClicks.addEventListener("dblclick", (e) => {
        for (let singlep of para) {
            singlep.style.fontSize = `18px`;
        }
    });
}
const hoverOnButton = (hoverRound, listItem1) => {
    hoverRound.addEventListener(`mouseenter`, e => {
        for (let singleli of listItem1) {
            singleli.style.color = `red`;
        }
    })
}
const leaveThatButton = (leaveRound, listItem2) => {
    leaveRound.addEventListener(`mouseleave`, e => {
        for (let singleli of listItem2) {
            singleli.style.color = `black`;
        }
    })
}

//IIFE
(() => {
    // document.body.addEventListener("click", e => {
    //     const buttonAttr = e.target.getAttribute(`data-buttonNum`)
    //     buttonFunct(buttonAttr);
    const clickBtn = document.querySelector(".click-btn");
    const h1 = document.querySelector(`#main-header`)
    singleClick(clickBtn, h1)

    const clickBtnDbl = document.querySelector(".click-btn2");
    const p = document.querySelectorAll(`p`)
    doubleClick(clickBtnDbl, p)

    const hoverBtn = document.querySelector(`.hover-btn`)
    const li1 = document.querySelectorAll(`li`)
    hoverOnButton(hoverBtn, li1)

    const leaveBtn = document.querySelector(`.leave-btn`)
    const li2 = document.querySelectorAll(`li`)
    leaveThatButton(leaveBtn, li2)

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