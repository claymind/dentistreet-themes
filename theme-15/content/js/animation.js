;(function () {

  'use strict';


  // Window Scroll
  var windowScroll = function () {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
      var header = $('#fh5co-header'),
        scrlTop = $(this).scrollTop();
      if (scrlTop > 150 && scrlTop <= 1000) {
        header.addClass('navbar-fixed-top fh5co-animated slideInDown');
      } else if (scrlTop <= 150) {
        if (header.hasClass('navbar-fixed-top')) {
          header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
          setTimeout(function () {
            header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
          }, 100);
        }
      }
    });
  };

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.sticky-book').fadeIn();
    } else {
      $('.sticky-book').fadeOut();
    }

  });

  function determineDropDirection() {
    $(".dropdown-menu").each(function () {
      $(this).css({
        visibility: "hidden",
        display: "block"
      });

      $(this).parent().removeClass("dropup");

      if ($(this).offset().top + $(this).outerHeight() > $(window).innerHeight() + $(window).scrollTop()) {
        $(this).parent().addClass("dropup");
      }

      $(this).removeAttr("style");
    });
  }

  determineDropDirection();

  $(window).scroll(determineDropDirection);


  // Document on load.
  $(function () {
    windowScroll();
  });
}());