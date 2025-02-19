//console.log("hello world");
import "./style.css";
import sunnyDayImage from "./images/sunnyday.png";
import { fetchWeatherData } from "./api.js";
import { displayWeatherData } from "./ui.js";

const imgElement = document.createElement("img");
imgElement.src = sunnyDayImage;
imgElement.alt = "sun-clouds";
imgElement.classList.add("bottom-right-image");
document.body.appendChild(imgElement);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const cityInput = document.querySelector("#cityInput");
  const resultsDiv = document.querySelector("#results");
  const errorDiv = document.querySelector("#error");

  function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.color = "red";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    const apiKey = "S23R4ST34PUCDKLA4BKRV9ESU";

    try {
      const data = await fetchWeatherData(city, apiKey);
      console.log("Data received in index.js:", data);
      if (data) {
        displayWeatherData(data, resultsDiv);
        showError("");
      } else {
        showError("No weather data found for the specified city.");
      }
    } catch (error) {
      console.error("Error in index.js:", error);
      showError("Sorry, we couldn't find the weather data. Please try again.");
      resultsDiv.innerHTML = "";
    }
  });
});
