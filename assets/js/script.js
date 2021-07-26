// API START
var apiKey = "&appid=b27d174b72113aa4b9e36f1b858b0248";
var searchByCity = "https://api.openweathermap.org/data/2.5/weather?q=";
// 5 Day Forecast
var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
// API END

// converts units to imperial START
var apiUnits = "&units=imperial";
// converts units to inperial END

// Use moment.js to set current day START
var now = moment().format("MMMM Do YYYY");

// Use moment.js to set current day END

// weather report variables START
var cityNameEl = document.querySelector(".city-name");
var todayEl = document.querySelector(".today");
var setTempEl = document.querySelector(".set-temp");
var windSpeedEl = document.querySelector(".wind-speed");
var humidityEl = document.querySelector(".hum-perc");
// weather report variables END

// first day START
var dayOneDateEl = document.querySelector(".day-one-date");
var dayOneTempEl = document.querySelector(".day-one-temp");
var dayOneWindEl = document.querySelector(".day-one-wind");
var dayOneHumEl = document.querySelector(".day-one-hum");
// first day END

// second day START
var dayTwoDateEl = document.querySelector(".day-two");
var dayTwoTempEl = document.querySelector(".day-two-temp");
var dayTwoWindEl = document.querySelector(".day-two-wind");
var dayTwoHumEL = document.querySelector(".day-two-hum");
// second day END

// third day START
var dayThreeDateEl = document.querySelector(".day-three");
var dayThreeTempEl = document.querySelector(".day-three-temp");
var dayThreeWindEL = document.querySelector(".day-three-wind");
var dayThreeHumEl = document.querySelector(".day-three-hum");
// third day END

// fourth day START
var dayFourDateEl = document.querySelector(".day-four");
var dayFourTempEl = document.querySelector(".day-four-temp");
var dayFourWindEl = document.querySelector(".day-four-wind");
var dayFourHumEl = document.querySelector(".day-four-hum");
// fourth day END

// fifth day START
var dayFiveDateEl = document.querySelector(".day-five");
var dayFiveTempEl = document.querySelector(".day-five-temp");
var dayFiveWindEl = document.querySelector(".day-five-wind");
var dayFiveHumEl = document.querySelector(".day-five-hum");
// fifth day END

// Query Selectors START
var userFormEl = document.querySelector("#user-form");
var searchInputEl = document.querySelector("#search-item");
// Query Selectors END

// Logic for Weather Report START
var getWeatherData = function (searchTerm) {
  // format the weather api url
  var cityApiUrl = searchByCity + searchTerm + apiUnits + apiKey;

  // make a request to the url
  fetch(cityApiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        cityNameEl.innerHTML = searchTerm;
        todayEl.innerHTML = now;
        setTempEl.innerHTML = data["main"]["temp"];
        windSpeedEl.innerHTML = data["wind"]["speed"];
        humidityEl.innerHTML = data["main"]["humidity"];
      });
    } else {
      alert("You need to enter in a city found in the USA!");
    }
  });
};
// Logic for Weather Report END

// Logic for 5 Day Forecast START
var setFiveDayForecast = function (searchTerm) {
  // format the weather api url
  var fiveDayUrl = fiveDayForecast + searchTerm + apiUnits + apiKey;
  console.log(fiveDayForecast);

  // make request to the url
  fetch(fiveDayUrl).then(function (response) {
    // if request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        // set day one data START
        dayOneDateEl.innerHTML = moment().add(1, "days").format("MMMM Do YYYY");
        dayOneTempEl.innerHTML = data["list"]["0"]["main"]["temp"];
        dayOneWindEl.innerHTML = data["list"]["0"]["wind"]["speed"];
        dayOneHumEl.innerHTML = data["list"]["0"]["main"]["humidity"];
        // set day one data END

        // set day two data START
        dayTwoDateEl.innerHTML = moment().add(2, "days").format("MMMM Do YYYY");
        dayTwoTempEl.innerHTML = data["list"]["1"]["main"]["temp"];
        dayTwoWindEl.innerHTML = data["list"]["1"]["wind"]["speed"];
        dayTwoHumEL.innerHTML = data["list"]["1"]["main"]["humidity"];
        // set day two data END

        // set day three data START
        dayThreeDateEl.innerHTML = moment()
          .add(3, "days")
          .format("MMMM Do YYYY");
        dayThreeTempEl.innerHTML = data["list"]["2"]["main"]["temp"];
        dayThreeWindEL.innerHTML = data["list"]["2"]["wind"]["speed"];
        dayThreeHumEl.innerHTML = data["list"]["2"]["main"]["humidity"];
        // set day three data END

        // set day four data START
        dayFourDateEl.innerHTML = moment()
          .add(4, "days")
          .format("MMMM Do YYYY");
        dayFourTempEl.innerHTML = data["list"]["3"]["main"]["temp"];
        dayFourWindEl.innerHTML = data["list"]["3"]["wind"]["speed"];
        dayFourHumEl.innerHTML = data["list"]["3"]["main"]["humidity"];
        // set day four data END

        // set day five data START
        dayFiveDateEl.innerHTML = moment().add(5, "days").format("MMMM Do YYYY");
        dayFiveTempEl.innerHTML = data["list"]["4"]["main"]["temp"];
        dayFiveWindEl.innerHTML = data["list"]["4"]["wind"]["speed"];
        dayFiveHumEl.innerHTML = data["list"]["4"]["main"]["humidity"];
        // set day five data END

      });
    } else {
      console.log(response);
    }
  });
};
// Logic for 5 Day Forecast END

var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var searchTerm = searchInputEl.value.trim();

  if (searchTerm) {
    getWeatherData(searchTerm);
    setFiveDayForecast(searchTerm);
    searchInputEl.value = "";
  }
};

userFormEl.addEventListener("click", formSubmitHandler);
