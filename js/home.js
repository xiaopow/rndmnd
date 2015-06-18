// $(document).ready(function(){
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

  getFeaturedArtworks(function(artworks) {

    for (i=0; i<5; i++) {     
      var htmlId = '#featured-artwork-' + (i+1);
      $(htmlId+' a').attr('href','artworks.html?id='+artworks[i]._id);
      $(htmlId+' img').attr('src','assets/artworks/'+artworks[i].img_url);
      $(htmlId+' .artist-name').text(artworks[i].artist);
      $(htmlId+' .artwork-name').text(artworks[i].name);
      $(htmlId+' .artwork-year').text(artworks[i].year);
      $(htmlId+' .artwork-medium').text(artworks[i].medium);
      $(htmlId+' .price').text(artworks[i].price);
    }
  });

// });