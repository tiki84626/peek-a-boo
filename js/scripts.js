$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").show();
    $("#walrus-showing").toggle("slow");
    $("#walrus-hidden").toggle("slow");
  });
});
