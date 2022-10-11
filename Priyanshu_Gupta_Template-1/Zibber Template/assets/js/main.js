/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Search Js
04. Sticky Header Js
05. Data-Background Js
06. Scroll To Top Js
07. Hero Slider Js
08. Testimonial Js
09. Brand Slider JS
10. Testimonial Slider Js
11. Project Slider Js
12. Masonary Js
13. WoW Js
14. Counter Js
15. InHover Active Js
16. Parallax Js
****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 03. Search Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay-2").on("click", function () {
		$(".header__search-wrapper").removeClass("opened");
		$(".search-toggle i").removeClass("fa-times");
		$(".body-overlay-2").removeClass("opened");
	});


	let searchToggleStatus = false;
	$(".search-toggle").on("click", function () {
		if (searchToggleStatus === false){
			$(".header__search-wrapper").addClass("opened");
			$(".search-toggle i").addClass("fa-times");
			$(".body-overlay-2").addClass("opened");
				searchToggleStatus = true;
		}
		else if (searchToggleStatus === true) {
			$(".header__search-wrapper").removeClass("opened");
			$(".search-toggle i").removeClass("fa-times");
			$(".body-overlay-2").removeClass("opened");

			searchToggleStatus = false;
		}
	});

		
	////////////////////////////////////////////////////
    // 04. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header__sticky").removeClass("sticky");
		} else {
			$("#header__sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // 05. Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	


	////////////////////////////////////////////////////
    // 06. Scroll To Top Js
	function smoothSctollTop() {
		$('.smooth-scroll a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 0
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// Show or hide the sticky footer button
	windowOn.on('scroll', function(event) {
		if($(this).scrollTop() > 600){
			$('#scroll').fadeIn(200)
		} else{
			$('#scroll').fadeOut(200)
		}
	});

	//Animate the scroll to yop
	$('#scroll').on('click', function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0,
		}, 1500);
	});

	////////////////////////////////////////////////////
    // 07. Hero Slider Js
	function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 8000,
		dots: false,
		fade: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [{
		breakpoint: 767,
		settings: {
			dots: false,
			arrows: false
		}
		}]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
		var $this = $(this);
		var $animationDelay = $this.data('delay');
		var $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
		});
	}
	}
	mainSlider();


	////////////////////////////////////////////////////
	// 08. Testimonial Js
  $('.testimonial__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
	fade: true,
	dots: true,
    asNavFor: '.testimonial__nav',

  });
  $('.testimonial__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonial__wrapper',
    dots: false,
    centerMode: true,
    centerPadding: 0,
	focusOnSelect: true,
	arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
  });

	////////////////////////////////////////////////////
    // 09. Brand Slider JS
	$('.brand__slider ').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:4
			}
		}
	});

	////////////////////////////////////////////////////
    // 10. Testimonial Slider Js
	$('.testimonial__slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
			1600:{
				items:1
			}
		}
	});

	////////////////////////////////////////////////////
    // 11. Project Slider Js
	$('.project__slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:false,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:2
			},
			1600:{
				items:2
			}
		}
	});


	////////////////////////////////////////////////////
    // 12. Masonary Js
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});


	// filter items on button click
	$('.masonary-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.masonary-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	});


	////////////////////////////////////////////////////
    // 13. WoW Js
	new WOW().init();



	////////////////////////////////////////////////////
    // 14. Counter Js
	$('.counter').counterUp({
		delay: 100,
		time: 1000
	});

	////////////////////////////////////////////////////
    // 15. InHover Active Js
	$('.price__item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.price__item').removeClass('active');
	});


	////////////////////////////////////////////////////
    // 16. Parallax Js
	if ($('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		}); 
	}


})(jQuery);