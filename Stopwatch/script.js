const time = document.querySelector("#time");
const startbtn = document.querySelector("#startbtn");
const stopbtn = document.querySelector("#stopbtn");
const resetbtn = document.querySelector("#resetbtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId ;
let hrs = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener("click",() => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
stopbtn.addEventListener("click",() => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener("click",() => {
    paused = true;
    clearInterval(intervalId);
    elapsedTime = 0;
    startTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    time.textContent = "00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    time.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0" + unit).length > 2) ? unit : "0" + unit;
    }
}