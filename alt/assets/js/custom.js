(function ($) {
  // custom contact form submit (redirect letter)
  $( "#contact-form" ).submit(function( event ) {

    // Stop form from submitting normally
    event.preventDefault();

    var $submitButton = $("#contact-form input[type='submit']").addClass("disabled");

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
      $form.addClass("disabled");
      $submitButton.val("Отправлено");
      $submitButton.addClass("success");
      $form.find("input[type='reset']").addClass("hidden");
      $form.find(".success-message").removeClass("hidden");
    })
    .done(function (data) {
      $submitButton.val("Получено");
    });
  });

  var disableMapOverlay = function ($overlay) {
    $overlay.fadeOut("fast")
      .addClass("no-overlay");
  };

  var enableMapOverlay = function ($overlay) {
    if ($overlay.hasClass("no-overlay")) {
      $overlay.fadeIn("slow", function () {
        $overlay.removeClass("no-overlay");
      });
    }
  };

  $(".map-overlay").click(function () {
    disableMapOverlay($(this));
  });
  $(".map-wrapper").mouseleave(function () {
    enableMapOverlay($(this).find('.map-overlay'));
  });

  // clever form auto-fill
  $("a.autofill").click(function () {

    var $form = $($(this).attr("href")), // works only if href represents #id of some form
      fillTarget = $(this).attr("fill-target"),
      fillData = $(this).attr("fill-data");

    var $target = $form.find("textarea[name=" + fillTarget + "]"), // get target element of the form
      data = $("#" + fillData).text();

    $target.text(data);

    setTimeout(function(){
      $form.find("input:first").focus();
    }, 1500);
  });
})(jQuery);
