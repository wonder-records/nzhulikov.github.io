function collapseTree() {
  var navbars = $("div.hardware-navbar");
  var navtrees = $("div.hardware-tree");
  var checkCollapse = navtrees.css("display") === "none";

  if (!navtrees.hasClass("collapsed") && checkCollapse) {
    navtrees.addClass("collapsed");
    console.log("checked!");

    navbars.each(function () {
      // clear previous nav elements
      var nav = $(this).children(".hardware-nav");
      nav.children().remove();

      // target it is where all the data placed
      var targetIdSelector = "#" + $(this).attr("data-target");

      // currently selected element
      var active = $(targetIdSelector + " .hardware-item.active");

      // get all parents of active element and get path to the root
      var parents = active.parents().filter(".hardware-item").clone();
      parents.children(":not(.item-caption)").remove();

      // append a link to show all elements
      var showAllElement = $("<li></li>");
      showAllElement.text("All");
      showAllElement.addClass("item-caption");
      showAllElement.appendTo(nav);

      // append path from active to root category as items of ordered list
      parents.appendTo(nav);

      // append latest active element without link
      $("<li>"+active.text()+"</li>").appendTo(nav);
    });

  } else if (navtrees.hasClass("collapsed") && !checkCollapse) {
    navtrees.removeClass("collapsed");
    console.log("unchecked!");
  }
}

function expandTree() {
  
}

$(document).ready(function () {
  collapseTree();
  $(window).resize(collapseTree);
});
