// Step 1: Wait for the page to load using DOMContentLoaded
// Step 2: Select necessary elements from the DOM
// Step 3: Add a click event listener to the button
// Step 4: Inside the event handler, use axios.get() to fetch data from the API - "https://api.chucknorris.io/jokes/random"
// Step 5: Use .then() to handle success and display data on screen
// Step 6: Use .catch() to handle any errors

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const actionBtn = document.getElementById("actionBtn");

  actionBtn.addEventListener("click", () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        app.innerText = response.data.value;
      })

      .catch((error) => {
        app.innerText = "failed to fetch, something went wrong";
        console.error(error);
      });
  });
});
