//IIFE
(() => {
    const konamiArr = [`ArrowUp`, `ArrowUp`, `ArrowDown`, `ArrowDown`, 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', `Enter`]
    let i = 0;
    let lives = 3;
    let newLives = lives + 27;
    const keyupEvent = (e) => {
        if (konamiArr.indexOf(e.key) < 0 || e.key !== konamiArr[i]) {
            return i;
        } else {
            i++;
        }
        if (konamiArr.length === i) {
            document.querySelector('#life-counter').innerHTML = newLives;
            const removeAnimation = document.querySelector(`#pAnimation`);
            removeAnimation.classList.remove(`make-it-bounce`)
        }
    }
    document.addEventListener("keyup", keyupEvent)
})();