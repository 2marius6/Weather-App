function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hour = update(hour);
    minute = update(minute);
    second = update(second);
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