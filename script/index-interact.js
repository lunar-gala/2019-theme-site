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
  
  
    if (window.innerWidth < 800) {
      this.imgWidth = 500;
      this.imgHeight =  500;
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
      "images/backdrops/1.jpg",
      // "https://i.imgur.com/hb8v1Qd.jpg",
      "images/backdrops/2.jpg",
      "images/backdrops/3.jpg",
      "images/backdrops/4.jpg",
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
