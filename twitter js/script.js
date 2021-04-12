const inputtext = document.getElementById("inputta");
const maxlength = 280;

inputtext.onkeyup = () => {
    const counter = inputtext.value.length;
    document.getElementById("characters").innerHTML = counter;
}











//length
/*var name = "gabriel";
console.log(name.length);

//function
let add = function (x, y) {
    return x * y;
}
console.log(add(4, 4));
//arrow
let ad = (x, y) => { return x * y }
console.log(add(6, 6));


//event onkeyup
function hello() {
    var x = document.getElementById("name");
    x.value = x.value.topUpperCase();
}*/