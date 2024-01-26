document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("contento").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000); // 3000 milliseconds (3 seconds)
});

// بفرق واربط ال array
var wlc = ["Welcome", "to", "oreo", "world!"];

let wlcresult = wlc.join(" ");
let res = wlcresult.split(" ");
console.log(wlc);
console.log(wlcresult + " " + typeof wlcresult);
console.log(res);
console.log(wlcresult + " " + res);

// تطبيق.. اكتب فالكونسول oreo is true 1
const info = [[1, 2, 3], [4, 5, 6], "is", [7, 8, 9], true, "oreo"];
// بظبط اللي عايز اكتبه ب 2d array
let easyinfo = [info[5], info[2], info[4], info[0][0]];
// بفرق الكلام عشان هيطلع سترنج فانا عايز افرقه اخليه array
let easyinforesult = easyinfo.join(" ");
// بطبع الكلام الحلو دا
console.log(easyinfo);
console.log(easyinforesult);
// يعني حاجه زياده كدا
console.log(info[4]);

var devteam = ["farghaly", "niro", "turbo", "ashmawy"];
var frontDev = "oreo";
devteam[1] = "3abet";
devteam.unshift("oreo");
devteam.push("devM7md");
devteam.shift("ashmawy");

console.log(devteam);
console.log(devteam + " " + frontDev);
console.log("turbo word length = " + devteam[2].length);
console.log(frontDev.includes("yassin"));
console.log(typeof frontDev);


(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });





})(window.jQuery);