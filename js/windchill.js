const temperature = +document.getElementById("weather-temperature")
  ?.textContent;
const windSpeed = +document.getElementById("weather-wind-speed")?.textContent;
const windChill = document.getElementById("weather-wind-chill");

const calculateWindChill = (t, s) => {
  return 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
};

if (windChill) {
  if (temperature <= 50 && windSpeed >= 3) {
    let wChill = Math.round(calculateWindChill(temperature, windSpeed));
    windChill.textContent = wChill;
  } else {
    windChill.textContent = "N/A";
  }
}
