function updateTimer(timer) {
    if (timer === 0) {
        alert('EXTERMINATE!');
        document.body.innerHTML = '';
    } else if (timer > 0) {
        document.getElementById('timer').innerHTML = timer;
    }
}

function defuseTheBOM(startTime) {
    clearInterval(startTime);
}

//IIFE
(() => {
    let detonationTimer = 5;

    const startTime = setInterval(() => {
        detonationTimer--;
        updateTimer(detonationTimer)
    }, 1000)

    var defuser = document.getElementById('defuser');
    defuser.addEventListener('click', () => {
        defuseTheBOM(startTime);
    });

})();