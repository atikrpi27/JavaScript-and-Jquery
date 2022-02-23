//Event Handeler

function button1(){
    alert("This is Button 1")
}

function button2(){
    alert("This is Button 2")
}

function button3(){
    var txt = document.querySelector("#pid");
    txt.innerHTML = ("You are clicked on Button 3.")
}

var pic = document.querySelector("#mypic");
function aimg(){
    pic.src = "atik.jpg";
}

function nimg(){
    pic.src = "Shamim.jpg";
}