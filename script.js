let timer;
let elapsedTime = 0;
let running = false;

const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsContainer = document.querySelector('.laps');

startStopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        lapBtn.disabled = true;
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
        lapBtn.disabled = false;
    }
    running = !running;
});

lapBtn.addEventListener('click', recordLap);

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    lapBtn.disabled = true;
    running = false;
    lapsContainer.innerHTML = '';
});

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
    const lapTime = document.createElement('div');
    lapTime.classList.add('lap');
    lapTime.textContent = display.textContent;
    lapsContainer.appendChild(lapTime);
}
