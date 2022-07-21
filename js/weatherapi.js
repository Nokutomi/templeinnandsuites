// select HTML elements to edit
const currentTemp = document.querySelector("#weather-temperature");
const speedWind = document.querySelector("#weather-wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-condition");
const humidityDesc = document.querySelector("#weather-humidity");

const url =
  "https://api.openweathermap.org/data/2.5/weather?id=4348599&units=imperial&appid=462a7178d36c51e0635a903f65415fe0";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)} ºF</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    humidityDesc.textContent = `${data.main.humidity} %`;
    speedWind.textContent = data.wind.speed
  });

// Forecast
const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&exclude=hourly,minutely&units=imperial&appid=462a7178d36c51e0635a903f65415fe0"; 

fetch(forecastUrl)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data); // this is temporary for development only
    // just to test Government Alerts
    // data.alerts = [
    //     {
    //       "sender_name": "NWS Tulsa",
    //       "event": "Heat Advisory",
    //       "start": 1597341600,
    //       "end": 1597366800,
    //       "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
    //       "tags": [
    //         "Extreme temperature value"
    //         ]
    //     }
    //   ]
    showForecastAndAlert(data)

  });


function showForecastAndAlert(data) {
  const dayOfWeek = currentDate.getDay()
  const headerAlert = document.querySelector("#header-alert")
  const headerMsg = document.querySelector("#header-msg")
  const headerMsgBtn = document.querySelector("#header-msg-btn")
    
  if (data.alerts) {
    headerAlert.classList.add("showme")
    headerMsg.textContent = data.alerts[0].description
    headerMsgBtn.addEventListener('click', () => headerAlert.classList.add("hideme"))
  } else {
    headerAlert.classList.add("hideme")
  }

  const fore1 = document.querySelector("#fore1")
  const fore2 = document.querySelector("#fore2")
  const fore3 = document.querySelector("#fore3")

  const foreElem = [fore1, fore2, fore3]
  for (let i = 1; i < 4; i++) {
    let dayTemp = `<strong>${data.daily[i].temp.day.toFixed(0)} ºF</strong>`
    data.daily[i].temp.day
    let currentDay = (currentDate.getDay() + i) % 7
    let weekDay = weekday[currentDay]
    let iconsrc = `https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`;
    let desc = data.daily[i].weather[0].description;
    addForecast(foreElem[i-1], dayTemp, weekDay, iconsrc, desc)
  }
}

function addForecast (foreElem, temp, day, src, desc) {
  foreElem.innerHTML = `
  <div class="fore-day">
    ${day}
  </div>
  <div class="forecast">
    <img class="forecast-icon" src="${src}" alt="${desc}" width="30" height="30" />
    <p class="forecast-temperature">${temp}</p>
  </div>`
}
