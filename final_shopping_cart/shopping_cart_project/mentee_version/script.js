// STEP 0: Initialize the shopping cart array (cart) to store products.
let cart = [];

// STEP 1: Function renderCart()
// Purpose: Display products in cart and show total price.
// STEP 1.1: Select the HTML element "cart-list" to show product list.
// STEP 1.2: Select the HTML element "total-price" to display total cost.
// STEP 1.3: Clear any existing product display in the "cart-list" element.
// STEP 1.4: Initialize a variable "total" to track the total price.
// STEP 1.5: For each product in the cart array, do the following:
// STEP 1.5.1: Create an element to display each product.
// STEP 1.5.2: Display the product name and price inside this element.
// STEP 1.5.3: Create a "Remove" button for the product.
// STEP 1.5.4: Set button text to "Remove".
// STEP 1.5.5: Set button click event to trigger removeProduct function.
// STEP 1.5.6: Insert the "Remove" button into the product element.
// STEP 1.5.7: Insert the complete product element into the "cart-list" on the page.
// STEP 1.5.8: Add the product’s price to the running total.
// STEP 1.6: Display the total price in the "total-price" element.

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} : $${item.price}`;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeProduct(index);
    });
    li.appendChild(removeBtn);
    cartList.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = `${total}`;
}

// STEP 2: Function addProduct()
// Purpose: Add a new product to the cart from user inputs.
// STEP 2.1: Select the input element with id "product-name" and store its value.
// STEP 2.2: Select the input element with id "product-price" and store its value.
// STEP 2.3: Remove any extra spaces from the name using .trim().
// STEP 2.4:  Remove any extra spaces from the name using .trim().
// STEP 2.5: Check if name is not empty AND price is a valid number greater than 0.
// STEP 2.6: If the input is invalid:
// STEP 2.6.1: Show an alert message to the user saying "Please enter valid name and price."
// STEP 2.7: If the input is valid:
// STEP 2.7.1: Use push() to add the new product object (with name and price) to the cart array.
// STEP 2.7.2: Clear the name and price input fields.
// STEP 2.7.3: Save the updated cart array to localStorage using JSON.stringify().
// STEP 2.7.4: Call renderCart() to update the UI and show the new item.

function addProduct() {
  const productName = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");
  const name = productName.value.trim();
  const price = parseFloat(productPrice.value.trim());
  if (name && !isNaN(price) && price > 0) {
    cart.push({ name, price });
    productName.value = "";
    productPrice.value = "";
    localStorage.setItem("products", JSON.stringify(cart));
    renderCart();
  } else {
    alert("Please enter valid name and price");
  }
}

// STEP 3: Function removeProduct(index)
// Purpose: Remove a product from the cart.
// STEP 3.1: Remove the product at the specified index from the cart array using splice().
// STEP 3.2: Save the updated cart array to localStorage.
// STEP 3.3: Refresh the displayed cart by calling renderCart().

function removeProduct(index) {
  cart.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(cart));
  renderCart();
}

// STEP 4: Load saved cart from localStorage on page load
// STEP 4.1: When the page loads, get the "products" key from localStorage.
// STEP 4.2: If it exists, parse it and store it in the cart array.
// STEP 4.3: Call renderCart() to show the loaded items.

window.onload = function () {
  const savedCart = localStorage.getItem("products");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  renderCart();
};

// STEP 5: Create Clear Saved Cart button
// STEP 5.1: Create a button element with text "Clear Saved Cart".
// STEP 5.2: When clicked, remove the "products" key from localStorage.
// STEP 5.3: Set cart = [] to empty the cart.
// STEP 5.4: Call renderCart() to refresh the view.
// STEP 5.5: Append the button to the document body.

const clearSavedButton = document.createElement("button");
clearSavedButton.textContent = "Clear Saved Data";
clearSavedButton.onclick = function () {
  localStorage.removeItem("products");
  cart = [];
  renderCart();
};

document.body.appendChild(clearSavedButton);
