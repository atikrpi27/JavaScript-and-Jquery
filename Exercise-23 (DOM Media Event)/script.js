const video = document.querySelector("video");

video.addEventListener("canplay", function(){
    console.log("Can Play");
});

video.addEventListener("play", function(){
    console.log("Play");
});

video.addEventListener("playing", function(){
    console.log("playing");
});

video.addEventListener("pause", function(){
    console.log("Pause");
});

video.addEventListener("ended", function(){
    console.log("End");
});

video.addEventListener("volumechange", function(){
    console.log("volume Changed");
});
