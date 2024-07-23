$(document).ready(function () {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
          $('.navbar').css('top', '-50px');
          $('.navbar-brand').css({'padding':'0 20px 20px','transform': 'scale(0.7)'});
          $('.navbar-brand span').css('display', 'none');
        } else {
          // Scroll up
          $('.navbar').css('top', '0');
          $('.navbar-brand').css('transform', 'scale(1)');
          $('.navbar-brand span').css('display', 'inline-block');
        }
        lastScrollTop = st;
    });
});