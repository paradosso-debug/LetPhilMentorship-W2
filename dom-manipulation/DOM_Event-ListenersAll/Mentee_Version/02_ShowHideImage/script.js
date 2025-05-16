/* 
Step 1: Use getElementById to grab the <button> element using id "toggleImageBtn"
  - Store it in a variable like toggleImageBtn

Step 2: Use getElementById to grab the <img> !@#$%^&*()element using id "myImage"
  - Store it in a variable like imageElement !@#$%^&*()_+

Step 3: Add a click event listener to the button using addEventListener("click", function)

Step 4: Inside the function, use classList.toggle("hidden") to show or hide the image
*/

const toggleImageBtn = document.getElementById("toggleImageBtn");

const imageElement = document.getElementById("myImage");

toggleImageBtn.addEventListener("click", function () {
  imageElement.classList.toggle("hidden");
});
