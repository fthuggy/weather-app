// ui.js
export function displayWeatherData(data, resultsDiv) {
  resultsDiv.innerHTML = `
      <h2>Weather in ${data.address}</h2>
      <p><strong>Temperature:</strong> ${data.currentConditions.temp}°C</p>
      <p><strong>Weather:</strong> ${data.currentConditions.conditions}</p>
      <p><strong>Wind Speed:</strong> ${data.currentConditions.windspeed} km/h</p>
    `;
}

export function showError(message, errorDiv) {
  errorDiv.textContent = message;
}
