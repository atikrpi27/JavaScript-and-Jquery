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

function button4(){
    var txt1 = document.querySelector("#pid1");
    txt1.innerHTML = (prompt("Write Your Says: "));
}

var pic = document.querySelector("#mypic");
function aimg(){
    pic.src = "atik.jpg";
}

function nimg(){
    pic.src = "Shamim.jpg";
}