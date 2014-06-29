jQuery(document).ready(function() {

	jQuery('.fullwidthbanner').revolution();

	
	jQuery(".tinynav").selectbox();
	
	jQuery('.follower a.sr').click(function() {//Next and Prev action
		jQuery('.search-bar').addClass('show');
		});
		jQuery('.close').click(function() {//Next and Prev action
		jQuery('.search-bar').removeClass('show');
	});


	/*************************************
	## TEAM SECTION HOVER FOR CONTENT
	*************************************/

	var $team = jQuery('.team-data span');

	$team.mouseover(function() {
		jQuery(this).closest(".team").addClass('t_ac');
	});
	
	jQuery('.team').mouseout(function() {
		jQuery('.team').removeClass('t_ac');
	});


	/*************************************
	## Portfolio Hover Start
	*************************************/
	
	jQuery('#portfolio_hover li a, .portfolio_item').hover(function(){
		jQuery(this).find('.hover').stop(true, true).fadeIn(500);
	},function(){
		jQuery(this).find('.hover').stop(true, true).fadeOut(500);
	});
  
	/***********************************
	## Portfolio Icon Hover
	*************************************/
	jQuery('.hover').hover(function(){
		jQuery(this).find('.iconhover').stop().animate({ 'margin-top' : '80' }, 200, 'easeInCubic');
	},function(){
		jQuery(this).find('.iconhover').stop().animate({ 'margin-top' : '-100' }, 200, 'easeOutCubic');
	});

	// Superfish  Plugin for Dropdown menu


	jQuery('ul.sf-menu').superfish({ 
		delay:       100,									// 0.1 second delay on mouseout 
		animation:   {opacity:'show',height:'show'},	   // fade-in and slide-down animation 
		speed:       'slow',
		autoArrows:  false,									// autoArrows:  false,
		dropShadows: false									// disable drop shadows 
	});	
	
	
	
   	jQuery(function() {
		jQuery( "#htabs_op" ).tabs();
	});
	
	jQuery(function() {
		jQuery( "#vtabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		jQuery( "#vtabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	});


	jQuery(function() {
		jQuery( "#accordion_op" ).accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
	});
	
	jQuery(function() {
		jQuery( "#accordion_os" ).accordion({
			autoHeight: false,
			collapsible: true,
			active: true
		});
	});
	

jQuery().ready(function() {
    jQuery(".client").jCarouselLite({
    visible: 5,
    auto: false,
    timeout: 20000,
    speed: 800, 
    responsive: false,
    swipe: true,
    circular: true,
	mouseWheel: true,	
    btnNext: ".next", 
    btnPrev: ".prev"
    });
});	
	
	
      !function (jQuery) {
        jQuery(function(){
          // carousel demo
          jQuery('#small_slider').carousel()
        })
      }(window.jQuery)	
	  
	  

	
	jQuery(".test1").cycle({ 
	    fx: 'scrollLeft',
	    timeout: '2000',
		speed:  2000,   
		pause: 0, 
		pager:  '#nav'
		
		});
	jQuery(".test2").cycle({ 
	    fx: 'scrollLeft',
	    timeout: '2500',
		speed:  2000,   
		pause: 0, 
		pager:  '#nav2'
		
		});		
	jQuery("#slider2").cycle({ 
	    fx:     'scrollHorz',
	    timeout: 7000,	   
    speedIn:  1200, 
    speedOut: 2000, 
    easeIn:  'easeInCirc', 
    easeOut: 'easeOutBounce', 
    delay:   -1500 ,  
    next:   '#next2', 
    prev:   '#prev2', 
		slideExpr: '.slide',
		slideResize: 0,
				pager:  '.nav1'
		});
		
	jQuery(".imgslider").cycle({ 
	    fx:     'scrollHorz',
	    timeout: 4000,	   
    speedIn:  1200, 
    speedOut: 2000, 
    easeIn:  'easeInCirc', 
    easeOut: 'easeOutBounce', 
    delay:   -1500 ,  
    next:   '#next3', 
    prev:   '#prev3', 
		slideExpr: '.slide',
		slideResize: 0,
				pager:  '.nav2'
		});	


		


//init

jQuery(window).load(function(){
	jQuery('.bwWrapper').BlackAndWhite({
		hoverEffect : true, // default true
		// set the path to BnWWorker.js for a superfast implementation
		webworkerPath : false,
		// for the images with a fluid width and height 
		responsive:true,
		speed: { //this property could also be just speed: value for both fadeIn and fadeOut
	        fadeIn: 200, // 200ms for fadeIn animations
	        fadeOut: 800 // 800ms for fadeOut animations
	    }
	});
});		





var offsetX = 20;

var offsetY =10;

	jQuery(".shear-icon a").hover (function(e){

	var href = jQuery(this).attr('rel');

	jQuery('<span id="large">'+href+'</span>')

	.css('top',e.pageY + offsetY)

	.css('left',e.pageX + offsetX)

	.appendTo('body');

   },function(){

	 //mouse off

	 jQuery('#large').remove();

	});

jQuery(".shear-icon a").mousemove(function(e){	

	jQuery('#large').css('top',e.pageY+offsetY).css('left',e.pageX+offsetX);

   });

//Image Preloder
jQuery(function(){
			
	jQuery(".container").preloader();
	
	});

//
		
		var $container = jQuery('.pro');
		/* filter items when filter link is clicked	*/
		$container.isotope({layoutMode: 'fitRows', filter: '*'});
		jQuery('#filter a').click(function(){
		  var selector = jQuery(this).attr('data-filter');
		  $container.isotope({ layoutMode: 'fitRows',filter: selector });
		    return false; 
		});
		
		 var $optionSets = jQuery('.option-set'),
	          $optionLinks = $optionSets.find('a');

	      $optionLinks.click(function(){
	        var $this = jQuery(this);
	        // don't proceed if already selected
	        if ( $this.hasClass('active') ) {
	          return false;
	        }
	        var $optionSet = $this.parents('.option-set');
	        $optionSet.find('.active').removeClass('active');
			$this.addClass('active');
	});
			
	/*Image Animations

	    function preloadImages(imgs, callback) {
            var cache = [],
                imgsTotal = imgs.length,
                imgsLoaded = 0;
    
            jQuery(imgs).each(function (i, img) {
                var cacheImage = document.createElement('img');
                cacheImage.onload = function () {
                    if (++imgsLoaded == imgsTotal) callback();
                };
                cacheImage.src = $(img).attr('src');
                cache.push(cacheImage);
            });
        };
        jQuery.fn.trans = function () {
            var t = arguments[0],
                d = arguments[1] || '';
            if (t) {
                $.each(this, function (i, e) {
                    $(['-webkit-', '-moz-', '-o-', '-ms-', '']).each(function (i, p) {
                        $(e).css(p + 'transition' + d, t);
                    });
                });
            }
        };
        
    */

		
		
	jQuery('#home-box .parallax-layer').parallax({
		mouseport: $('#home-box')
    });	
	

	/*prettyPhoto*/
	jQuery("area[rel^='prettyPhoto']").prettyPhoto();
	
	jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false, deeplinking: false});
	jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:10000, deeplinking: false});
	
	

        
});



function alertbox_close(id){
	jQuery("#"+id).fadeOut();
	return false;
}


	
