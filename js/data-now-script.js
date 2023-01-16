const api = '67304f507360401b459cac226c809a10';
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('.location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const tempFeelC = document.querySelector('.rfc');
const tempFeelF = document.querySelector('.rff');
const tempMin = document.querySelector('.min');
const tempMax = document.querySelector('.max');
const timezone = document.querySelector('.timezone');
const atm = document.querySelector('.atm');
const humidity = document.querySelector('.humidity');
const windS = document.querySelector('.windS');
const windD = document.querySelector('.windD');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');
window.addEventListener('load', () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temp = data.main.temp;
        const tempRF = data.main.feels_like;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = (temp * 9) / 5 + 32;
        const fahrenheitRF = (tempRF * 9) / 5 + 32;
        const minTemp = data.main.temp_min;
        const maxTemp = data.main.temp_max;
        const atmosphericPressure = data.main.pressure;
        const humid = data.main.humidity;
        const windSpeed = data.wind.speed;
        const windDegree = data.wind.deg;
        iconImg.src = iconUrl;
        loc.textContent = `${place}`;
        desc.textContent = `${description}`;
        tempC.textContent = `${temp.toFixed(0)} °C`;
        tempF.textContent = `${fahrenheit.toFixed(0)} °F`;
        tempFeelC.textContent = `${tempRF.toFixed(0)} °C`;
        tempFeelF.textContent = `${fahrenheitRF.toFixed(0)} °F`;
        tempMin.textContent =`${minTemp.toFixed(0)} °C`;
        tempMax.textContent =`${maxTemp.toFixed(0)} °C`;
        
        windS.textContent = `${windSpeed} Km/H`;
        if((windDegree>=338&&windDegree<=360)||(windDegree>=0&&windDegree<=22)){
          windD.textContent = 'North';
        } else if (windDegree>=23&&windDegree<=67){
          windD.textContent = 'North-East';
        } else if (windDegree>=68&&windDegree<=112){
          windD.textContent = 'East';
        } else if (windDegree>=113&&windDegree<=157){
          windD.textContent = 'South-East';
        } else if (windDegree>=158&&windDegree<=202){
          windD.textContent = 'South';
        } else if (windDegree>=203&&windDegree<=247){
          windD.textContent = 'South-West';
        } else if (windDegree>=248&&windDegree<=292){
          windD.textContent = 'West';
        } else if (windDegree>=293&&windDegree<=337){
          windD.textContent = 'North-West';
        }
        atm.textContent = `${(atmosphericPressure*0.75).toFixed(0)} mmHg`;
        humidity.textContent = `${humid}%`;
      });
    });
  }
});