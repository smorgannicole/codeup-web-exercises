function updateTimer(theTimer) {
    if (theTimer === 0) {
        alert('EXTERMINATE!');
        document.body.innerHTML = ''; //takes whatever is in html and gets rid of it. You can also add a video or anything using html
    } else if (theTimer > 0) {
        document.querySelector('#timer').innerHTML = theTimer;
    }
}

function defuseTheBOM(countDown) {
    clearInterval(countDown);
}

//IIFE
(() => {
    let detonationTimer = 5;

    const startTime = setInterval(() => {
        updateTimer(detonationTimer--)
    }, 1000)
    let defuser = document.getElementById('defuser');
    defuser.addEventListener('click', () => {
        defuseTheBOM(startTime);
    });

})();