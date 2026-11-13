// --- [S1] VS Code Setup and First JavaScript Execution ---
// The Week 10 alert demonstration is omitted here to keep later demos uninterrupted.

// Difference between let and const
let myName = "Rai";
console.log(myName);

myName = "Pramisha";
console.log(myName);

const birthYear = 2004;
console.log(birthYear);


// --- [S2] Debugging Basics and Control Flow Principles ---
// Uncomment the lines below one by one to check the errors!

// 1. ReferenceError (Variable name typo)
// let favoriteColor = "Blue";
// console.log(favouriteColor);

// 2. ReferenceError (Missing quotes for a string)
// let myCity = Seoul;
// console.log(myCity);

// 3. SyntaxError (Missing parenthesis)
// console.log("Portfolio life granted!"


// --- [S2] (Continued) Getting User Input (prompt) ---
// let userName = prompt("What is your name?");
// console.log("Welcome, " + userName + "!");


// --- [S3] Welcome Message Coding and Logical Error Debugging ---
// Get the current computer's hour
let currentHour = new Date().getHours();
console.log("The current hour is: " + currentHour);

if (currentHour < 12) {
    console.log("Good morning! Welcome to the portfolio.");
} 
else if (currentHour < 18) {
    console.log("Good afternoon! Please look around the portfolio.");
} 
else {
    console.log("Good evening! Thank you for visiting.");
}


// --- [S3] (Continued) Logical Error Debugging Examples ---
// Uncomment the examples below to figure out what the problem is.

// 1. Reversed condition order (Logical Error)
/*
let testHour = 10; // Assuming it's 10 AM
if (testHour < 18) {
    console.log("Good afternoon!"); // <-- This will be printed!
} else if (testHour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good evening!");
}
*/

// 2. Incorrect use of Logical Operators (|| and &&)
/*
let isWeekend = true;
let testHour2 = 10;

// Incorrect example (Using OR)
if (isWeekend || testHour2 < 12) {
    console.log("[Incorrect Result] A weekend morning has dawned! Are you resting well?");
}

// Correct example (Using AND)
if (isWeekend && testHour2 < 12) {
    console.log("[Correct Result] A weekend morning has dawned! Are you resting well?");
}
*/


// Week 11: add DOM events without removing the Week 10 greeting.
// 1. Find the red button element.
let myButton = document.querySelector("#theme-btn");

// 2. Also find the body tag element. (for theme switching)
let bodyElement = document.querySelector("body");

// Midpoint check: verify in the console if the elements were found correctly.
console.log("Button object: ", myButton);

// 3. Hire a guard (addEventListener) to listen for click events on the button.
myButton.addEventListener("click", function () {
    // Print a log to the console when the button is clicked
    console.log("Theme switch button clicked!");

    // Use classList.toggle() to attach and detach the dark mode class.
    bodyElement.classList.toggle("dark-mode");

    // Change the button text according to the situation.
    if (bodyElement.classList.contains("dark-mode")) {
        myButton.textContent = "Switch to Light Mode";
    } else {
        myButton.textContent = "Switch to Dark Mode";
    }
});

// [S1] querySelector style change demo
// Example of changing the color of the h1 tag to blue
// let titleElement = document.querySelector("#main-title");
// titleElement.style.color = "blue";