// Open weather one call api
// API KEY b27d174b72113aa4b9e36f1b858b0248
var apiKey = "b27d174b72113aa4b9e36f1b858b0248";

var getResponse = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + apiKey);
}

getResponse();