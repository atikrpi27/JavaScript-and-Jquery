const Inputfocus = document.querySelector("input");

Inputfocus.addEventListener("blur", function(){
    console.log("Blur Event is occured.");
});

Inputfocus.addEventListener("focus", function(){
    console.log("Focus Event is occured.");
});

Inputfocus.addEventListener("focusin", function(){
    console.log("FocusIn Event is occured.");
});

Inputfocus.addEventListener("focusout", function(){
    console.log("FocusOut Event is occured.");
});