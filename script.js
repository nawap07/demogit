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

let result = abcd();
result();

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
setTimeout(() => {
    toasterData("Good night Pawan")
}, 3000);

let n = 5, num = 1;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num++ + " ";
    }
    console.log(row);
}


//Add pattern
let p = 5;

for (let i = 1; i <= p; i++) {
    let spaces = " ".repeat(p - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}


//Higher order functions

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function welcomeMessage() {
    console.log("Welcome to JavaScript!");
}

greetUser("Pawan", welcomeMessage);


function multiplier(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10



//Higher order fuction Map Filter Reduce


//MAP
const nums = [1, 2, 3, 4];
const squared = nums.map(n => n * n);

console.log(squared);

//FILTER
const num1 = [10, 15, 20, 25];
const above20 = num1.filter(n => n > 20);

console.log(above20);

//REDUCE
const numss = [5, 10, 15];
const total = numss.reduce((sum, n) => sum + n, 0);

console.log(total); // 30

// Write a function that takes an array of numbers and returns the sum of even numbers.

function getSumOFEvenNum(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(getSumOFEvenNum([2, 7, 9, 4, 8, 6]));


// using Reduce method

let count = [2, 4, 5, 7, 8, 22];

let data = count.reduce((sum, a) => {
    if (a % 2 === 0) {
        sum += a;
    }
    return sum
}, 0)
console.log(data);
