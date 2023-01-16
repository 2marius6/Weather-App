const temp1 = document.querySelector('.temp1');
const tempArray = [document.querySelector('.temp1'), document.querySelector('.temp2'), document.querySelector('.temp3'), document.querySelector('.temp4'), document.querySelector('.temp5'), document.querySelector('.temp6')];
const timeArray = [document.querySelector('.time1'), document.querySelector('.time2'), document.querySelector('.time3'), document.querySelector('.time4'), document.querySelector('.time5'), document.querySelector('.time6')];
window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
        fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            for(var i=0; i<6; i++){
                const tempFor = data.list[i].main.temp;
                const time = data.list[i].dt;
                var date = new Date(time * 1000);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                timeArray[i].textContent = hours + ':' + minutes;
                tempArray[i].textContent = `${tempFor.toFixed(0)} °C`;
            }
        });
      });
    }
  });