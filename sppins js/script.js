function magicWheel() {
    var x = 1024;
    var b = 9999;
    var dgre = Math.floor(Math.random() * (x - b)) + b;
    document.getElementById('sa').style.transform = "rotate(" + dgre + "deg)";
}