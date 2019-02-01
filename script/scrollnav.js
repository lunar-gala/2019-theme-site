var info=[]

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
      node.className += 'in';

     $("#picture").attr("src","images/Headshots/"+name+".jpg");
     $("#side-pic").attr("src","images/Headshots/"+name+"-side.jpg");
    }
    
  })

  $("#lil-ul li").click(function(){
    $("#lil-ul li").removeClass("switch");
    $(this).addClass("switch");
    });
