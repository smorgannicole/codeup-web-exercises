const changeProfPic = (insertPicHere) => {
    insertPicHere.setAttribute("src", "./img/autumn-theme.jpeg")
}
const changeProfName = (insertNameHere) => {
    insertNameHere.innerHTML = "Morgan Smith";
}
const changeDesc = (insertDescHere) => {
    insertDescHere.classList.add("color-font-change");
}
const changeCard = (insertCardHere, changeThatColor) => {
    insertCardHere.setAttribute(`style`, changeThatColor);
}
//IIFE
(() => {
    const profilePic = document.querySelector(`#profile-pic`)
    setTimeout(() => {
        changeProfPic(profilePic)
    }, 2000)
    const profileName = document.querySelector(`#profile-name`)
    setTimeout(() => {
        changeProfName(profileName)
    }, 4000)
    const profileDesc = document.querySelector(`#profile-desc`)
    setTimeout(() => {
        changeDesc(profileDesc)
    }, 6000)


    const profCard = document.querySelector(`#profile-card`)
    const colorArr = [`background-color: #F9EDDC`, `background-color: #D98C4A`, `background-color: #E3C595`, `background-color: #4D3338`];
    setInterval(() => {
        const randoColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        changeCard(profCard, randoColor)
    }, 2000)
})();