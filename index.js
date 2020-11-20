function isElementVisible(elem) {
    let viewScrollTop = $(window).scrollTop();
    let viewBottom = viewScrollTop + $(window).height();
    let topElemD = $(elem).offset().top;
    return (topElemD < viewBottom);
}


$(window).on("scroll", function () {
    let elem = $('#pie');
    let heart1 = $('#heart1')
    let heart2 = $('#heart2')
    let heart3 = $('#heart3')
    if (isElementVisible(elem)) {
        heart1.addClass('heart-beating');
        heart2.addClass('heart-beating');
        heart3.addClass('heart-beating');
        count();
    } else {
        heart1.removeClass('heart-beating');
        heart2.removeClass('heart-beating');
        heart3.removeClass('heart-beating');
    }
});

function count() {
    var counter = { var: 0 };
    TweenMax.to(counter, 3, {
        var: 100,
        onUpdate: function () {
            var number = Math.ceil(counter.var);
            $('#counterR').html(number);
            $('#counterH').html(number);
            $('#counterC').html(number);
        },
        ease: Circ.easeOut
    });
}