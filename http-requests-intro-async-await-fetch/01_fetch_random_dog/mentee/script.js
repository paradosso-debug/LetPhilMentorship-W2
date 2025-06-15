// STEP 1: Add an event listener for DOMContentLoaded to ensure HTML is loaded

// STEP 2: Select HTML elements (image and button) using document.getElementById()
// STEP 3: Define an asynchronous function to fetch a random dog image from Dog CEO API
// STEP 4: Inside the async function, fetch and await response from https://dog.ceo/api/breeds/image/random
// STEP 5: Convert the response to JSON using await response.json()
// STEP 6: Update the image src attribute with the fetched dog image URL
// STEP 7: Add error handling to log any fetch errors
// STEP 8: Add a click event listener to the button to fetch a new dog image each click
// STEP 9: Call the function once when the page loads to display an initial dog image

document.addEventListener("DOMContentLoaded", () => {
  const dogImage = document.getElementById("dogImage");
  const fetchBtn = document.getElementById("fetchDog");

  fetchBtn.addEventListener("click", fetchDogImage);

  async function fetchDogImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      dogImage.src = data.message;
    } catch (e) {
      console.error(`ERROR: ${e}`);
    }
  }

  fetchDogImage();
});
