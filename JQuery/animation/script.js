$(".btn1").click(function(){
    $("div").hide(1500);
})

$(".btn2").click(function(){
    $("div").show(1500);
})

$(".btn3").click(function(){
    $("div").hide(1500).show(1500);
})

$(".btn4").click(function(){
    $("div").toggle(1500);
})

$(".btn5").click(function(){
    $("div").fadeOut(1500);
})

$(".btn6").click(function(){
    $("div").fadeIn(1500);
})

$(".btn7").click(function(){
    $("div").fadeOut(1500).fadeIn(1500);
})

$(".btn8").click(function(){
    $("div").fadeToggle(1500);
})

$(".btn9").click(function(){
    $("div").slideUp(1500).slideDown(1500);
})