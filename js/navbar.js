$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if ($(window).width() > 768) { // Check if screen width is greater than 768 pixels
          if (st > lastScrollTop) {
              // Scroll down
              $('.navbar').css('top', '-60px');
              $('.navbar-brand').css({'padding':'0 20px 20px','transform': 'scale(0.9)'});
              $('.navbar-brand span').css('display', 'none');
          } else {
              // Scroll up
              $('.navbar').css('top', '0');
              $('.navbar-brand').css('transform', 'scale(1)');
              $('.navbar-brand span').css('display', 'inline-block');
          }
          lastScrollTop = st;
      } else {
          // Reset styles when screen width is less than or equal to 768 pixels
          $('.navbar').css('top', '0');
          $('.navbar-brand').css({'padding':'', 'transform': 'scale(1)'});
          $('.navbar-brand span').css('display', 'inline-block');
      }
  });
});
