// Weather Forecast App
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").innerText = `📍 ${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp} °C`;
    document.getElementById("description").innerText = `☁ Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Error fetching weather data!");
  }
}
