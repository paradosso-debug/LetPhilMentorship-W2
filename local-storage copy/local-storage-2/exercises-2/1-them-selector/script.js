// ✅ Function to set the website theme based on user choice
// Save the user's theme preference in the browser's LocalStorage
// This means we store a value like "light" or "dark" under the key "theme"

// Change the background color of the webpage depending on the theme
// If the theme is dark, background becomes dark gray (#333)
// Otherwise, background is white #fff

// Change the text color to match the theme
// White text #fff for dark background and black #000 text for light background

// ✅ When the page loads, check if the user previously selected a theme

// ✅ If a saved theme exists, apply it by calling setTheme

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.style.background = theme === "dark" ? "green" : "white";
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("light");
}

localStorage.clear();
