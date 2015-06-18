$(document).ready(function() {

  getAllArtworks(function(artworks){
    for (i=0, x=1; i<artworks.length; i++, x++) {
      if (x%3 == 0) {
        $('.artworks').append('<div class="col-sm-4 artwork-item"> \
          <a href="artworks.html?id='+artworks[i]._id+'"> \
            <img class="img-responsive" src="assets/artworks/'+artworks[i].img_url+'" alt=""> \
          </a> \
          <p> \
            <span class="artist-name">'+artworks[i].artist+'</span><br> \
            <em> \
              <span class="artwork-name">'+artworks[i].name+'</span>, <span class="artwork-year">'+artworks[i].year+'</span> \
            </em><br> \
            <span class="artwork-medium">'+artworks[i].medium+'</span> \
            <span class="price-tag"><span class="currency">HKD</span> <span class="price">'+artworks[i].price+'</span></span> \
          </p> \
        </div> \
        <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>'
        );
      } else {
        $('.artworks').append('<div class="col-sm-4 artwork-item"> \
            <a href="artworks.html?id='+artworks[i]._id+'"> \
              <img class="img-responsive" src="assets/artworks/'+artworks[i].img_url+'" alt=""> \
            </a> \
            <p> \
              <span class="artist-name">'+artworks[i].artist+'</span><br> \
              <em> \
                <span class="artwork-name">'+artworks[i].name+'</span>, <span class="artwork-year">'+artworks[i].year+'</span> \
              </em><br> \
              <span class="artwork-medium">'+artworks[i].medium+'</span> \
              <span class="price-tag"><span class="currency">HKD</span> <span class="price">'+artworks[i].price+'</span></span> \
            </p> \
          </div>' 
        );
      }
    }
  });

});