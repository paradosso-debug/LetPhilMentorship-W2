/* 
Step 1: Use getElementsByClassName to grab all elements with the class "box"
  - Store it in a variable like boxes

Step 2: Use getElementById to grab the "hideBtn" button

Step 3: Add a click event listener to the button

Step 4: Inside the event, loop through each box and use element.style.display = "none"
  - This hides the element
*/

const boxes = document.getElementsByClassName("box");
const hideBtn = document.getElementById("hideBtn");

hideBtn.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }
});
