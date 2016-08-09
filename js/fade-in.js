function fadeInBlock() {
  $('.fade-in-block').each(function(i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* Adjust the threshold to either have a delay or that the content starts fading a bit before you reach it  */
    var threshold = bottom_of_window;

    if( bottom_of_window + threshold > bottom_of_object ) {
        $(this).animate({'opacity':'1'}, 1000);
    }
  });
}

$(document).ready(function () {
  throttle("scroll", "fadeInBlock");
  window.addEventListener("fadeInBlock", fadeInBlock);
  fadeInBlock();
});
