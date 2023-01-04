$(".btn1").click(function () {
    $("div").hide(1500, function () {
        console.log("Paragraph is hidden.");
    });
});

$(".btn2").click(function () {
    $("div").show(1500, function () {
        //callback function - $(selector).action(speed,callback)
        console.log("Paragraph is show.");
    });
});

$(".btn3").click(function () {
    $("div")
        .hide(1500, function () {
            //callback function
            console.log("Paragraph is hidden.");
        })
        .show(1500, function () {
            console.log("Paragraph is show.");
        });
});

$(".btn4").click(function () {
    $("div").toggle(1500);
});

$(".btn5").click(function () {
    $("div").fadeOut(1500);
});

$(".btn6").click(function () {
    $("div").fadeIn(1500);
});

$(".btn7").click(function () {
    $("div").fadeOut(1500).fadeIn(1500);
});

$(".btn8").click(function () {
    $("div").fadeToggle(1500);
});

$(".btn9").click(function () {
    $("div").slideUp(1500).slideDown(1500);
});
