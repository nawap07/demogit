console.log("Good Evening Pawan");

const number = prompt("Please enter a number");

for (let i = 1; i <= 10; i++) {
    let res = number * i;
    console.log(number);
}

let num = 5;
for (let i = 1; i <= num; i++) {
    let star = "";
    for (let j = 1; j <= num - i; j++) {
        star = "*"
    }
    console.log(star);
}

//Clousers in js 
function abcd(){
    let a =12;
    return function(){
        console.log(a);
    }
}

abcd();
