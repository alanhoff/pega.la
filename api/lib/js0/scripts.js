$(window).load(function(){
	
	//Page Preloader
	$("#loader").delay(1000).fadeOut(); 
	$(".mask").delay(1500).fadeOut("slow");
		
		
	//Sticky Navigation		
    $("#navigation").sticky({topSpacing:0});	
	
	
	//Back To Top	
	$('a#back-top').click(function () {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 1500,'easeInOutExpo');
		return false;
	});	
	
	
	//Blog Appear Posts	
	$('.blog-item').each(function(i){		
		$(this).appear(function() {				
			$(this).find('.blog-item-fade').delay(i*80).animate({'opacity':1},450);
		});		
	});		
	
	
	//Navigation Scrolling
	$('.nav a, .nav li a, a.move').on('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top +1
		}, 1500,'easeInOutExpo');	
		event.preventDefault();
	});
	
	
	//PrettyPhoto 	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools:false,
		opacity: 0.85,  
		default_width: 800,
		default_height: 500,
	});
	
	
	//Parallax	
	$('.parallax').each(function(){	
		jQuery(this).parallax("30%", 0.1);	
	});
	
	
	//Progress bar animations	
	$('.progress-bar li').each(function(i){		
		$(this).appear(function(){			
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('span strong i').text());
			var $that = $(this);			
			$(this).find('span').animate({
				'width' : percent + '%'
			},1600, function(){
			});			
			$(this).find('span strong').animate({
				'opacity' : 1
			},1400);			
			$(this).find('span strong i').countTo({
				from: 0,
				to: $endNum,
				speed: 1200,
				refreshInterval: 30,
				onComplete: function(){}
			});	 
			if(percent == '100'){
				$that.find('span strong').addClass('full');
			}	
		});
	});	
		
		
	// Milestone counters
	$('.clapat-counter').each(function() {
		$(this).appear(function() {
			var $endNum = parseInt($(this).find('.number').text());
			$(this).find('.number').countTo({
				from: 0,
				to: $endNum,
				speed: 1500,
				refreshInterval: 30
			});
		},{accX: 0, accY: 0});
	});	
	
	
	//Fading Out AlertBox
	$('.shortcode_alertbox').find('.box_close').click(function(){
		$(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
	});	
	
	
	// Accordion	  
	$('dl.accordion dt').filter(':first-child').addClass('accordion-active');
	$('dd.accordion-content').filter(':nth-child(n+3)').slideUp(1).addClass('hide');		
	$('dl.accordion').on('click', 'dt', function() {
		$(this)
			.addClass('accordion-active')				
			.next()
				.slideDown(200)
				.siblings('dd.accordion-content')
					.slideUp(200)
			.prev()
				.removeClass('accordion-active');
					
	});	
	$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this)
				.removeClass('accordion-active')
					.siblings('dd.accordion-content')
						.slideUp(200);
	});
	
	
	// Toggle	
	$(".toggle_container").hide(); 
	$("span.toggle-title").click(function(){
			$(this).toggleClass("toggle-active").next().slideToggle("normal");
			return false; 
	});
	
	
	// Tabs	
	$(".tab_container").hide(); 
	$("ul.tabs li:first").addClass("tab-active").show(); 
	$(".tab_container:first").show(); 		
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("tab-active"); 
		$(this).addClass("tab-active"); 
		$(".tab_container").hide(); 
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn(); 
		return false;
	});	
	
	
	//Navigation Dropdown
	$('.nav a.colapse-menu').click(function () { $(".nav-collapse").collapse("hide") });	
	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });


	//Full Screen Slider
	$('.clapat_slider').flexslider({
		animation: "slide",
		direction: "vertical",
		animationSpeed: 1000,
		controlNav: false,				
		before: function(slider) {
			$('.clapat-caption').fadeOut().animate({top:'-80px'},{queue:false, easing: 'easeOutQuad', duration: 500});
			slider.slides.eq(slider.currentSlide).delay(500);
			slider.slides.eq(slider.animatingTo).delay(500);
		},
		after: function(slider) {
			$('.clapat-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 500});			
		},
		useCSS: true			
	});
	
	
	//Full Width Section Slider
	$('.clapat_slider_section').flexslider({
		animation: "fade",
		animationSpeed: 1000,
		controlNav: true,
		controlsContainer: '.fullscreen-slider-controls',
		directionNav: false,	
		before: function(slider) {
			$('.clapat-caption-section').fadeOut().animate({top:'-80px'},{queue:false, easing: 'easeOutQuad', duration: 500});
			slider.slides.eq(slider.currentSlide).delay(500);
			slider.slides.eq(slider.animatingTo).delay(500);
		},
		after: function(slider) {
			$('.clapat-caption-section').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 500});			
		},
		useCSS: true			
	});
	
	
	//General Slider
	$('.general').flexslider({
		animation: "slide",
		smoothHeight: true,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});	
	
	
	//Text Slider
	$('.text-rotator').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	
	// Testimonial Client Slider	
	$('.new-client-slider-image').flexslider({
		animation: "fade",
		directionNav:false,
		controlNav:false,
		smoothHeight: true,
		animationLoop:true,
		slideshowSpeed: 5000,		
		slideToStart: 0,
	});	
	$('.new-client-slider-info').flexslider({
		animation: "slide",
		directionNav:false,
		controlsContainer:".new-client-nav",
		controlNav:true,		
		smoothHeight: true,
		animationLoop:true,
		sync: ".new-client-slider-image",
		slideshowSpeed: 5000,			
		slideToStart: 0,
	});
	
	
	// Testimonial Slider
	$('.client-slider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false,
		smoothHeight: true,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	
	// Parallax Home Section
	var page_title = $('body');
		var block_intro = page_title.find('.home-content');
		if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
	$( window ).scroll(function() {
		var current_top = $(document).scrollTop(); var collage_height = $('#home').height();  block_intro.css('top', (current_top*0.50)); block_intro.css('opacity', (1 - current_top/collage_height*1.2));
	});
	
	
	// Col Animation	
	$('.has-animation').each(function() {	
		$(this).appear(function() {
			if($(this).attr('data-animation') == 'fade-in-from-left'){
				$(this).delay($(this).attr('data-delay')).animate({
					'opacity' : 1,
					'left' : '0px'
				},500,'easeOutSine');
			} else if($(this).attr('data-animation') == 'fade-in-from-right'){
				$(this).delay($(this).attr('data-delay')).animate({
					'opacity' : 1,
					'right' : '0px'
				},500,'easeOutSine');
			} else if($(this).attr('data-animation') == 'fade-in-from-bottom'){
				$(this).delay($(this).attr('data-delay')).animate({
					'opacity' : 1,
					'bottom' : '0px'
				},500,'easeOutSine');
			} else if($(this).attr('data-animation') == 'fade-in') {
				$(this).delay($(this).attr('data-delay')).animate({
					'opacity' : 1
				},500,'easeOutSine');	
			} else if($(this).attr('data-animation') == 'grow-in') {
				var $that = $(this);
				setTimeout(function(){ 
					$that.transition({ scale: 1, 'opacity':1 },900,'easeInCubic');
				},$that.attr('data-delay'));
			}			
		},{accX: 0, accY: -105},'easeInCubic');
	
	});
		
		
	// Radial Counters	
	if( jQuery('.radial-counter').length > 0 ){		
		$(".knob").knob({
			width: 140,
			height: 140,
			fgColor: '#000',
			inputColor: '#fff',
			dynamicDraw: true,
			thickness: 0.05,
			tickColorizeValues: true,
			skin:'tron',
			readOnly:true,
		});	
		$(".knob").appear(function(e){			
			var $this = $(this);
			var myVal = $this.attr("data-gal");	
		   $({value: 0}).animate({value: myVal}, {
			   duration: 2000,
			   easing: 'swing',
			   step: function () {
				   $this.val(Math.ceil(this.value)).trigger('change');
			   }
		   })			
		});	
	}	
	
	
	//Toggle Map
	$('.hide-overlay').click(function() {
		$(".map-overlay").toggleClass("overlay-hide");
		if($(this).text()=="View Map")
		{
			$(this).text("Hide Map");
		} else {
			$(this).text("View Map");
		}
		return false;
	});
	

	//Toggle Video Content		
	$('.hide-video-overlay').click(function() {
		$(".video-overlay").toggleClass("overlay-video-hide");
		$(".hide-video-overlay").toggleClass("show-video-overlay");
	});		
	

	//Google Map
	if( jQuery('#map_canvas').length > 0 ){					
	var latlng = new google.maps.LatLng(45.738028,21.224535);
	var settings = {
		zoom: 16,
		center: new google.maps.LatLng(45.738028,21.224535), mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: false,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};		
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});	
	var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Guest!</strong></h4>'+
		'<div id="bodyContent">'+
		'<p style="font-family:Verdana; color:#999;">Here we are. Come to drink a coffee!</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});	
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(58,63),<!-- Width and height of the marker -->
		new google.maps.Point(0,0),
		new google.maps.Point(35,20)<!-- Position of the marker -->
	);
	var companyPos = new google.maps.LatLng(45.738028,21.224535);	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,               
		title:"Creative News",
		zIndex: 3});	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});	
	}
	
	return false;

});//End Window Load



 
$(document).ready(function($){
	
	
	//CountDown
	if( jQuery('#countdown_dashboard').length > 0 ){	
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		15,
			'month': 	3,
			'year': 	2015,
			'hour': 	12,
			'min': 		00,
			'sec': 		0
		},
		omitWeeks: true
	});
	}
	
	     
	//Blog Slider
	$('.blog-slider').flexslider({
		animation: "fade",
		controlNav: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	
	// Portfolio Isotope
	if( jQuery('#portfolio').length > 0 ){	
		var container = $('#portfolio-wrap');	
		container.isotope({
			animationEngine : 'best-available',
			animationOptions: {
				duration: 200,
				queue: false
			},
			layoutMode: 'fitRows'
		});		
		$('#filters a').click(function(){
			$('#filters a').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			container.isotope({ filter: selector });
			setProjects();		
			return false;
		});		
		$('.portfolio-item-fade').each(function(i){		
			$(this).appear(function() {				
				$(this).find('.portfolio-item').delay(i*80).animate({'opacity':1},450);
			});		
		});				
		function splitColumns() { 
			var winWidth = $('#portfolio-wrap').width(),			 
				columnNumb = 1;
				var attr_large = $('#portfolio-wrap').attr('data-col-large');
				var attr_small = $('#portfolio-wrap').attr('data-col-small');
				
			if (winWidth > 1300) {
				if (typeof attr_large !== typeof undefined && attr_large !== false) {
					columnNumb = $('#portfolio-wrap').attr('data-col-large');
				} else columnNumb = 5;
			} else if (winWidth > 1024) {
				if (typeof attr_small !== typeof undefined && attr_small !== false) {
					columnNumb = $('#portfolio-wrap').attr('data-col-small');
				} else columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 600) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}		
			return columnNumb;
		}
		function setColumns() { 
			var winWidth = $('#portfolio-wrap').width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);			
			container.find('.portfolio-item').each(function () { 
				$(this).css( { 
					width : postWidth - 40 + 'px' 
				});
			});
		}			
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
		container.imagesLoaded(function () { 
			setColumns();
		});
		$(window).on('resize', function () { 
			setProjects();			
		});		
		$("#all").click();
		
		
		// Portfolio Ajax Expander
		(function(){		  
			var container = $( "#project-page-holder" );
			var $items = $('#portfolio-wrap .open-project-link');
			index = $items.length;
			$('#portfolio-wrap .open-project-link').click(function(){	
			if ($(this).hasClass('active')){
			  } else 
			  { lastIndex = index;
			  index = $(this).index();		  
			  $('#project-page-data').animate({opacity:0}, 400,function(){				
			  $('#project-page-holder').height('0');			
			  });			  
			  $items.removeClass('active');
			  $(this).addClass('active');		
			var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 			
			$('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top -58}, 900);			
			$('#project-page-holder').delay(1000).animate({height:'100px'}, 400,function(){			
				$('#loader-line-box').animate({opacity:1}, 400);				
					setTimeout(function(){					
						$("#project-page-data").load(myUrl,function(e){						
						var $helper = $('.helper');
						var height = $helper.height();
						$('#project-page-data').css("min-height", height);						
						$('body').waitForImages({
							finished: function() {								
								$('#loader-line-box').animate({opacity:0}, 500);								
								$('.general').flexslider({
									animation: "slide",
									smoothHeight: true,
									controlNav: false,
									start: function(slider){
										$('body').removeClass('loading');
									}
								});
								setTimeout(function(){  
									$('#project-page-holder, #project-page-data').height($('.project-page').height());
									$('#project-page-data').animate({opacity:1}, 400);
								},( 300 ));							
							},
								waitForAll: true
							});							
						});					
					},( 2000 ));	
			});	
		}
			return false;			  
		});
			$(document).on('click', '#project_close', function(event) {				
			$('#project-page-data').animate({opacity:0}, 400,function(){	
				$('#project-page-holder').delay(400).height('0');
			});				
			$('html, body').delay(1000).animate({ scrollTop: $(".portfolio-top").offset().top - 60}, 800);
			$items.removeClass('active');		
			return false;				
			  });	
		})();
		}
		
		
	// Switcher CSS 	
	"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });		

		
});
