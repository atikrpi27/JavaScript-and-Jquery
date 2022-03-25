var div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("Click Event is occured.");
});

div.addEventListener("dblclick", function(){
    console.log("Dobule Click Event is occured.");
});

div.addEventListener("mouseup", function(){
    console.log("Mouseup Event is occured.");
});

div.addEventListener("mousedown", function(){
    console.log("Mousedown Event is occured.");
});

div.addEventListener("mouseenter", function(){
    console.log("Mouse Enter Event is occured.");
});

div.addEventListener("mouseleave", function(){
    console.log("Mouse leave Event is occured.");
});


//mapping function

const button = document.querySelectorAll(".btn");

Array.from(button).map((buttons) => {
    buttons.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});