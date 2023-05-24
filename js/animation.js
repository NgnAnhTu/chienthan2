
var $wrap = $(".wrap-ani"),
    kjH = $(window).height(),
    hArr = [];

/*for (var i = 1; i <= 7; i++) {
    hArr[i - 1] = $("a[name=p" + i + "]").offset().top;
}

var minH,
    maxH;
*/
function scrollPage() {
    var scrollH = $(document).scrollTop();
    var he = scrollH + kjH;
    var top = 0;
    $wrap.each(function (idx, ev) {
        top = $(ev).offset().top;
        if ((top - he) < -200) {
            $(ev).addClass('animated');
        } else {
            $(ev).removeClass('animated');
        }
    });
    /*hArr.forEach(function (ev, idx) {
        minH = ev;
        maxH = hArr[idx + 1] || 10000;
        if (he < hArr[0]) return $(".ce-menu-list li").removeClass('active');
        if (he - 600 > minH && he - 600 < maxH) {
            $(".ce-menu-list li").removeClass('active').eq(idx).addClass('active');
        }
    });*/
}
$(document).scroll(function () {
    scrollPage();
});
scrollPage();
/*
setTimeout(function () {
    $(".ce-menu-list").addClass('animated');
}, 500);
*/