

$(document).ready(function() {

        window.onresize = function (event) {
          applyOrientation();
        }
        
      
    applyOrientation();

    // <!-- nav left -->
    $('.nav_left_link a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

      return false;
    });
});

// <!-- nav left -->
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $('.frame').each(function(i) {
        if ($(this).position().top - 500 <= scrollDistance) {
            $('.nav_left ul li.active').removeClass('active');
            $('.nav_left ul li').eq(i).addClass('active');
        }
    });
}).scroll();




