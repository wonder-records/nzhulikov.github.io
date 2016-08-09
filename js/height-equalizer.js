$(document).ready(function () {
  var maxHeight = 0;
  $(".custom-height-equalizer .panel-footer").each(function () {
    var panelHeight = $(this).height()
    if (panelHeight > maxHeight) {
      maxHeight = panelHeight;
    }
  });
  $(".custom-height-equalizer .panel-footer").each(function () {
    var panelHeight = $(this).height();
    if (panelHeight < maxHeight) {
      $(this).height(maxHeight);
    }
  });
});
