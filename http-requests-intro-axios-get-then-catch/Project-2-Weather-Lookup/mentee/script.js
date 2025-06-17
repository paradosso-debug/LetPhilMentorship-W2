// Step 1: Wait for the page to load using DOMContentLoaded
// Step 2: Select input, button, and output container from the DOM
// Step 3: Add a click event listener to the button
// Step 4: Read the user’s city input and validate it
// Step 5: Use axios.get() to fetch weather data from `https://wttr.in/${city}?format=j1`
// Step 6: Display the current temperature in Celsius
// Step 7: Handle any errors gracefully

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const btn = document.getElementById("actionBtn");
  const userInput = document.getElementById("userInput");

  btn.addEventListener("click", () => {
    const city = userInput.value.trim();
    if (!city) {
      app.innerText = "Please check your entered city.";
      return;
    }
    axios
      .get(`https://wttr.in/${city}?format=j1`)
      .then((response) => {
        const temp = response.data.current_condition[0].temp_C;
        app.innerText = `Current tempeture in ${city}: ${temp}°C`;
      })
      .catch((error) => {
        app.innerText = "Weather data could not be fetched.";
        console.error("Something went wrong", error);
      });
  });
});
