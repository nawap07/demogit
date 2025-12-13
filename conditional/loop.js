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
// let num = Number(prompt("Some of all Numbers"));

// if (!num) {
//     console.log("Write Something");
// } else {
//     if (isNaN(num)) {
//         console.log("Invalid Input");
//     } else {
//         if (num > 0) {
//             let rev = 0;
//             while (num > 0) {
//                 let rem = num % 10
//                 rev = rev * 10 + rem
//                 num = Math.floor(num / 10);
//             }
//             console.log(rev);
//         }
//     }
// }

//Find Strong Number;

// let n = Number(prompt("Enter Strong Number"));

// if (!n) {
//     console.log("Write Something");
// } else {
//     if (isNaN(n)) {
//         console.log("Invalid Input");
//     } else {
//         if (n > 0) {
//             let sum = 0;
//             let copy = n;
//             while (n > 0) {
//                 let rem = n % 10;
//                 let rev = 1;
//                 for (let i = 1; i <= rem; i++) {
//                     rev *= i;
//                 }
//                 sum += rev;
//                 n = Math.floor(n / 10);
//             }
//             if (sum === copy) {
//                 console.log("Strong Number");
//             } else {
//                 console.log("Not Strong");
//             }
//         } else {
//             console.log("Should be +ve and more than 0");
//         }
//     }
// }

// DO-While Loop

// let i = 1;
// do {
//     console.log("Good Morning Pawan " + i + "😘" );
//     i++;
// } while (i < 10)


// let random = Math.floor(Math.random()*100 +1);
// console.log(Guess);

// Guess The currect Ans


// let random = Math.floor(Math.random() * 100) + 1;

// let guess = -1;

// while (guess !== random) {
//     guess = Number(prompt("Guess the Number"))
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log("Numbers Between 1-100 , Try Again");
//     }

//     if (guess > random) {
//         console.log("To High , Try Agin");
//     } else if (guess < random) {
//         console.log("Too Low , Try Agian");
//     } else {
//         console.log("Congritulations Your Guess is Right", guess);
//     }
// }

// Add Only 8 Attempt to find currect The Guess

// let rand = Math.floor(Math.random() * 100) + 1;
// let guess = -1
// let attempts = 0;
// let maxAttempts = 8;

// while (attempts < maxAttempts) {
//     guess = Number(prompt("Guess the Number ", attempts, "Out Of", maxAttempts));
//     attempts++;
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log("Number b/n 1-100 , Try Again");
//         continue;
//     }

//     if (guess > rand) {
//         console.log("To High , Try Again");
//     } else if (guess < rand) {
//         console.log("To Low ,Try Again");
//     } else {
//         console.log("Congritulations Your Guess is Correct", guess);
//         break;
//     }

//     if (attempts === maxAttempts) {
//         console.log("You Reach the Max Attempts ; Game Over");
//         console.log("The Correct Number is ", rand);
//     }
// }

//Add Only Ten Attempts

// let random = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let maxAttempts = 10;
// let guess = -1;
// while (attempts < maxAttempts) {
//     guess = Number(prompt(`Guess the Number ${attempts} Out Of ${maxAttempts}`));
//     attempts++;

//     if (isNaN(guess) || guess < 1 || guess > 100) {
//         console.log(`Guess the Number between 1-100 ; Try Again`);
//         continue;
//     }

//     if (guess > random) {
//         console.log(`Your Guess is Too High ; Please Try Again`);
//     } else if (guess < random) {
//         console.log(`Your Guess is Too Low ; Please Try Again`);
//     } else {
//         console.log(`Congritulations Your Guess is Correct ${guess}`);
//         break;
//     }

//     if (attempts === maxAttempts) {
//         console.log("Game Over ; You Reach the Max Attempts");
//         console.log("Correct Number is ", random);
//     }
// }





