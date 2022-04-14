const InputSelector = document.querySelector("input");
const PeragraphSelector = document.querySelector("p");

InputSelector.addEventListener("copy", function(){
    console.log("You have copped!");
    PeragraphSelector.innerHTML = ("You have copped!");
});

InputSelector.addEventListener("cut", function(){
    console.log("You have cutted!");
    PeragraphSelector.innerHTML = ("You have cutted!");
});

InputSelector.addEventListener("paste", function(){
    console.log("You have pasted!");
    PeragraphSelector.innerHTML = ("You have pasted!");
});