$(document).ready(function () {
  $(".col-6 question-content").children(1).addClass("my-bold-text");

  //  Im Add an Id for catch the text

  $("p").removeClass("my-color-text");

  // its  working ...

  $(".remove").removeClass();
  //not working...
  //   $(".card-text").replaceWith(" I'm new :D ");
  //
  function Show() {
    $("button").addClass("Show me in console!");
  }
  $("button").click(Show);
  //
});

// $("#MyText").addClass("my-bold-text");
