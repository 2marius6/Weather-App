function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    var hourNumber = Number(hour);
    if(hourNumber > 16 && hourNumber <= 17){
        document.body.style.background = 'url(bckgrd/sunset.jpg)';
    } else if(hourNumber >= 07 && hourNumber <= 08){
        document.body.style.background = 'url(bckgrd/sunrise.jpg)';
    } else if(hourNumber > 08 && hourNumber <= 16){
        document.body.style.background = 'url(bckgrd/day.jpg)';
    } else document.body.style.background = 'url(bckgrd/night.jpg)';
    document.getElementById("clock").innerText = hour + ":" + minute + ":" + second;
    setTimeout(Time, 1000);
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }else {
        return t;
    }
}

Time();