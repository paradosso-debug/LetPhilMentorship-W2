// Step 1: Create a constant object named 'characters' with 4 string properties: lower, upper, numbers, and symbols.
const characters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+=-{};',.<>?",
};

// Step 2: Wait for the HTML content to load using DOMContentLoaded event
// Step 3: When the "Generate" button is clicked, start building the password
// Step 4: Read and sanitize user input from the form
// - Get the number value from #length and use parseInt
// - Clamp it between 4 and 32 using Math.min and Math.max
// - Get the checkbox states for lower, upper, numbers, and symbols
// - Alert the user if none are selected

// Step 5: Generate the password using the custom function

// Step 6: Show the generated password and auto-select it

// Step 7: Save the password to localStorage

// Step 8: Update the password history display

// Step 9: When "Clear History" is clicked, wipe localStorage and clear the UI list

// Step 10: Load history when the page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate").addEventListener("click", () => {
    let length = parseInt(document.getElementById("length").value);
    console.log(length);
    let finalLength = Math.min(Math.max(length, 4), 32);
    const useLower = document.getElementById("lower").checked;
    const useUpper = document.getElementById("upper").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    if (!useLower && !useUpper && !useNumbers && !useSymbols) {
      alert("Please select at least one character type!");
      return;
    }
    const password = generatePassword(
      finalLength,
      useLower,
      useUpper,
      useNumbers,
      useSymbols
    );
    const output = document.getElementById("password");
    output.value = password;
    output.select();

    saveToLocalStorage(password);
    loadPasswordHistory();
  });

  document.getElementById("clear-history").addEventListener("click", () => {
    localStorage.removeItem("passwords");
    loadPasswordHistory();
  });
  loadPasswordHistory();
});

function generatePassword(length, useLower, useUpper, useNumbers, useSymbols) {
  let pool = "";
  if (useLower) pool += characters.lower;
  if (useUpper) pool += characters.upper;
  if (useNumbers) pool += characters.numbers;
  if (useSymbols) pool += characters.symbols;

  if (!pool) return "Select at least one character type!";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPassword = Math.floor(Math.random() * pool.length);
    password += pool[randomPassword];
  }
  return password;
}

function saveToLocalStorage(password) {
  const saved = JSON.parse(localStorage.getItem("passwords") || "[]");

  saved.unshift(password);

  localStorage.setItem("passwords", JSON.stringify(saved.slice(0, 5)));
}

function loadPasswordHistory() {
  const history = document.getElementById("history");
  const saved = JSON.parse(localStorage.getItem("passwords") || "[]");
  history.innerHTML = "";
  saved.forEach((pwd) => {
    const li = document.createElement("li");
    li.textContent = `🔐 ${pwd}`;
    history.appendChild(li);
  });
}

// Step 11: Function to generate a password based on options

// Step 12: Save the password in localStorage, keeping only the 5 most recent entries

// Step 13: Display the saved passwords from localStorage as <li> elements inside <ul id="history">
