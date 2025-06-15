// STEP 1: Add DOMContentLoaded event listener to wait for HTML load
// STEP 2: Select input, button, and output container using document.getElementById()
// STEP 3: Define async function to fetch country data from REST Countries API
// STEP 4: Get user input, trim whitespace, and validate input
// STEP 5: Fetch data from https://restcountries.com/v3.1/name/{country}
// STEP 6: Await response and convert to JSON
// STEP 7: Display country's name, capital, and population clearly in the output
// STEP 8: Handle errors gracefully by displaying "Country not found."
// STEP 9: Add event listener to button to execute function when clicked

document.addEventListener("DOMContentLoaded", () => {
  const countryInput = document.getElementById("countryInput");
  const searchBtn = document.getElementById("searchBtn");
  const output = document.getElementById("output");
  async function fetchCountryData() {
    const userInput = countryInput.value.trim();
    if (!userInput) return;
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${userInput}`
      );
      const data = await res.json();
      const country = data[0];
      output.innerHTML = `<h2>Name: ${country.name.common}</h2><p>capital: ${
        country.capital[0]
      }</p><p>population: ${country.population.toLocaleString()}</p>`;
    } catch (error) {
      output.innerText = "Not Found";
      console.error(error);
    }
  }
  searchBtn.addEventListener("click", fetchCountryData);
});
