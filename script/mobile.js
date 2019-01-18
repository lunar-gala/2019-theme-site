$("#nav-window").click(function() {
  
  if (window.innerWidth > 801) {
    location.href = "index.html"; 
  } else {
    $(".mobile-menu").toggleClass("open");
    $("#nav-window").toggleClass("open");
    if ($(".mobile-menu").hasClass("open")) {
      $(".svg-top").css({position: 'fixed'});
      $(".mobile-footer").css({display: 'none'});
    } else {
      $(".svg-top").css({position: 'relative'});
      $(".mobile-menu").addEventListener('touchstart', function(e){
        e.preventDefault();
      }); 
    }

  }
});

if (window.innerWidth < 800) {
  $(".mobile-footer").css({position: 'block'});
}
    

var text = new Swiper(".text", {
  slidesPerView: "auto",
  centeredSlides: true
});



var images = new Swiper(".images", {
  slidesPerView: 1,
  centeredSlides: true
});

images.controller.control = text;

var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene);

var scene2 = document.getElementById('parallaxb');
var parallaxInstance = new Parallax(scene2);

var scene3 = document.getElementById('parallaxc');
var parallaxInstance = new Parallax(scene3);

var scene4 = document.getElementById('parallaxd');
var parallaxInstance = new Parallax(scene4);
