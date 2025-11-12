let num = "";
for (let i = 1; i <= 90; i++) {
    const bb = Math.floor(Math.random() * 10);
    num += ` <div class="bb"> ${bb}</div>`
}
document.querySelector(".bubble").innerHTML = num;