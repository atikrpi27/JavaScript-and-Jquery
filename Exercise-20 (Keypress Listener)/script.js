//keypress listener

document.addEventListener("keypress", function(event){
    var txt = event.key;
    document.querySelector("p").innerHTML = ("You have pressed " + txt);
});

count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    var txt = event.key;
    count++;
    document.querySelector("h6").innerHTML = ("You have pressed " + count + " charecters.");
    
});