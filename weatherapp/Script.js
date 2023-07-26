const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cities = ["Calgary", "Toronto", "Halifax", "Winnipeg"];

// Function to get weather data for specific cities and display them in columns
const getCitiesWeather = () => {
  cities.forEach(city => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
  
        // Update the elements for the current city in the table
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

// Function to get weather data for searched city and display in cards
const getWeather = (city) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  cityName.innerHTML = city;

  fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
  
      // Update the elements for the current city in the cards
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

// Set default city to Vancouver for the cards
getWeather("Vancouver");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});

// Fetch weather data for the specific cities when the page loads
getCitiesWeather();




// const options = {
//   method: 'GET',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// const cities = ["Calgary", "Toronto", "Halifax", "Winnipeg"];

// // Function to get weather data for specific cities and display them in columns
// const getCitiesWeather = () => {
//   cities.forEach(city => {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
//     fetch(url, options)
//       .then(response => response.json())
//       .then((response) => {
//         console.log(response);
  
//         // Update the elements for the current city in the table
//         document.getElementById(city.toLowerCase() + '_cloud_pct').textContent = response.cloud_pct;
//         document.getElementById(city.toLowerCase() + '_feels_like').textContent = response.feels_like;
//         document.getElementById(city.toLowerCase() + '_humidity').textContent = response.humidity;
//         document.getElementById(city.toLowerCase() + '_max_temp').textContent = response.max_temp;
//         document.getElementById(city.toLowerCase() + '_min_temp').textContent = response.min_temp;
//         document.getElementById(city.toLowerCase() + '_sunrise').textContent = response.sunrise;
//         document.getElementById(city.toLowerCase() + '_sunset').textContent = response.sunset;
//         document.getElementById(city.toLowerCase() + '_temp').textContent = response.temp;
//         document.getElementById(city.toLowerCase() + '_wind_degrees').textContent = response.wind_degrees;
//         document.getElementById(city.toLowerCase() + '_wind_speed').textContent = response.wind_speed;
//       })
//       .catch(err => console.error(err));
//   });
// };

// // Function to get weather data for searched city and display in cards
// const getWeather = (city) => {
//   const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
//   cityName.innerHTML = city;

//   fetch(url, options)
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response);
  
//       // Update the elements for the current city in the cards
//       document.getElementById('cloud_pct').textContent = response.cloud_pct;
//       document.getElementById('feels_like').textContent = response.feels_like;
//       document.getElementById('humidity').textContent = response.humidity;
//       document.getElementById('max_temp').textContent = response.max_temp;
//       document.getElementById('min_temp').textContent = response.min_temp;
//       document.getElementById('sunrise').textContent = response.sunrise;
//       document.getElementById('sunset').textContent = response.sunset;
//       document.getElementById('temp').textContent = response.temp;
//       document.getElementById('wind_degrees').textContent = response.wind_degrees;
//       document.getElementById('wind_speed').textContent = response.wind_speed;
//     })
//     .catch(err => console.error(err));
// };

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const cityValue = city.value;
//   getWeather(cityValue);
// });

// // Fetch weather data for the specific cities when the page loads
// getCitiesWeather();




// const options = {
//   method: 'GET',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// const cities = ["Vancouver", "Calgary", "Toronto", "Halifax", "Winnipeg"];

// const getWeather = (city) => {
//   const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

//   cityName.innerHTML = city;
//   fetch(url, options)
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response);

//       // Update the elements for the current city
//       document.getElementById(city.toLowerCase() + '_cloud_pct').textContent = response.cloud_pct;
//       document.getElementById(city.toLowerCase() + '_feels_like').textContent = response.feels_like;
//       document.getElementById(city.toLowerCase() + '_humidity').textContent = response.humidity;
//       document.getElementById(city.toLowerCase() + '_max_temp').textContent = response.max_temp;
//       document.getElementById(city.toLowerCase() + '_min_temp').textContent = response.min_temp;
//       document.getElementById(city.toLowerCase() + '_sunrise').textContent = response.sunrise;
//       document.getElementById(city.toLowerCase() + '_sunset').textContent = response.sunset;
//       document.getElementById(city.toLowerCase() + '_temp').textContent = response.temp;
//       document.getElementById(city.toLowerCase() + '_wind_degrees').textContent = response.wind_degrees;
//       document.getElementById(city.toLowerCase() + '_wind_speed').textContent = response.wind_speed;
//     })
//     .catch(err => console.error(err));
// };

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const cityValue = city.value;
//   getWeather(cityValue);
// });

