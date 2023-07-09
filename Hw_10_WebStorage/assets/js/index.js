const apiKey = '5cd93a29b6afbb3a318c29f818a18662';
const lat = '43.88090520422717'
const lon = '10.775427510032332'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};

function weatherRender(weatherObject) {
    document.querySelector('#weather').innerHTML = `<div class="card text-center w-50">
    <div class="card-body">
     <h5 class="card-title mb-3">${weatherObject.name}</h5>
     <div class="row justify-content-center">
      <div class="col-sm-1">
       <img src="http://openweathermap.org/img/w/${weatherObject.weather[0].icon}.png" alt="Weather Image">
      </div>
      <div class="col-sm-2">
       <h6>${weatherObject.main.temp}°C</h6>
       <p>${weatherObject.weather[0].description}</p>
      </div>
     </div>
    </div>
   </div>`
}

function getWeather(){
    const storageKey = 'for_weather';
    if (localStorage.getItem(storageKey) && document.cookie.includes(storageKey)) {
        weatherRender(JSON.parse(localStorage.getItem(storageKey)))
    } else {
        return fetch(apiUrl, options).then(response => response.json())
        .then(weatherJson => {
            weatherRender(weatherJson);
            localStorage.setItem(storageKey, JSON.stringify(weatherJson))
            document.cookie = `${storageKey}=true; expires=${new Date(Date.now() + 2 * (60 * 60 * 1000) )}; path=/`
        }) .catch(error => console.error(error));
    }
}
getWeather()