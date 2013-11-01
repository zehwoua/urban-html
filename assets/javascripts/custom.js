$(document).ready(function(){

	if($("#grid").length != 0){
		new AnimOnScroll( document.getElementById( 'grid' ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.2
		});
	}
	

	portfolio_gallery();
	portfolio_fancybox();
	$('.portfolio-social-button').click(function(e){
		e.preventDefault();
		element = $(this);
		target = element.attr('data-target');
		target = $(target);
		target.remove();
		element.append(target);
		target.toggleClass('open');
		// var sp = element.offset().top - element.height();
		// console.log((element.offset().top));
		// $(target).toggleClass('open').css('top',sp);

	});

	// filter items when filter link is clicked
	$('#portfolio-nav a').click(function(e){
		e.preventDefault();
		alert('hey')
	  var selector = $(this).attr('data-filter');
	  $("#grid").isotope({ filter: selector });
	  return false;
	});


});

function portfolio_gallery(){
	if($(".swiper-container").length != 0){
		var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	  })
	  $('.arrow-left').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipePrev()
	  })
	  $('.arrow-right').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipeNext()
	  });
	}
}

function portfolio_fancybox(){
	if($('a.portfolio_image').length != 0){
		$("a.portfolio_image").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});
	}
}

/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( 'header' ),
		didScroll = false,
		changeHeaderOn = 176;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'header-shrink' );
		}
		else {
			classie.remove( header, 'header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();