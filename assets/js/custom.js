
$(document).ready(function(){

  // Nav-Toggler Animate Class Toggle
  $('#bars').click(function(){
    $(this).toggleClass("change");
  });

  // Add smooth scrolling to all links
  $("li a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Add smooth scrolling to all links
  $("#aaa").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: 0
      }, 800, function(){
   
      });
  });

  // Geting Window Size
  var $winwidth = $(window).width();

  // Adding Cutting Border Width
  $(".cutting").css(
    "border-right-width", $winwidth
  );

  // About paragraph settings
  if ($winwidth > 1000) {
    $("#about-p-div").css({
      "width": 50/100 * $winwidth, "margin": "0 auto"
    });
  } else if ($winwidth < 600) {
    $("#about-p-div").css({
      "width": "initial", "margin": "0 0"
    });
  } else {
    $("#about-p-div").css({
      "width": 70/100 * $winwidth, "margin": "0 auto"
    });
  }

  // On Window Resize adjust Width
  $(window).bind("resize", function(){ 
    var $winwidth = $(window).width();
    $(".cutting").css(
      "border-right-width", $winwidth
    );

    if ($winwidth > 1000) {
      $("#about-p-div").css({
        "width": 50/100 * $winwidth, "margin": "0 auto"
      });
    } else if ($winwidth < 600) {
      $("#about-p-div").css({
        "width": "initial", "margin": "0 0"
      });
    } else {
      $("#about-p-div").css({
        "width": 70/100 * $winwidth, "margin": "0 auto"
      });
    }
  });

  // About paragraph settings End

  // Slider
  $('.owl-portfolio').owlCarousel({
      center:true,
      items:2,
      loop:true,
      margin:20,
      autoplay:true,
      autoplayTimeout:2000,
      dots:true,
      responsive:{
        600:{
          items:4
        }
      }
  });
  $('#loading-div').css('display', 'none');
  $('.owl-portfolio .owl-item').css('left', '-4px');

  // Nav Animation
  var waypoint2 = new Waypoint({
      element: document.getElementById('home-section'),
      handler: function(direction) {
        if ( $winwidth > 560) {
          if ( direction == "down") {
            TweenLite.to("#navid", 1, {height:"85", backgroundColor:"#ef4025", ease:Power2.easeInOut});
            TweenLite.to(".nav-link", 1, {color:"#fff", ease:Power2.easeInOut});
            TweenLite.to(".navbar-brand", 1, {backgroundColor:"#fff", margin:"l00px", ease:Power2.easeInOut});
            TweenLite.to("#logo", 1, {width:"80", ease:Power2.easeInOut});
          }
          else {
            TweenLite.to("#navid", 1, {height:"150", backgroundColor:"transparent", ease:Power2.easeInOut});
            TweenLite.to(".nav-link", 1, {color:"#ef4025", ease:Power2.easeInOut});
            TweenLite.to(".navbar-brand", 1, {backgroundColor:"transparent", ease:Power2.easeInOut});
            TweenLite.to("#logo", 1, {width:"150", ease:Power2.easeInOut});
          }
        }
      },
      offset: 80
    });

  // Home Img Animation
  TweenLite.to("#home-img", 1, {x:"0%", opacity:1, ease:Power2.easeInOut, onComplete: videoFunc});

  function videoFunc() {
    TweenLite.to("#video", 1, {opacity:1, ease:Power2.easeIn, onComplete: videoPlay});
  }

  function videoPlay() {
    $('#video').get(0).play();
  }

  var waypointVideo = new Waypoint({
    element: document.getElementById('about-section'),
    handler: function(direction) {
      if (direction == "down") {
        $('#video').get(0).pause();
        
      }else {
        $('#video').get(0).play();
      }
    },
    offset: 200
  });

  // Services Animation
  var waypoint = new Waypoint({
      element: document.getElementById('services-section'),
      handler: function(direction) {
          TweenLite.to($("#sq1"), 0.8, {boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)", opacity:1, onComplete: sq2});

          function sq2() {
            TweenLite.to($("#sq2"), 0.8, {boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)", opacity:1, onComplete: sq3});
          }

          var sq3 = function() {
            TweenLite.to($("#sq3"), 0.8, {boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)", opacity:1, onComplete: sq4});
          };

          var sq4 = function() {
            TweenLite.to($("#sq4"), 0.8, {boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)", opacity:1});
          };
      },
      offset: 200
    });

  // services animation end

  // features
  var waypoint = new Waypoint({
      element: document.getElementById('features-section'),
      handler: function(direction) {
          TweenLite.to("#feature-img", 1, {x:"0%", opacity:1, ease:Power2.easeInOut});

          TweenLite.to($("#ft1"), 0.8, {top:"50px", opacity:1, ease:Power2.easeInOut, onComplete: ft2});

          function ft2() {
            TweenLite.to($("#ft2"), 0.8, {top:"50px", opacity:1, ease:Power2.easeInOut, onComplete: ft3});
          }

          var ft3 = function() {
            TweenLite.to($("#ft3"), 0.8, {top:"50px", opacity:1, ease:Power2.easeInOut, onComplete: ft4});
          };

          var ft4 = function() {
            TweenLite.to($("#ft4"), 0.8, {top:"50px", opacity:1, ease:Power2.easeInOut});
          };
        },
        offset: 200
    });
  // working process

  // TweenLite.to("#feature-img", 2, {left:"120px", opacity:1, ease:Power2.easeInOut});




});