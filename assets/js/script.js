//OpenWeather API key.
const apiKey = '0ae21afd402b86cc39119d34076f8b0';


function openWeatherInput (city) {
    if (city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }
}


let cityInput = document.getElementById('city');
let cityHistory = document.querySelector('.cList');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    let newCity = cityInput.textContent;
    cityHistory.appendChild(newCity);
});