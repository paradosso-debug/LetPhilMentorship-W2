// ===============================
// JavaScript: Crypto Chart App
// ===============================
// STEP 1: Create an Axios instance with a base URL
// This helps us avoid repeating the full URL each time
// STEP 2: Define the coins we want to track
// We’ll fetch data for each of these coins
// STEP 3: Function to create a chart using Chart.js
// - Takes Chart, coinId, labels, data, and symbol
// - Creates a <canvas> element dynamically
// - Uses Chart.js to draw the graph
// STEP 4: Function to fetch and display charts
// - Shows loader while data is loading
// - Uses Promise.all to fetch prices for all coins at once
// - Maps data to time labels and prices
// STEP 5: Create a chart for each coin
// STEP 6: Run the charts and refresh every 10 seconds

const api = axios.create({
  baseURL: "https://coinbase.com/api/v2/assets/prices",
});

const coins = ["bitcoin", "ethereum"];

function createChart(Chart, coinId, labels, data, symbol) {
  const chartSection = document.getElementById("chartSection");
  const canvas = document.createElement("canvas");
  canvas.id = coinId;
  chartSection.appendChild(canvas);

  new Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: `${symbol}, Amount`,
          data: data,
          borderColor: "blue",
          backgroundColor: "white",
          borderWidth: 2,
          fill: true,
        },
      ],
      options: { responsive: true },
    },
  });
}
