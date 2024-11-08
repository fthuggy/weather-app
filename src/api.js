export async function fetchWeatherData(city, apiKey) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;

  console.log("API Request URL:", url);

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched from API:", JSON.stringify(data, null, 2));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
