//Animation and Play audio using Multiple Event Listener

var txtLen = document.querySelectorAll(".myBtn").length

for (i=0; i<txtLen; i++){
document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){
    var txt = this.innerHTML;
    var txt1 = document.querySelector(".heading").innerHTML = (txt + " Button is clicked and play this button sound.");
    audioPlay(txt);
    animation(txt);
})
}

function audioPlay(txt){
    switch(txt){
        case "A":
            var audio = new Audio("sound/a.m4a");
            audio.play();
            break;
        case "B":
            var audio = new Audio("sound/b.m4a");
            audio.play();
            break;
        case "C":
            var audio = new Audio("sound/c.m4a");
            audio.play();
            break;
    }
}

function animation(txt){
   var animation = document.querySelector("."+ txt);
   animation.classList.add("animation");

   setTimeout(function(){
        animation.classList.remove("animation"); 
   },1000);
}