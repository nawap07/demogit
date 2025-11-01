console.log("Good Evening Pawan");

// const number = prompt("Please enter a number");

// for (let i = 1; i <= 10; i++) {
//     let res = number * i;
//     console.log(number);
// }

// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let star = "";
//     for (let j = 1; j <= num - i; j++) {
//         star = "*"
//     }
//     console.log(star);
// }

//Clousers in js 
function abcd() {
    let a = 12;
    return function () {
        console.log(a);
    }
}

//Create a Toaster notifications

function toaster(config) {
    return function (str) {
        const div = document.createElement("div");
        div.className = ``;
        div.textContent = str;
        document.querySelector(".parent").appendChild(div)
        setTimeout(() => { 
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }

}

let toasterData = toaster({
    positionX: 'right',
    positionY: 'top',
    theme: 'dark',
    duration: 3
})

toasterData("Good morning pawan")
toasterData("Have a nice day")

let n = 5, num = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num++ + " ";
  }
  console.log(row);
}