// // Fetch weather data for all cities when the page loads
// cities.forEach(city => getWeather(city));










// const options = {
//   method: 'GET',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// const getWeather = (city) => {
//   const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

//   cityName.innerHTML = city;
//   fetch(url, options)
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response);


//       cloud_pct.innerHTML = response.cloud_pct;
//       feels_like.innerHTML = response.feels_like;
//       humidity.innerHTML = response.humidity;
//       max_temp.innerHTML = response.max_temp;
//       min_temp.innerHTML = response.min_temp;
//       sunrise.innerHTML = response.sunrise;
//       sunset.innerHTML = response.sunset;
//       temp.innerHTML = response.temp;
//       wind_degrees.innerHTML = response.wind_degrees;
//       wind_speed.innerHTML = response.wind_speed;


//       document.getElementById('calgary_cloud_pct').textContent = response.cloud_pct;
//       document.getElementById('calgary_feels_like').textContent = response.feels_like;
//       document.getElementById('calgary_humidity').textContent = response.humidity;
//       document.getElementById('calgary_max_temp').textContent = response.max_temp;
//       document.getElementById('calgary_min_temp').textContent = response.min_temp;
//       document.getElementById('calgary_sunrise').textContent = response.sunrise;
//       document.getElementById('calgary_sunset').textContent = response.sunset;
//       document.getElementById('calgary_temp').textContent = response.temp;
//       document.getElementById('calgary_wind_degrees').textContent = response.wind_degrees;
//       document.getElementById('calgary_wind_speed').textContent = response.wind_speed;

//       document.getElementById('toronto_cloud_pct').textContent = response.cloud_pct;
//       document.getElementById('toronto_feels_like').textContent = response.feels_like;
//       document.getElementById('toronto_humidity').textContent = response.humidity;
//       document.getElementById('toronto_max_temp').textContent = response.max_temp;
//       document.getElementById('toronto_min_temp').textContent = response.min_temp;
//       document.getElementById('toronto_sunrise').textContent = response.sunrise;
//       document.getElementById('toronto_sunset').textContent = response.sunset;
//       document.getElementById('toronto_temp').textContent = response.temp;
//       document.getElementById('toronto_wind_degrees').textContent = response.wind_degrees;
//       document.getElementById('toronto_wind_speed').textContent = response.wind_speed;

//       document.getElementById('halifax_cloud_pct').textContent = response.cloud_pct;
//       document.getElementById('halifax_feels_like').textContent = response.feels_like;
//       document.getElementById('halifax_humidity').textContent = response.humidity;
//       document.getElementById('halifax_max_temp').textContent = response.max_temp;
//       document.getElementById('halifax_min_temp').textContent = response.min_temp;
//       document.getElementById('halifax_sunrise').textContent = response.sunrise;
//       document.getElementById('halifax_sunset').textContent = response.sunset;
//       document.getElementById('halifax_temp').textContent = response.temp;
//       document.getElementById('halifax_wind_degrees').textContent = response.wind_degrees;
//       document.getElementById('halifax_wind_speed').textContent = response.wind_speed;

//       document.getElementById('win_cloud_pct').textContent = response.cloud_pct;
//       document.getElementById('win_feels_like').textContent = response.feels_like;
//       document.getElementById('win_humidity').textContent = response.humidity;
//       document.getElementById('win_max_temp').textContent = response.max_temp;
//       document.getElementById('win_min_temp').textContent = response.min_temp;
//       document.getElementById('win_sunrise').textContent = response.sunrise;
//       document.getElementById('win_sunset').textContent = response.sunset;
//       document.getElementById('win_temp').textContent = response.temp;
//       document.getElementById('win_wind_degrees').textContent = response.wind_degrees;
//       document.getElementById('win_wind_speed').textContent = response.wind_speed;


//     })
//     .catch(err => console.error(err));
// };

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const cityValue = city.value;
//   getWeather(cityValue);
// });


// getWeather("Vancouver");




