
// START PLUGIN
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


function myFunction(x) {
  if (x.matches) { // If media query matches
        console.log("poo")
       
  } else {
     $(function() {
        var $target = $('#about-main-info');
        $("body").mousewheel(function(event, delta) {
          console.log("hello")
          $target.scrollTop($target.scrollTop() - (delta * 2));
          event.preventDefault();
       });
    });
  }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes





//Hover events for portal-a/b/c/d - displays information about respective pages


function dispAbout() {
    document.getElementById("bottom-panel-right").innerHTML = "<h1>ABOUT display</h1>";
}

function dispTickets() {
    document.getElementById("bottom-panel-right").innerHTML = "<h1>TICKETS display</h1>";
}

function dispPeople() {
    document.getElementById("bottom-panel-right").innerHTML = "<h1>PEOPLE display</h1>";
}

function dispLines() {
    document.getElementById("bottom-panel-right").innerHTML = "<h1>LINES display</h1>";
}


//Onclick events to change between 4 pages
function gotoAbout() {
    location.href = "about.html";
}

function gotoTickets() {
    location.href = "tickets.html";
}

function gotoPeople() {
    location.href = "people.html";
}

function gotoLines() {
    location.href = "lines.html";
}

/* #################### EFFECTS #################### */

class Jello {
  // Cached variables that can be used and changed in all the functions in the class
  constructor(options = {}) {
    this.defaults = {};
    this.options = options;
    this.canvasHolder = document.getElementById("jello-container");
    if (window.innerWidth > 1400) {
      this.imgWidth = window.innerWidth*2;

      this.imgHeight = window.innerHeight*2;
    } else {
      this.imgWidth = window.innerWidth*2;
      this.imgHeight = window.innerHeight*2;
    }

    this.imgRatio = this.imgHeight / this.imgWidth;
    this.winWidth = window.innerWidth;
    this.bgArray = [];
    this.bgSpriteArray = [];
    this.renderer = PIXI.autoDetectRenderer(
      this.winWidth,
      this.winWidth * this.imgRatio
    );
    this.stage = new PIXI.Container();
    this.imgContainer = new PIXI.Container();
    this.imageCounter = 0;
    this.displacementSprite = PIXI.Sprite.fromImage(
      "https://i.imgur.com/qFzn1no.jpg"
    );
    this.displacementFilter = new PIXI.filters.DisplacementFilter(
      this.displacementSprite
    );
    this.currentMap = {};
    this.mapCounter = 0;
    this.mapArray = [];
    this.raf = this.animateFilters.bind(this);

    this.isDistorted = true;
    this.isTransitioning = false;

    this.initialize();
  }

  initialize() {
    this.defaults = {
      transition: 0.5,
      speed: .7,
      dispScale: 10,
      dispX: true,
      dispY: true,
      count: 0
    };

    this.update();

    // An array of images for background (.jpg)
    // They'll transition in the order listed below
    this.bgArray.push(
      
      // "https://i.imgur.com/hb8v1Qd.jpg",
      "https://i.imgur.com/gdw12p6.jpg",
      "https://i.imgur.com/UQkB2Lo.jpg",
      "https://i.imgur.com/3XyuoTy.jpg",
      "https://i.imgur.com/BDa5djf.jpg",
    );

    // An array of displacement maps
    // They'll transition in the order below with the included settings
    this.mapArray.push(
      {
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1043/dmap-clouds-01.jpg",
        speed: 0.5,
        scale: 200
      }
    );

    this.backgroundFill();
    this.buildStage();
    this.createBackgrounds();
    this.createFilters();
    this.animateFilters();
    this.eventListener();

    this.renderer.view.setAttribute("class", "jello-canvas");
    this.canvasHolder.appendChild(this.renderer.view);
  }

  // define animations and call this.raf
  animateFilters() {
    this.displacementFilter.scale.x = this.settings.dispX
      ? this.settings.transition * this.settings.dispScale
      : 0;
    this.displacementFilter.scale.y = this.settings.dispY
      ? this.settings.transition * (this.settings.dispScale + 10)
      : 0;

    this.displacementSprite.x = Math.sin(this.settings.count * 0.15) * 200;
    this.displacementSprite.y = Math.cos(this.settings.count * 0.13) * 200;

    this.displacementSprite.rotation = this.settings.count * 0.06;

    this.settings.count += 0.05 * this.settings.speed;
    //pixi.autodetectrenderer().renderer.render
    this.renderer.render(this.stage);

    window.requestAnimationFrame(this.raf);
  }

  // canvas built to fill width of window
  backgroundFill() {
    // this.renderer.view.setAttribute('style', 'height:auto;width:100%;');
  }

  // main container for animation
  buildStage() {
    this.imgContainer.position.x = this.imgWidth / 2;
    this.imgContainer.position.y = this.imgHeight / 2;

    this.stage.scale.x = this.stage.scale.y = this.winWidth / this.imgWidth;
    this.stage.interactive = true;
    this.stage.addChild(this.imgContainer);
  }

  // cycle through this.bgArray and change images with crossfade
  changeImage() {
    if (this.imageCounter < this.bgArray.length - 1) {
      this.imageCounter++;
    } else {
      this.imageCounter = 0;
    }

    this.bgSpriteArray.map((sprite, i) => {
      if (i == this.imageCounter) {
        TweenLite.to(sprite, 1, { alpha: 1, ease: Power2.easeInOut });
      } else {
        TweenLite.to(sprite, 1, { alpha: 0, ease: Power2.easeInOut });
      }
    });
  }
  setImage(x) {
     this.imageCounter = x;
        this.bgSpriteArray.map((sprite, i) => {
      if (i == this.imageCounter) {
        TweenLite.to(sprite, 1, { alpha: 1, ease: Power2.easeInOut });
      } else {
        TweenLite.to(sprite, 1, { alpha: 0, ease: Power2.easeInOut });
      }
    });
  }

  // cycle through this.mapArray and change displacement maps
  changeMap() {
    if (this.mapCounter < this.mapArray.length - 1) {
      this.mapCounter++;
    } else {
      this.mapCounter = 0;
    }

    this.currentMap = this.mapArray[this.mapCounter];
    this.displacementSprite = PIXI.Sprite.fromImage(`${this.currentMap.image}`);
    this.displacementFilter = new PIXI.filters.DisplacementFilter(
      this.displacementSprite
    );
    this.createFilters();
  }

  // preload all backgrounds for quick transitions
  createBackgrounds() {
    this.bgArray.map(image => {
      const bg = PIXI.Sprite.fromImage(image);

      // Set image anchor to the center of the image
      bg.anchor.x = 0.5;
      bg.anchor.y = 0.5;

      this.imgContainer.addChild(bg);
      this.bgSpriteArray.push(bg);

      // set first image alpha to 1, all else to 0
      bg.alpha = this.bgSpriteArray.length === 1 ? 1 : 0;
    });
  }

  // distortion filters added to stage
  createFilters() {
    this.stage.addChild(this.displacementSprite);

    this.displacementFilter.scale.x = this.displacementFilter.scale.y =
      this.winWidth / this.imgWidth;

    this.imgContainer.filters = [this.displacementFilter];
  }

  // function changes the distortion level to a specific amount
  distortionLevel(amt) {
    if (!this.isTransitioning) {
      this.isTransitioning = false;
      TweenLite.to(this.settings, 1, {
        transition: amt,
        speed: this.currentMap.speed,
        dispScale: this.currentMap.scale,
        ease: Power2.easeInOut,
        onComplete: () => {
          this.isTransitioning = false;
        }
      });
    }
  }

  // click events
  eventListener() {
    const changeImageBtn = document.getElementsByClassName(
      "js-change-image"
    )[0];
        const imageTo1 = document.getElementsByClassName(
      "js-change-image-1"
    )[0];
            const imageTo2 = document.getElementsByClassName(
      "js-change-image-2"
    )[0];
            const imageTo3 = document.getElementsByClassName(
      "js-change-image-3"
    )[0];
            const imageTo4 = document.getElementsByClassName(
      "js-change-image-4"
    )[0];
    const changeDistortionBtn = document.getElementsByClassName(
      "js-change-distortion"
    )[0];
    const toggleDistorionBtn = document.getElementsByClassName(
      "js-toggle-distortion"
    )[0];

     imageTo1.onclick = () => {
      this.setImage(0);
    };
         imageTo2.onclick = () => {
      this.setImage(1);
    };
         imageTo3.onclick = () => {
      this.setImage(2);
    };
         imageTo4.onclick = () => {
      this.setImage(3);
    };
    changeImageBtn.onclick = () => {
      this.changeImage();
    };

    toggleDistorionBtn.onclick = () => {
      this.toggleDistortion();
    };

    changeDistortionBtn.onclick = () => {
      this.changeDistortion();
    };
  }

  // turn the distortion on and off using the options.transistion variable
  toggleDistortion() {
    if (this.isDistorted) {
      this.distortionLevel(1);
      this.isDistorted = false;
    } else {
      this.distortionLevel(8);
      this.isDistorted = true;
    }
  }

  // Object.assign overwrites defaults with options to create settings
  update() {
    this.settings = Object.assign({}, this.defaults, this.options);
  }

  // ============ TEAR DOWN =============== //

  tearDown() {
    cancelAnimationFrame(this.raf);
    this.settings = {};
    this.bgArray = [];
    this.bgSpriteArray = [];
  }
}

const instance = new Jello();

$("#portal-a").hover(function() {
  $(".js-change-image-1").trigger("click");
});

$("#portal-b").hover(function() {
  $(".js-change-image-2").trigger("click");
});

$("#portal-c").hover(function() {
  $(".js-change-image-3").trigger("click");
});

$("#portal-d").hover(function() {
  $(".js-change-image-4").trigger("click");
});

$(".js-toggle-distortion").trigger("click");

$("#top-panel-left").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});

$("#top-panel-center").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});

$("#top-panel-right").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});

$("#bottom-panel-left").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});

$("#bottom-panel-right").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});

$("#merch-window").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});


$("#nav-window").hover(function() {
  $(".js-toggle-distortion").trigger("click");
});
