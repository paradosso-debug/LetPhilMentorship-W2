/* 
Step 1: Use getElementById to select the button with id "removeBtn"
Step 2: Use getElementById to select the <ul> with id "itemList"

Step 3: Add a click event listener to the button

Step 4: Inside the function:
  - Use querySelectorAll to grab all <li> elements inside the list
  - Use forEach to loop through each <li> and call element.remove() to delete them
*/

let removeBtn = document.getElementById("removeBtn");
let itemList = document.getElementById("itemList");

removeBtn.addEventListener("click", function () {
  const allItems = itemList.querySelectorAll("li");
  allItems.forEach((item) => {
    item.remove();
  });
});
