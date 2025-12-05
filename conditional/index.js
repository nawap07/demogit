// Shop Discount

// let price = Number(prompt("Pay Here"));  //0-3000 -0% || 3001-5000 -10% || 5001 - 9000 -15%  || 9000 - 20%

// if (price >= 0 && price <= 3000) {
//     console.log("You Have to Pay  = ", price);
// } else if (price >= 3001 && price <= 5000) {
//     console.log("You Have To Pay = ", price - Math.floor((price * 10) / 100));
// } else if (price >= 5001 && price < 9000) {
//     console.log("You Have to pay = ", price - Math.floor((price * 15) / 100));
// } else {
//     console.log("You Have to pay = ", price - Math.floor((price * 20) / 100));
// }

//----------------//--------------------------------//-----------------------------------------//

// const num = Number(prompt("Please Enter Price"));
// let dis = 0;
// if (num > 0 && num <= 2000) {
//     dis = 0;
// } else if (num > 2000 && num <= 5000) {
//     dis = 10;
// } else if (num > 5000 && num <= 7000) {
//     dis = 15
// } else if (num >= 9000) {
//     dis = 20
// }

// console.log(num - Math.floor((dis * num) / 100))


//Movie Ticket Price

// let age = Number(prompt("Enter Your Age"));

// if(age){
//     if (age <= 10) {
//     console.log("Your Ticket Price is 100");
// } else if (age <= 17) {
//     console.log("Your Ticket Price is 150");
// } else if (age >= 18) {
//     console.log("Your Ticket Price is 200");
// } else {
//     console.log("Please enter age");
// }
// }else{
//     console.log("Enter age");
// }


//Bijli Bill

// let unit = Number(prompt("Enter Electricity Units"));
// let amount = 0;
// if (unit > 400) {
//     amount = (unit - 400) * 12;
//     unit = 400;
// }

// if (unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8;
//     unit = 200
// }

// if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 6;
//     unit = 100;
// }

// amount += unit * 4;
// console.log(amount) 

//INR

// let Price = Number(prompt("Please Enter Price"))

// if (Price >= 500) {
//     let notes = (Price / 500);
//     Price = (Price % 500);
//     console.log("500 Notes ", notes);
// }

// if (Price >= 200 && Price < 500) {
//     let notes = (Price / 200);
//     Price = (Price % 200)
//     console.log("200 Notes", notes);

// }

// if (Price >= 100 && Price < 200) {
//     let notes = (Price / 100);
//     Price = (Price % 100)
//     console.log("Total 100 notes", notes);
// }

// if (Price >= 50 && Price <= 100) {
//     let notes = (Price / 50);
//     Price = (Price % 50)
//     console.log("Total 50 Rs ", notes);

// }
// if (Price >= 20 && Price < 50) {
//     let notes = (Price / 20);
//     Price = (Price % 20)
//     console.log("Total 20 Rs ", notes);

// }
// if (Price >= 10 && Price < 20) {
//     let notes = (Price / 10);
//     Price = (Price % 10)
//     console.log("Total 10 Rs ", notes);

// }

let Price = Number(prompt("Please Enter Price"));

if (Price >= 500) {
    console.log("500 Notes", Math.floor(Price / 500));
    Price = (Price % 500);
}
if (Price >= 200 && Price < 500) {
    console.log("200 Notes", Math.floor(Price / 200));
    Price = (Price % 200);
}
if (Price >= 100 && Price < 200) {
    console.log("100 Notes", Math.floor(Price / 100));
    Price = (Price % 100);
}
if (Price >= 50 && Price < 100) {
    console.log("50 Notes", Math.floor(Price / 50));
    Price = (Price % 50);
}
if (Price >= 20 && Price < 50) {
    console.log("20 Notes", Math.floor(Price / 20));
    Price = (Price % 20);
}
if (Price >= 10 && Price < 20) {
    console.log("10 Notes", Math.floor(Price / 10));
    Price = (Price % 10);
}