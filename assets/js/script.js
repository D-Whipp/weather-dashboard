var apiKey = "&appid=b27d174b72113aa4b9e36f1b858b0248";
var searchByCity = "https://api.openweathermap.org/data/2.5/weather?q=";
// converts units to imperial
var apiUnits = "&units=imperial";
var now = moment().format("MMMM Do YYYY");

// weather report variables START
var cityNameEl = document.querySelector(".city-name");
var todayEl = document.querySelector(".today");
var setTempEl = document.querySelector(".set-temp");
var windSpeedEl = document.querySelector(".wind-speed");
var humidityEl = document.querySelector(".hum-perc");
// weather report variables END

// Query Selectors START
var userFormEl = document.querySelector("#user-form");
var searchInputEl = document.querySelector("#search-item");
// Query Selectors END

var getWeatherData = function (searchTerm) {
  // format the weather api url
  var cityApiUrl = searchByCity + searchTerm + apiUnits + apiKey;

  // make a request to the url
  fetch(cityApiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        cityNameEl.innerHTML = searchTerm;
        todayEl.innerHTML = now;
        setTempEl.innerHTML = data["main"]["temp"];
        windSpeedEl.innerHTML = data['wind']['speed'];
        humidityEl.innerHTML = data['main']['humidity'];
      });
    } else {
      alert("You need to enter in a city found in the USA!");
    }
  });
};

var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var searchTerm = searchInputEl.value.trim();

  if (searchTerm) {
    getWeatherData(searchTerm);
    searchInputEl.value = "";
  }
};

userFormEl.addEventListener("click", formSubmitHandler);
