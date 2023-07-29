const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cities = ["Calgary", "Toronto", "Halifax", "Winnipeg"];


const getCitiesWeather = () => {
  cities.forEach(city => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);


        document.getElementById(city.toLowerCase() + '_cloud_pct').textContent = response.cloud_pct;
        document.getElementById(city.toLowerCase() + '_feels_like').textContent = response.feels_like;
        document.getElementById(city.toLowerCase() + '_humidity').textContent = response.humidity;
        document.getElementById(city.toLowerCase() + '_max_temp').textContent = response.max_temp;
        document.getElementById(city.toLowerCase() + '_min_temp').textContent = response.min_temp;
        document.getElementById(city.toLowerCase() + '_sunrise').textContent = response.sunrise;
        document.getElementById(city.toLowerCase() + '_sunset').textContent = response.sunset;
        document.getElementById(city.toLowerCase() + '_temp').textContent = response.temp;
        document.getElementById(city.toLowerCase() + '_wind_degrees').textContent = response.wind_degrees;
        document.getElementById(city.toLowerCase() + '_wind_speed').textContent = response.wind_speed;
      })
      .catch(err => console.error(err));
  });
};


const getWeather = (city) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  cityName.innerHTML = city;

  fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);


      document.getElementById('cloud_pct').textContent = response.cloud_pct;
      document.getElementById('feels_like').textContent = response.feels_like;
      document.getElementById('humidity').textContent = response.humidity;
      document.getElementById('max_temp').textContent = response.max_temp;
      document.getElementById('min_temp').textContent = response.min_temp;
      document.getElementById('sunrise').textContent = response.sunrise;
      document.getElementById('sunset').textContent = response.sunset;
      document.getElementById('temp').textContent = response.temp;
      document.getElementById('wind_degrees').textContent = response.wind_degrees;
      document.getElementById('wind_speed').textContent = response.wind_speed;
    })
    .catch(err => console.error(err));
};


getWeather("Vancouver");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});


getCitiesWeather();








