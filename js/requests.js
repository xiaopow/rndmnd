// $(document).ready(function() {

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  //--------------- Artworks -----------------

  function getAllArtworks(callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/artworks';
    newRequest['success'] = function(response){
      return callback(response);
    };

    $.ajax(newRequest);
  };

  function getFeaturedArtworks(callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/featuredArtworks';
    newRequest['success'] = function(response){
      return callback(response);
    };

    $.ajax(newRequest);
  };

  function getArtworkById(id,callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/artworks/'+id;
    newRequest['success'] = function(response){
      return callback(response);
    };

    $.ajax(newRequest);
  };

  //---------------- Artists -------------------

  function getArtistById(id,callback) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/artists/'+id;
    newRequest['success'] = function(response){
      return callback(response);
    };

    $.ajax(newRequest);
  };

// });