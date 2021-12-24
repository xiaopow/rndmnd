$(document).ready(function(){
  var arrayArt = [];

  $(document).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if (scroll >= 550) {
      $("#home-nav").removeClass('navbar-transparent');
      $("#home-nav").addClass('navbar-solid');
    };
    if (scroll <= 550) {
      $("#home-nav").addClass('navbar-transparent');
      $("#home-nav").removeClass('navbar-solid');
    };
  });

  $('body').scrollspy({ target: '#home-nav' });

});