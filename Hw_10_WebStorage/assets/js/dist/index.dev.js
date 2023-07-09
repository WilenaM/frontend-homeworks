"use strict";

var apiKey = '5cd93a29b6afbb3a318c29f818a18662';
var lat = '43.88090520422717';
var lon = '10.775427510032332';
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(apiKey, "&units=metric");
var options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

function weatherRender(weatherObject) {
  document.querySelector('#weather').innerHTML = "<div class=\"card text-center w-50\">\n    <div class=\"card-body\">\n     <h5 class=\"card-title mb-3\">".concat(weatherObject.name, "</h5>\n     <div class=\"row justify-content-center\">\n      <div class=\"col-sm-1\">\n       <img src=\"http://openweathermap.org/img/w/").concat(weatherObject.weather[0].icon, ".png\" alt=\"Weather Image\">\n      </div>\n      <div class=\"col-sm-2\">\n       <h6>").concat(weatherObject.main.temp, "\xB0C</h6>\n       <p>").concat(weatherObject.weather[0].description, "</p>\n      </div>\n     </div>\n    </div>\n   </div>");
}

function getWeather() {
  var storageKey = 'for_weather';

  if (localStorage.getItem(storageKey) && document.cookie.includes(storageKey)) {
    weatherRender(JSON.parse(localStorage.getItem(storageKey)));
  } else {
    return fetch(apiUrl, options).then(function (response) {
      return response.json();
    }).then(function (weatherJson) {
      weatherRender(weatherJson);
      localStorage.setItem(storageKey, JSON.stringify(weatherJson));
      document.cookie = "".concat(storageKey, "=true; expires=").concat(new Date(Date.now() + 2 * (60 * 60 * 1000)), "; path=/");
    })["catch"](function (error) {
      return console.error(error);
    });
  }
}

getWeather();