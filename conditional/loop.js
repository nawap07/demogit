//Sum Of Natural number

// let num = prompt("Please Enter a Number");
// if (!num) {
//     console.log("Enter Something");
// } else {
//     let numb = Number(num);
//     if (isNaN(numb)) {
//         console.log("Invalid Input");
//     } else {
//         if (numb > 0) {
//             let sum=0;
//             for(let i=1;i<=numb;i++){
//                 sum+=i;
//             }
//             console.log(sum);
//         } else {
//             console.log("Number should be Positive or more than 0");
//         }
//     }
// }

//Factorial

// let factor = prompt("Please Enter a Number");

// if (!factor) {
//     console.log("Write Something");
// } else {
//     let factors = Number(factor);
//     if (isNaN(factors)) {
//         console.log("Invalid Input");
//     } else {
//         if (factors > 0) {
//             let sum = 1;
//             for (let i = 1; i <= factors; i++) {
//                 sum *= i;
//             }
//             console.log(sum);
//         } else {
//             console.log("Number Should be +ve or Not a 0");
//         }
//     }
// }

//While Loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let num = prompt("Guess The Number")
// while (num !== '10') {
//     num = prompt("Guess The number")
// }
// console.log("Congratulations Pawan");

// Add the  number using While loop

// let num = Number(prompt("Some of all Numbers"));

// if (!num) {
//     console.log("Write Something");
// } else {
//     if (isNaN(num)) {
//         console.log("Invalid Input");
//     } else {
//         if (num > 0) {
//             let sum = 0;
//             while (num > 0) {
//                 let rem = num % 10;
//                 num = Math.floor(num / 10);
//                 sum += rem;
//             }
//             console.log(sum);
//         }
//     }
// }

//Reverse the Number
let num = Number(prompt("Some of all Numbers"));

if (!num) {
    console.log("Write Something");
} else {
    if (isNaN(num)) {
        console.log("Invalid Input");
    } else {
        if (num > 0) {
            let rev = 0;
            while (num > 0) {
                let rem = num % 10
                rev = rev * 10 + rem
                num = Math.floor(num / 10);
            }
            console.log(rev);
        }
    }
}
