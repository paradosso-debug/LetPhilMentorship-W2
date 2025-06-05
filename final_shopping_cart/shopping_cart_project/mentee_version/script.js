// STEP 0: Initialize the shopping cart array (cart) to store products.

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
function renderCart() {}

// STEP 2: Function addProduct()
// Purpose: Add a new product to the cart from user inputs.
// STEP 2.1: Get the product name input from the user ("product-name").
// STEP 2.2: Get the product price input from the user ("product-price").
// STEP 2.3: Clean extra spaces from the product name.
// STEP 2.4: Convert the input price from text to a number.
// STEP 2.5: Check product name and price validity:
// STEP 2.5.1: Add valid product details (name and price) to cart.
// STEP 2.5.2: Clear both product name and price input fields.
// STEP 2.5.3: Refresh the displayed cart by calling renderCart().
function addProduct() {}

// STEP 3: Function removeProduct(index)
// Purpose: Remove a product from the cart.
// STEP 3.1: Remove the product at the specified index from the cart array.
// STEP 3.2: Refresh the displayed cart by calling renderCart().
function removeProduct(index) {}

// STEP 4: Initial call to renderCart() when page first loads to set initial cart display.
