/* 
Step 1: Use querySelector to select the first <p> element on the page
  - Store it in a variable like firstParagraph

Step 2: Use getElementById to grab the button with id "colorBtn"

Step 3: Add a click event listener to the button

Step 4: Inside the function, use element.style.color to change the text color of the first paragraph
*/

const firstParagraph = document.querySelector("p");

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
  firstParagraph.style.color = "blue";
});
