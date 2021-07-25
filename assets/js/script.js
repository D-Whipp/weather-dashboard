var apiKey = "&appid=b27d174b72113aa4b9e36f1b858b0248";
var apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily";

var apiCityCall = "api.openweathermap.org/data/2.5/weather?q=";

// Query Selectors
var userFormEl = document.querySelector("#user-form");
var searchInputEl = document.querySelector("#search-item");

var getWeatherData = function (searchTerm) {
  // format the weather api url
  var cityApiUrl = apiCityCall + searchTerm + apiKey;
  
  // make a request to the url
  fetch(cityApiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      })
    }
  })
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
