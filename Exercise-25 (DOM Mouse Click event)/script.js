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