let cityInput = document.getElementById('city');
let cityHistory = document.querySelector('.cList');
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    let newCity = cityInput.textContent;
    cityHistory.appendChild(newCity);
});