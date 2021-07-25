var cityName =
  "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
var apiKey = "b27d174b72113aa4b9e36f1b858b0248";
var apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily&appid=";

// Query Selectors
var userFormEl = document.querySelector("#user-form");
var searchInputEl = document.querySelector("#search-item");


var getResponse = function () {
  fetch(apiURL + apiKey).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var searchTerm = searchInputEl.value.trim();
  console.log(searchTerm);
};

getResponse();
userFormEl.addEventListener("click", formSubmitHandler);
