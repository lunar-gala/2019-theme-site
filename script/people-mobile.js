

window.onload = function () {
  $("#people-container ul li").click(function(){
    $("#people-magnify").addClass("open");
  });
  $("#close-button").click(function() {
    $("#people-magnify").removeClass("open");
  });
}
