//console.log("hello world");
// index.js
import { fetchWeatherData } from "./api.js";
import { displayWeatherData } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const cityInput = document.querySelector("#cityInput");
  const resultsDiv = document.querySelector("#results");
  const errorDiv = document.querySelector("#error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    const apiKey = "S23R4ST34PUCDKLA4BKRV9ESU";

    if (city) {
      try {
        const data = await fetchWeatherData(city, apiKey);
        displayWeatherData(data, resultsDiv);
        showError("", errorDiv);
      } catch (error) {
        showError(
          "Sorry, we couldn't find the weather data. Please try again.",
          errorDiv
        );
        resultsDiv.innerHTML = "";
      }
    } else {
      showError("Please enter a city name.", errorDiv);
      resultsDiv.innerHTML = "";
    }
  });
});
