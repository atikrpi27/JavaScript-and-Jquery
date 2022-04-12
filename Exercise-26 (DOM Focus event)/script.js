const Inputfocus = document.querySelector("input");

Inputfocus.addEventListener("blur", function(e){
    // console.log("Blur Event is occured.");
    Inputfocus.style.backgroundColor = "white";
    Inputfocus.value = e.target.value.toUpperCase();
});

Inputfocus.addEventListener("focus", function(){
    // console.log("Focus Event is occured.");
    Inputfocus.style.backgroundColor = "Yellow";
});

Inputfocus.addEventListener("focusin", function(){
    console.log("FocusIn Event is occured.");
});

Inputfocus.addEventListener("focusout", function(){
    console.log("FocusOut Event is occured.");
});