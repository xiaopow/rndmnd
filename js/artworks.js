$(document).ready(function(){

  getArtworkById(window.location.search.substring(4), function(artwork) {
    $('.artwork img').attr('src','assets/artworks/'+artwork.img_url);
    $('.artist-name').text(artwork.artist);
    $('.artwork-name').text(artwork.name);
    $('.artwork-year').text(artwork.year);
    $('.artwork-medium').text(artwork.medium);
    $('.artwork-size-cm').text(artwork.size['cm'][0]+' x '+artwork.size['cm'][1]+ 'cm');
    $('.artwork-size-in').text(artwork.size['in'][0]+' x '+artwork.size['in'][1]+ 'in');
    $('.artwork-price').text(artwork.price);
    $('.add-cart').attr('id',artwork._id);
    getArtistById(artwork.artist_id, function(artist) {
      $('.artist-bio').text(artist.bio);
    });
  });

});