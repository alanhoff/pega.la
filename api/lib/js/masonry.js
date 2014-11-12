jQuery(document).ready(function($){     

	

	// Blog Isotope
	var container = $('#masonry-wrap');	
	

	container.isotope({
		masonry: {	
	  },
		animationEngine : 'best-available',
	  	animationOptions: {
	     	duration: 200,
	     	queue: false
	   	},
		
	});		

	$('#setposts a').click(function(){
		$('#setposts a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
	  	container.isotope({ filter: selector });
        setPosts();		
	  	return false;
	});
	
	
	
		
		
		function splitPosts() { 
			var winWidth = $('#masonry-wrap').width(), 
				columnNumbPosts = 1;
			
			
			if (winWidth > 1024) {
				columnNumbPosts = 3;
			} else if (winWidth > 900) {
				columnNumbPosts = 2;
			} else if (winWidth > 479) {
				columnNumbPosts = 1;
			} else if (winWidth < 479) {
				columnNumbPosts = 1;
			}
			
			return columnNumbPosts;
		}		
		
		function setColumnsPosts() { 
			var winWidth = $('#masonry-wrap').width(), 
				columnNumbPosts = splitPosts(), 
				postWidth = Math.floor(winWidth / columnNumbPosts);
			
			container.find('.blog-item').each(function () { 
				$(this).css( { 
					width : postWidth - 80 + 'px' 
				});
			});
		}		
		
		function setPosts() { 
			setColumnsPosts();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumnsPosts();
		});
		
	
		$(window).on('resize', function () { 
			setPosts();			
		});

	window.onload = function(){
		$("#all").click();	
	};
		
});





	
	
	


