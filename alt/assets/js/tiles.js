(function ($) {
  $('.tiles').each(function (index, container) {

    $.getRandomSongs(function (tracks) {
      tracks.forEach(function (track) {

        var tileWrapper = $('<div></div>', {
          'class': 'tile-wrapper'
        })
        .appendTo(container)

        var tile = $('<div></div>', {
          'class': 'tile 2u 3u(medium) 6u(small) 12u$(xsmall)'
        })
        .appendTo(tileWrapper);

        var tileCover = $('<div></div>', {
          'class': ['tile-cover']
        })
        .appendTo(tile);
        tileCover.css({
          'background-image': 'url(' + track.album.images[0].url + ')'
        });

        // example use below
    		// $('#randomSongTitle').html(track.name);
    		// $('#randomSongAlbum').html(track.album.name);
    		// $('#randomSongArtist').html(track.artists[0].name);
        //
    		// $('#randomSongURI').prop('href', track.uri);
    		// $('#randomSongPreview').prop('src', track.preview_url);
    		// $('#randomSongCover').prop('src', track.album.images[0].url);
        //
        // $('#randomSongWords').html(words.join(', '));
    	});
    });
  });
})(jQuery);
