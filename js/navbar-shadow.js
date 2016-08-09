// Box shadow of the navbar should be removed when on top of the page

$(document).ready(function () {
  var navbar = $('.navbar');

  throttle("scroll", "removeNavbarShadow");

  var removeNavbarShadow = function () {
    if ($(window).scrollTop()) {
      navbar.addClass("navbar-shadow");
    } else if (navbar.hasClass("navbar-shadow")) {
      navbar.removeClass("navbar-shadow");
    }
  };

  removeNavbarShadow();

  window.addEventListener("removeNavbarShadow", removeNavbarShadow);
});
