function updateTimer(timer) {
    if (timer === 0) {
        alert('EXTERMINATE!');
        document.body.innerHTML = '';
    } else if (timer > 0) {
        document.getElementById('timer').innerHTML = timer;
    }
}

function defuseTheBOM(countDown) {
    clearInterval(countDown);
}

//IIFE
(() => {
    let detonationTimer = 5;
    const startTime = setInterval(() => {
        detonationTimer--;
        updateTimer(detonationTimer)
    }, 1000)
    let defuser = document.getElementById('defuser');
    defuser.addEventListener('click', () => {
        defuseTheBOM(startTime);
    });

})();