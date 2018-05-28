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
      $('.bottom-fixed').fadeIn();
    } else {
      $('.bottom-fixed').fadeOut();
    }
  });

  $('#goTop').on('click', function (e) {
    $("html, body").animate({ scrollTop: $("#top").offset().top }, 500);
    return false;
  });

  var searchIcon = function () {
    $(document).on('click', function(e) {
      var clickID = e.target.id;
      if ( ( clickID !== 'input-search' ) ) {
        $('.header-search-form').removeClass('show');
      }
    });

    $('.search').on('click', function(event){
      event.stopPropagation();
    });

    $('.header-search-form').on('click', function(event){
      event.stopPropagation();
    });

    $('.search').on('click', function (event) {
      if(!$('.header-search-form').hasClass( "show" )) {
        $('.header-search-form').addClass('show');
        event.preventDefault();
      }

      else
        $('.header-search-form').removeClass('show');
      event.preventDefault();

    });
  };

  $(document).ready(function(){
    $(".dropdown, .btn-group").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
        dropdownMenu.parent().toggleClass("open");
      }
    });
  });

  // Document on load.
  $(function () {
    windowScroll();
    searchIcon();
    dropdownMenu();
  });
}());