export function displayWeatherData(data, resultsDiv) {
  console.log(
    "Data received in displayWeatherData:",
    JSON.stringify(data, null, 2)
  );

  if (data && data.currentConditions) {
    try {
      resultsDiv.innerHTML = `
        <h2>Weather in ${data.resolvedAddress}</h2>
        <p><strong>Temperature:</strong> ${data.currentConditions.temp}°C</p>
        <p><strong>Weather:</strong> ${data.currentConditions.conditions}</p>
        <p><strong>Wind Speed:</strong> ${data.currentConditions.windspeed} km/h</p>
      `;
    } catch (error) {
      console.error("Error while setting innerHTML:", error);
      resultsDiv.innerHTML = "<p>Error displaying weather data.</p>";
    }
  } else if (data && data.days && data.days.length > 0) {
    const currentDay = data.days[0];
    try {
      resultsDiv.innerHTML = `
        <h2>Weather in ${data.resolvedAddress}</h2>
        <p><strong>Temperature:</strong> ${currentDay.temp}°C</p>
        <p><strong>Weather:</strong> ${currentDay.conditions}</p>
        <p><strong>Wind Speed:</strong> ${currentDay.windspeed} km/h</p>
      `;
    } catch (error) {
      console.error("Error while setting innerHTML:", error);
      resultsDiv.innerHTML = "<p>Error displaying weather data.</p>";
    }
  } else {
    console.error("Invalid data structure:", data);
    resultsDiv.innerHTML =
      "<p>No weather data available. Please try again.</p>";
  }
}
