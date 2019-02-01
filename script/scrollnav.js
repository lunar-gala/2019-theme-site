var info=[]




window.onload = function() {

  var aTop = ($(".people-a").offset().top - $("#about-main-info").offset().top);
  var bTop = ($(".people-b").offset().top - $("#about-main-info").offset().top);
  var cTop = ($(".people-c").offset().top - $("#about-main-info").offset().top);
  var dTop = ($(".people-d").offset().top - $("#about-main-info").offset().top);

  $(".scroll-link-a").click(function(){
    $("#people-short-nav ul li").removeClass("active");
    $(".scroll-link-a").addClass("active");
    $("#about-main-info").animate({ scrollTop: aTop + "px" });
  });
  $(".scroll-link-b").click(function(){
    $("#people-short-nav ul li").removeClass("active");
    $(".scroll-link-b").addClass("active");
    $("#about-main-info").animate({ scrollTop: bTop + "px" });
  });
  $(".scroll-link-c").click(function(){
    $("#people-short-nav ul li").removeClass("active");
    $(".scroll-link-c").addClass("active");
    $("#about-main-info").animate({ scrollTop: cTop + "px" });
  });
  $(".scroll-link-d").click(function(){
    $("#people-short-nav ul li").removeClass("active");
    $(".scroll-link-d").addClass("active");
    $("#about-main-info").animate({ scrollTop: dTop + "px" });
  });

  $("#people-container ul li").click(function(){
    $("#people-container ul li").removeClass("active");
    $(this).addClass("active");
  });

  $(".scroll-link-a").addClass("active");

  $("#about-main-info").scroll(function() {

    if ($(this).scrollTop() >= (aTop - 100) && $(this).scrollTop() < bTop) {
      $("#people-short-nav ul li").removeClass("active");
      $(".scroll-link-a").addClass("active");
    }
    if ($(this).scrollTop() >= (bTop - 100) && $(this).scrollTop() < cTop) {
      $("#people-short-nav ul li").removeClass("active");
      $(".scroll-link-b").addClass("active");
    }
    if ($(this).scrollTop() >= (cTop - 100) && $(this).scrollTop() < dTop) {
      $("#people-short-nav ul li").removeClass("active");
      $(".scroll-link-c").addClass("active");
    }
    if ($(this).scrollTop() >= (dTop -100)) {
      $("#people-short-nav ul li").removeClass("active");
      $(".scroll-link-d").addClass("active");
    }
  });

}


  $(".people-list li").click(function(){
   
    var this_li= $(this)
    var name = this_li[0].innerHTML

    //close name
    if ($(this).hasClass("active")){
      info=[]
      console.log("close")
      $(this).children().remove()
      $(this).removeClass("active");
      $("#picture").attr("src","");
      $("#side-pic").attr("src","");
    }

    //open name
    else {  
      info=[]
      console.log("open")

      $(".people-list li").removeClass("active");
      $(".people-list li").children().remove();
      $(this).addClass("active");
      //bring up text info
      // console.log(this_li, name)
      for (person in execBoard) {
        console.log(person, execBoard[person], name)
        if (execBoard[person].name === name) {
          console.log("in exec")
          info.push(execBoard[person].position)
          info.push(execBoard[person].major)
          info.push(execBoard[person].year)
          console.log(info)

        }
      }
      var node = document.createElement("h6");
      var br = document.createElement("BR");
      var textnode = document.createTextNode(info[0]);
      var textnode2 = document.createTextNode(info[1]+" "+info[2]);
      node.appendChild(textnode);
      node.appendChild(br);
      node.appendChild(textnode2);

      $(this).children().remove()
      $(this).append(node) 

      window.getComputedStyle(node).opacity;
      console.log($(this).css("height"));
      node.className += 'in';

     $("#picture").attr("src","images/Headshots/"+name+".jpg");
     $("#side-pic").attr("src","images/Headshots/"+name+"-side.jpg");
    }
    console.log($(this).css("height"));
  })

  $("#lil-ul li").click(function(){
    $("#lil-ul li").removeClass("switch");
    $(this).addClass("switch");
    });
