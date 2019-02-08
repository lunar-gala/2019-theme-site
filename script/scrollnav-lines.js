var info=[]


// console.log("sup")

 $("#people-container ul li").click(function(){
    $("#people-magnify").addClass("open");
  });
  $("#close-button").click(function() {
    $("#people-magnify").removeClass("open");
  });


  $(".people-list li").click(function(){
    console.log("boo")
    var this_li= $(this)
    var name = this_li[0].innerHTML
    console.log(name)
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
      // var board = false
      $(".people-list li").removeClass("active");
      $(".people-list li").children().remove();
      $(this).addClass("active");
      //bring up text info
      // console.log(this_li, name)
      for (line in lines) {
        // console.log(lines[line])
        if (lines[line].line == name) {

          // console.log("in lines")
          console.log(lines[line].team)
          info.push(lines[line].description)
          info.push(lines[line].team)
          // info.push(lines[person].year)
          // console.log(info)

        }
      }
      var node = document.createElement("h4");
      var node2 = document.createElement("h6");

      var br = document.createElement("BR");
      var br2 = document.createElement("BR");
      
      var textnode = document.createTextNode(info[0]);
      var textnode2 = document.createTextNode(info[1]);

      node.appendChild(textnode);
      node.appendChild(br);
      node2.appendChild(br2);
      node2.appendChild(textnode2)
      

      $(this).children().remove()
      $(this).append(node)
      $(this).append(node2)

      window.getComputedStyle(node).opacity;
      // console.log($(this).css("height"));
      node.className += 'in';
      node2.className += 'in';

      //mobile
      var mobileName = document.getElementById("mobile-name")
      var mobileTeam = document.getElementById("mobile-team")
      var mobileDes = document.getElementById("mobile-description")
      var textsize= "4.5em"

      mobileName.innerHTML=name


      mobileTeam.innerHTML = info[0]
      mobileDes.innerHTML = info[1]

      mobileName.style.textTransform = "uppercase"
      mobileTeam.style.textTransform = "uppercase"
      mobileDes.style.textTransform = "uppercase"

      if (window.innerWidth < 800) {
        console.log(name.length)
        let words = name.split(' ');
        for (let i = 0; i < words.length; i++){
                if (words[i].length > 8) {
                  textsize="3.5em"
                }
              }
        console.log(textsize)
        mobileName.style.fontSize = textsize


      }
      // document.getElementbyId("mobile-position").innerHTML=info[0]
      // document.getElementbyId("mobile-name").innerHTML=info[1]

     $("#picture").attr("src","images/Lines/"+name+".jpg");
     $("#mobile-picture").attr("src","images/Lines/"+name+".jpg");
     $("#side-pic").attr("src","images/Lines/"+name+"2.png");
    }
    // console.log($(this).css("height"));
  })

  $("#lil-ul li").click(function(){
    $("#lil-ul li").removeClass("switch");
    $(this).addClass("switch");
    });
