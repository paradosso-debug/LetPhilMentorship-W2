/* 
Step 1: Use getElementById to grab the "addItemBtn" and the "itemList" <ul>

Step 2: Add a click event listener to the button

Step 3: Inside the function:
  - Create a new <li> element using document.createElement("li")
  - Set its innerText to something like "New Item"
  - Append it to the <ul> using appendChild
*/

const addItemBtn = document.getElementById("addItemBtn");

const itemList = document.getElementById("itemList");

// addItemBtn.addEventListener("click", function () {
//   let listItem = document.createElement("li");
//   listItem.innerText = "New Item";
//   itemList.appendChild(itemList[0]);
// });

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerText = "Remove me";

  newItem.addEventListener("click", function () {
    newItem.remove();
  });

  itemList.appendChild(newItem);
});
