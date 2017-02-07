(function ($) {
  $('.tiles').each(function (index, container) {

    $.getRandomSongs(function (tracks) {
      tracks.forEach(function (track) {

        var tileWrapper = $('<div></div>', {
          'class': 'tile-wrapper 2u 3u(large) 4u(medium) 6u(small) 12u$(xsmall)'
        })
        .appendTo(container);

        var tileCover = $('<div></div>', {
          'class': 'tile-cover'
        })
        .css({
          'background-image': 'url(' + track.album.images[0].url + ')'
        })
        .appendTo(tileWrapper);

        var audioPlayer = $('<audio></audio>')
        .attr('id', track.id)
        .attr('src', track.preview_url)
        .appendTo(tileWrapper);

        var tilePanel = $('<div></div>', {
          'class': 'tile-panel play'
        })
        // .on('click', function (event) {
        //   event.preventDefault();
        //   $panel = $(this);
        //
        //   if (!$panel.hasClass('pause')) {
        //     $('.pause').removeClass('pause').addClass('play').find('audio').pause();
        //   }
        //
        //   $panel.toggleClass('pause');
        //   $panel.toggleClass('play');
        // })
        .attr('data-audio', track.id)
        .append($('<div></div>', {
            'class': 'tile-text'
          })
          .append($('<h3></h3>').text(track.name))
          .append($('<p></p>').text(track.artists[0].name))
        )
        .on('click', function (event) {
          event.preventDefault();
          var $panel = $(this);
          var $player = $('#' + $panel.attr('data-audio'))[0];
          if ($panel.hasClass('play')) {
            $('.pause').each(function (index, element) {
              var $element = $(element);
              var $elementPlayer = $('#' + $element.attr('data-audio'))[0];
              $elementPlayer.pause();
              $element.removeClass('pause').addClass('play');
            });

            $player.play();
            $panel.removeClass('play');
            $panel.addClass('pause');
          } else {
            $player.pause();
            $panel.removeClass('pause');
            $panel.addClass('play');
          }
        })
        .appendTo(tileCover);

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
