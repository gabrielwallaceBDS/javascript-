var paragraph = document.getElementById("text");

//fontFamlily
function myFunction() {
    var font = document.getElementById("select").value;

    switch (font) {
        case "arial":
            paragraph.style.fontFamily = "arial";
            break;
        case "monospace":
            paragraph.style.fontFamily = "monospace";
            break;
        case "georgia":
            paragraph.style.fontFamily = "georgia";
            break;
        case "default":
            paragraph.style.fontFamily = "";
            break;
    }
}

var black=document.getElementById("black");
var green=document.getElementById("green");
var blue=document.getElementById("blue");
var yellow=document.getElementById("yellow");

black.addEventListener('click', function () {
    paragraph.style.color = "black";
})
green.addEventListener('click', function () {
    paragraph.style.color = "green";
})
blue.addEventListener('click', function () {
    paragraph.style.color = "blue";
})
yellow.addEventListener('click', function () {
    paragraph.style.color = "yellow";
})