//using Javascript

document.querySelector("h1").innerHTML="Hi Atik!"

//eventListner
/*============= Select Button and add text ===========*/
let btn = document.querySelector(".myBtn1")
btn.addEventListener("click",function(){
    document.querySelector("h1").innerHTML="You have clicked On button 1 using Javascript."
})

/*============= Select Button and add text with Button ID ===========*/
var totalBtn = document.querySelectorAll(".myBtn").length

for(i=0; i<totalBtn; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click",function(){
        var btnValue = this.innerHTML;
        document.querySelector("h2").innerHTML = btnValue + " is Clicked by Javascript."
    })
}




//using JQurey

$("h2").text("This is JavaScript Demo.")

//eventListner
/*============= Select Button and add text ===========*/
$(".myBtn2").click(function(){
    $("h1").text("You have clicked On button 2 using JQurey")
})

/*============= Select Button and add text with Button ID ===========*/
document.querySelector("h3").style.visibility = "visible"
$(".myBtn").click(function(){
    var btnValue = this.innerHTML
    $("h3").text(btnValue + " is clicked by JQurey")
})