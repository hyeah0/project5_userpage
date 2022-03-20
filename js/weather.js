const API_KEY = "3ed481d921c911b0ed56678d54b0814d";


function onGPS(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3ed481d921c911b0ed56678d54b0814d&units=metric`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const weatherLocation = document.querySelector(".weather-location");
            const nowWeather = document.querySelector(".weather-now");

            weatherLocation.innerHTML = data.name;
            nowWeather.innerHTML =  data.weather[0].main;
        });

    console.log(`lat : ${lat} lag : ${lon} `)
    console.log(URL);
}
function errorGPS(){
    weatherDiv.innerHTML = "Can't fine you."
}

navigator.geolocation.getCurrentPosition(onGPS, errorGPS);

