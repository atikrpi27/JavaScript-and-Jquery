//Slider

var pic = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
var imgTag = document.querySelector("img");

var count = 0;
function next(){
    count++;
    if(count >= pic.length){
        count = 0;
        imgTag.src = pic[count];
    }
    else{
        imgTag.src = pic[count];
    }
}

function prev(){
    count--;
    if(count < 0){
        count = pic.length-1;
        imgTag.src = pic[count];
    }
    else{
        imgTag.src = pic[count];
    }
}