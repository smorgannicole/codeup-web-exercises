const konamiArr = [`ArrowUp`, `ArrowUp`, `ArrowDown`, `ArrowDown`, 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', `Enter`]
let i = 0;

const keyupEvent = (e) => {
    let keyPressed = e.key;
    if (konamiArr.indexOf(keyPressed) < 0 || keyPressed !== konamiArr[i]) {
        return i;
    } else {
        i++;
    }
    if (konamiArr.length === i) {
        console.log(`You now have 30 lives!`)
    }
}


document.addEventListener("keyup", keyupEvent)