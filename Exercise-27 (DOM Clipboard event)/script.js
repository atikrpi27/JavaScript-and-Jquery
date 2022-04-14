const InputSelector = document.querySelector("input");

InputSelector.addEventListener("copy", function(){
    console.log("You have copped!");
});

InputSelector.addEventListener("cut", function(){
    console.log("You have cutted!");
});

InputSelector.addEventListener("paste", function(){
    console.log("You have pasted!");
});