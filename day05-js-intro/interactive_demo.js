// why does this work? 

const result = ["absent", "absent"];
result[0] = "correct";  // ← This changes the array!


// think of variables as labeled boxes:

const box = ["apple"];     // Box label is permanent
box.push("banana");        // Add to the box
// box = ["orange"];       // Can't relabel the box

let box2 = ["apple"];      // Box label can change
box2.push("banana");       // Add to the box  
box2 = ["orange"];         // Relabel the box

// References in Action
const bag1 = ["apple"];
const bag2 = ["apple"];
const bag3 = bag1;

console.log(bag1 === bag2);  // false (different bags)
console.log(bag1 === bag3);  // true (same bag)

bag3.push("banana");
console.log(bag1);  // ["apple", "banana"] - why?

// Arrow functions (src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]

// traditional
function addNumbers(a, b) {
    return a + b;
}

// arrow functions (modern)
const addNumbers = (a, b) => a + b;

// Or with a function body:
const addNumbers = (a, b) => {
    return a + b;
};

function handleClick() {
    console.log("Button was clicked!");
}

// handleClick is the callback
button.addEventListener("click", handleClick);


// Event handlers (what we'll use today):
button.addEventListener("click", () => {
    console.log("Clicked!");
});

document.addEventListener("keydown", (event) => {
    console.log("You pressed:", event.key);
});



// Array methods (useful for data processing):
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// ===== Function hoisting ======
// This works:
sayHello();  // "Hello!"

function sayHello() {
    console.log("Hello!");
}

// This doesn't:
sayGoodbye();  // Error!

const sayGoodbye = () => {
    console.log("Goodbye!");
};

