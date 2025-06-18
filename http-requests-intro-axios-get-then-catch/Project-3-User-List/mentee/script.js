// Step 1: Wait for the page to load using DOMContentLoaded
// Step 2: Select the button and container where users will be shown
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("actionBtn");
  const app = document.getElementById("app");
  button.addEventListener("click", () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        const data = response.data.results
          .map((user) => `<p>${user.name.first} ${user.name.last}</p>`)
          .join("");
        app.innerHTML = data;
        // console.log(response.data.results);
      })
      .catch((error) => {
        app.innerText = "Failed to access data";
        console.error(error);
      });
  });
});

// Step 3: Add a click event to trigger the data fetch
// Step 4: Use axios.get() to request user data from the API - "https://randomuser.me/api/?results=5"
// Step 5: Display the names of users in the container
// Step 6: Show an error message if something goes wrong
