var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

//hover
p1.addEventListener("mouseover", function(){
    p1.classList.add("p1");
})


//hover Out
p1.addEventListener("mouseout", hoverout);

function hoverout(){
    p1.classList.remove("p1");
}

//Click event
p2.addEventListener("click", function(){
    alert("This is Click Event Listener")
})

//mouseover

p2.addEventListener("mouseover",function(){
    p2.classList.add("h2");
})

//mouseout

p2.addEventListener("mouseout", out);

function out(){
    p2.classList.remove("h2");
}

//Multiple Event Listener
var txtLen = document.querySelectorAll(".myBtn").length
for (i=0; i<txtLen; i++){
document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){
    var txt = this.innerHTML;
    document.querySelector("h1").innerHTML = (txt + "is Clicked.");
})
}