const redEl = document.querySelector(".red")
const yelloEl = document.querySelector(".yellow")
const greeEl = document.querySelector(".green")
const timerRed = 5;
const greenTimer = 10;
const yellowtimer = 3;


function initYelow()  {
    yelloEl.classList.add("active")
}

function initGreen (timer) {
    greeEl.classList.add("active");
    const intervalId = setInterval (() => {
        timer -=1
        if(timer === 1){
            greeEl.classList.remove("active")
            yelloEl.classList.remove("active")
            clearInterval(intervalId)
            initRed(timerRed)
        }
        if (timer ===  yellowtimer){
            initYelow();
        }
    },1000)

}
function initRed(timer){
    redEl.classList.add("active");
    const intervalId = setInterval (()=>{
        if (timer === 1){
            redEl.classList.remove("active")
            yelloEl.classList.remove("active")
            clearInterval(intervalId)
            initGreen(greenTimer)    
        }
        if (timer === yellowtimer){
            initYelow()
        }
        timer -= 1;
    },1000)
}
const start = ()=>{
    initRed(timerRed)
}
start()