$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").show();
    $("#walrus-showing, #text-showing").slideToggle();
    $("#walrus-hidden, #text-hidden").slideToggle();

  });
});
