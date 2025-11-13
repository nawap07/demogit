//Create bubbles 

function createBubble() {
    let count = "";

    for (let i = 1; i < 90; i++) {
        const bb = Math.floor(Math.random() * 10);
        count += ` <div class="bb"> ${bb} </div>`
    }

    document.querySelector(".bubble").innerHTML = count;
}

//Create a timer 
let time = 60;
function getTime() {
    var timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector(".sec").textContent = time;
        } else {
            clearInterval(timer);
            document.querySelector(".bubble").textContent = `Your score is ${score}`
        }
    }, 1000)
}

//Create hit
var hitCount = 0;
function getHit() {
    hitCount = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hitCount;
}

//Scores
var score = 0;
function getScore() {
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}

document.querySelector(".bubble").addEventListener("click", function (det) {
    const targetNum = Number(det.target.textContent);
    if (targetNum === hitCount) {
        getScore();
        getHit();
        createBubble();
    }
})

createBubble();
getTime();
getHit();
