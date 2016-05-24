

//= require jquery
//= require bootstrap-sprockets
//= require_tree

$(document).ready(function() {

  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-scroll');
    }
    if ($(window).scrollTop() < 101) {
      $('.navbar').removeClass('navbar-scroll');
    }
  });
});
