//load event

window.addEventListener("load", function (){
    // document.write("Load");
    console.log("load");
});

//unload event

window.addEventListener("unload", function (){
    console.log("Unload");
});

//scroll event

window.addEventListener("scroll", function (){
    console.log("scrolled");
});

//Screen resize event

window.addEventListener("resize", function(){
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`Height: ${height}, Width: ${width}`);
});

//Toggle event

const details = document.querySelector("details");
details.addEventListener("toggle", function(){
    console.log("Toggle");
});
