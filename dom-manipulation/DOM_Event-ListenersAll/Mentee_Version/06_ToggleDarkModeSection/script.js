/* 
Step 1: Use querySelector to select the first <section> with class "dark-section"
  - Store it in a variable like sectionElement

Step 2: Use getElementById to grab the "darkModeBtn" button

Step 3: Add a click event listener to the button

Step 4: Inside the function, use classList.toggle to add/remove the "dark" class on the section
*/

const backgroundColor = document.getElementById("background-color");

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  backgroundColor.classList.toggle("dark-section");
});
