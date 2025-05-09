// ================================================
// FILE: script.js
// LESSON: JavaScript Basics — COMMENT-ONLY VERSION
// ================================================

// 🧠 Your task is to write all the JavaScript needed to:
// - Access HTML elements
// - Create a function
// - Add a click event listener to a button

// Step 1: Use document.getElementById() to grab the following elements:
// - The button (id="greetBtn")
// - The heading (id="mainHeading")
// - The paragraph (id="description")
const greetBtn = document.getElementById("greetBtn");
const mainHeading = document.getElementById("main-heading");
const description = document.getElementById("description");

// Step 2: Write a function named greet()
// - Inside the function:
//   - Use alert() to show a welcome message
//   - Change the heading's text to say "🎈 You clicked the button!"
//   - Change the paragraph text to something new like "This was updated with JavaScript."
function greet() {
  alert("Hello welcome to JavaScript!");

  mainHeading.innerText = "You clicked the button!";
  description.innerText = "This was updated with Javascript.";
}

// Step 3: Add an event listener to the button
// - Use addEventListener()
// - When clicked, it should run the greet() function
greetBtn.addEventListener("click", greet);
