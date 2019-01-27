


window.onload = function() {

  var aTop = ($(".people-a").offset().top - $("#about-main-info").offset().top);
  var bTop = ($(".people-b").offset().top - $("#about-main-info").offset().top);
  var cTop = ($(".people-c").offset().top - $("#about-main-info").offset().top);
  var dTop = ($(".people-d").offset().top - $("#about-main-info").offset().top);

  $(".scroll-link-a").click(function(){
    $("#about-main-info").animate({ scrollTop: aTop + "px" });
  });
  $(".scroll-link-b").click(function(){
    $("#about-main-info").animate({ scrollTop: bTop + "px" });
  });
  $(".scroll-link-c").click(function(){
    $("#about-main-info").animate({ scrollTop: cTop + "px" });
  });
  $(".scroll-link-d").click(function(){
    $("#about-main-info").animate({ scrollTop: dTop + "px" });
  });


  $(".people-list li").click(function(){
    $(".people-list li").removeClass("active");
    $(this).addClass("active");
     });

  $("#lil-ul li").click(function(){
    $("#lil-ul li").removeClass("switch");
    $(this).addClass("switch");
    });


 

}
