// JavaScript Fundamentals!

// Variable Declarations
let name = "Alice" // can be reassigned
const PI = 3.1415926 // Cannot be reassigned, use capital letters
var oldStyle = "avoid" // Older syntax, avoid in modern JS


const TARGET = "WORDS"; // won't change
let currGuess = "";     // will change
let attempst = 0;       // will change

// not this
var everything = "mixed up" // confusing scope rules

// Creating Arrays
let letters = ["W", "O", "R","D","S"];
let results = [];
let mixed = [1, 'hello', true, null]

// Common Operations
letters.push("!");   // add ot the end --> ["W", "O", "R","D","S","!"]
let index = letters.indexOf("R")     // find position --> 2
letters.includes('W') // equivalent of `w in letters` 

// for loops
// basic for loop -- when you need the index
for (let i = 0; i < 5; i++) {
    console.log(`Letter ${i}: ${guess[i]}`);
}

// // For...of loop (when you don't need index)
for (let letter of guess) {
    console.log(letter);
}
result = ["absent"]*5

// ==== CONDITIONALS ====
// Basic if/else
if (guess[i] === target[i]) {
    result = 'correct';
} else if (targetLetters.includes(guess[i])) {
    result = 'present';
} else {
    result = 'absent';
}

// Multiple conditions
if (attempts < 6 && !gameWon) {
    continueGame();
}

// Strict Equality v Loose Equality
// Numbers vs Strings
console.log(5 === "5");    // false (number vs string)
console.log(5 == "5");     // true (string "5" converted to number 5)

// Boolean vs Numbers
console.log(true === 1);   // false (boolean vs number)
console.log(true == 1);    // true (true converted to 1)

// Null vs Undefined
console.log(null === undefined);  // false (different types)
console.log(null == undefined);   // true (special case in JS)

// Zero vs Empty String
console.log(0 === "");     // false (number vs string)
console.log(0 == "");      // true (empty string converted to 0)

// Arrays (these might surprise you!)
console.log([] === []);    // false (different objects in memory)
console.log([] == []);     // false (same reason, but converted to primitives)
console.log([] == "");     // true! (empty array converts to empty string)

[]===[]