const flipDaCard = (daCards) => {
    for (let daCard of daCards) {
        daCard.addEventListener(`click`, e => {
            daCard.classList.toggle(`flipped`);
        })
    }
}

(() => {
    // TODO: Flip the card when clicked
    const card = document.querySelectorAll(`.flipped`);
    flipDaCard(card);
})();
