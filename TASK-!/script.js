async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"63a90ae96d390ec37d6c1252f5a86e1a"}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>❌ ${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠️ Error fetching data</p>`;
  }
}
