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

  // map overlay disable
  $(".map-overlay").click(function () {
    $(this).fadeOut("fast", function() {
      $(this).addClass("no-overlay");
    });
  });

  // map overlay enable
  $(".map-wrapper").mouseleave(function () {
    var mapOverlay = $('.map-overlay');
    if (mapOverlay.hasClass("no-overlay")) {
      mapOverlay.fadeTo("slow", 0.5, function () {
        $(this).removeClass("no-overlay");
      });
    }
  });

  // clever form auto-fill
  $("a.autofill").click(function () {

    var $form = $($(this).attr("href")), // works only if href represents #id of some form
    dataTarget = $(this).attr("data-target"),
    dataKey = $(this).attr("data-autofill"),
    $target = $form.find("textarea[name="+dataTarget+"]"); // get target element of the form

    var data = "";
    switch (dataKey) {
      case "book":
        data = "Я хочу забронировать студию на 2 часа.";
        break;
      case "rent":
        data = "Я хочу арендовать аппаратуру для концерта. Расскажу все подробности при разговоре.";
        break;
      case "mix":
        data = "Я хочу заказать сведение записанного материала. Расскажу все подробности при разговоре.";
        break;
      case "vocal":
        data = "Я хочу записаться на уроки вокала.";
        break;
      case "drums":
        data = "Я хочу записаться на курсы по барабанам.";
        break;
      case "guitar":
        data = "Я хочу записаться на уроки гитары.";
        break;
      case "sax":
        data = "Я хочу записаться на уроки саксофона.";
        break;
    }
    $target.text(data);

    setTimeout(function(){
      $form.find("input:first").focus();
    }, 1500);
  });
})(jQuery);
