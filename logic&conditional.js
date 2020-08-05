
let candy = 100

if (candy >= 100) {
    console.log("You got a cavity!")
}
else {
console.log("You didn't get a cavity!")
}


// Code to check which grade you got

let grades = 20

if (grades >= 20) {
    console.log("A")
}
else if (grades >= 18.5) {
    console.log("B")
}
else if (grades >= 15) {
    console.log("C")
}
else if (grades >= 12.5) {
    console.log("D")
}
else if (grades >= 10) {
    console.log("E")
}
else {
    console.log("F")
}



// Ternary Operator

let number = 25
let isEven = (number % 2 === 0) ? "Yes" : "No"

console.log("Is " + number + " an even number? " + isEven)



// Logical Operators

//And &&
let wearingShoes = true;
let needsTying = true;

if (wearingShoes && needsTying) {
    console.log("I should tie my shoes!");
}

// Or (||)
let thereIsSnickers = false;
let thereIsSkittles = true;

if (thereIsSnickers || thereIsSkittles) {
    console.log("I'm glad there's candy in this house!");
}

// Not (!)
let temperature = 50;
let itIsHot = temperature > 70;

if (!itIsHot) {
    console.log("I will wear my boots today!");
}

