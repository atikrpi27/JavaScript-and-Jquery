//Play audio using Multiple Event Listener

var txtLen = document.querySelectorAll(".myBtn").length

for (i=0; i<txtLen; i++){
document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){
    var txt = this.innerHTML;
    audioPlay(txt);
})
}

function audioPlay(txt){
    switch(txt){
        case " A ":
            var audio = new Audio("sound/a.m4a");
            audio.play();
            break;
        case " B ":
            var audio = new Audio("sound/b.m4a");
            audio.play();
            break;
        case " C ":
            var audio = new Audio("sound/c.m4a");
            audio.play();
            break;
    }
}