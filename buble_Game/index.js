var timer = 60;
var score = 0;
var numb;


function increaseScore() {
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}

function getNewHit() {
    numb = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = numb;
}
function makBubble() {
    let num = "";
    for (let i = 1; i <= 90; i++) {
        const bb = Math.floor(Math.random() * 10);
        num += ` <div class="bb"> ${bb}</div>`
    }
    document.querySelector(".bubble").innerHTML = num;
}

function runTimer() {
    const timers = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".sec").textContent = timer
        } else {
            clearInterval(timers)
            document.querySelector(".bubble").innerHTML=`<h1>Your Score is ${score}</h1>`;
        }
    }, 1000)
}

document.querySelector(".bubble").addEventListener("click", function (det) {
    let clickeNum = Number(det.target.textContent);
    if (clickeNum === numb) {
        increaseScore();
        getNewHit()
        makBubble()
    }
})


runTimer()
makBubble();
getNewHit();