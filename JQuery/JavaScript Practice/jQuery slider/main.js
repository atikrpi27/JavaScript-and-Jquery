
$(document).ready(function () {
    var slider = $('.inner-slider');

    //Event Listener for next slide
    $('.right').click(function () {
        next();
    })

    //Event Listener for prev slide
    $('.left').click(function () {
        prev();
    })

    //next image slide
    function next() {
        slider.animate({ left: '-200%' }, 300, function () {
            slider.css('left', '-100%');
            $('.image-slid').last().after($('.image-slid').first())
        })
    }

    //prev image slide
    function prev(){
        slider.animate({ left: '0%' }, 300, function () {
            slider.css('left', '-100%');
            $('.image-slid').first().before($('.image-slid').last())
        })
    }

    //for autoplay
    $(function () {
        setInterval(function () {
            next();
        }, 3000);
    });

})

