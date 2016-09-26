(function ($) {
  $('.tiles').each(function (index, container) {

    $.getRandomSongs(function (tracks) {
      tracks.forEach(function (track) {

        var tileWrapper = $('<div></div>', {
          'class': 'tile-wrapper'
        })
        .appendTo(container);

        var tileCover = $('<div></div>', {
          'class': ['tile-cover']
        })
        .css({
          'background-image': 'url(' + track.album.images[0].url + ')'
        })
        .appendTo(tileWrapper);

        var tilePanel = $('<div></div>', {
          'class': 'tile-panel 2u 3u(medium) 6u(small) 12u$(xsmall)'
        })
        .appendTo(tileWrapper);

        var audioPlayer = $("<audio></audio>")
        .attr('controls', true)
        .attr('src', track.preview_url)
        .appendTo(tilePanel);

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
