// map overlay
var disableMapOverlay = function ($overlay) {
  $overlay.fadeOut('fast')
    .addClass('no-overlay');
};

var enableMapOverlay = function ($overlay) {
  if ($overlay.hasClass('no-overlay')) {
    $overlay.fadeIn('slow', function () {
      $overlay.removeClass('no-overlay');
    });
  }
};

// form autofill by links
var fillFormByLink = function($link) {
  var $form = $($link.attr('href')); // works only if href represents #id of some form
  var fillTarget = $link.attr('fill-target');
  var fillData = $link.attr('fill-data');

  var $target = $form.find('textarea[name=' + fillTarget + ']'); // get target element of the form
  var data = $('#' + fillData).text();

  $target.text(data);

  setTimeout(function () {
    $form.find('input:first').focus();
  }, 1500);
};

(function ($) {

  $('.map-overlay').click(function () {
    disableMapOverlay($(this));
  });
  $('.map-wrapper').mouseleave(function () {
    enableMapOverlay($(this).find('.map-overlay'));
  });

  // clever form auto-fill
  $('.autofill').click(function () {
    fillFormByLink($(this));
  });
})(jQuery);
