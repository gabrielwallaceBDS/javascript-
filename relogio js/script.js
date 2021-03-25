function currentTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById('hour').innerHTML = hour + ":";
    document.getElementById('minute').innerHTML = minute + ":";
    document.getElementById('second').innerHTML = second;
}
//currentTime();
setInterval(currentTime);