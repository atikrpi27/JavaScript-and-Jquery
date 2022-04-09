const Inputfocus = document.querySelector("input");

Inputfocus.addEventListener("blur", function(){
    console.log("Blur Event is occured.");
});

Inputfocus.addEventListener("focus", function(){
    console.log("Focus Event is occured.");
});