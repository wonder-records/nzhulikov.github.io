(function ($) {
  // custom contact form submit (redirect letter)
  $( "#contact-form" ).submit(function( event ) {

    // Stop form from submitting normally
    event.preventDefault();

    var submitButton = $("#contact-form input[type='submit']").addClass("disabled");

    // Get some values from elements on the page:
    var $form = $( this ),
    element_0 = $form.find( "input[name='element_0']" ).val(),
    element_1 = $form.find( "input[name='element_1']" ).val(),
    element_2 = $form.find( "textarea[name='element_2']" ).val(),
    element_counts = $form.find( "input[name='element_counts']" ).val(),
    embed = $form.find( "input[name='embed']" ).val(),
    url = $form.attr( "action" );

    // Send the data using post
    var posting = $.post( url, { element_0: element_0, element_1: element_1, element_2: element_2, element_counts: element_counts, embed: embed })
    .always(function () {
      submitButton.val("Отправлено");
    })
    .done(function (data) {
      submitButton.val("Получено");
    });
  });


  // custom spotlight buttons animations
  $("#one li span.icon").hover(function () {
    $(this).removeClass("style2").addClass("style1");
  }, function () {
    $(this).removeClass("style1").addClass("style2")
  });

  // map overlay
  $(".map-overlay").click(function () {
    $(this).fadeOut("fast", function() {
      $(this).addClass("hidden");
    });
  });

  $(".map-wrapper").mouseleave(function () {
    var mapOverlay = $('.map-overlay');
    if (mapOverlay.hasClass("hidden")) {
      mapOverlay.fadeTo("slow", 0.5, function () {
        $(this).removeClass("hidden");
      });
    }
  });
})(jQuery);
