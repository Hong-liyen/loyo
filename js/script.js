$(document).ready(function () {
	var items = $('.overlapblackbg, .slideLeft');
	var wsmenucontent = $('.wsmenucontent');
	var menuopen = function() {
		$(items).removeClass('menuclose').addClass('menuopen');
		$('body').addClass('overflow-hidden');
	}
	var menuclose = function() { 
		$(items).removeClass('menuopen').addClass('menuclose');
		$('body').removeClass('overflow-hidden');
	}
	$('#navToggle').click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	wsmenucontent.click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
	});
	$('#navToggle,.overlapblackbg').on('click', function(){
		$('.wsmenucontainer').toggleClass( "mrginleft" );
	});

	$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
	$('.wsmenu-mobile').click(function(){
		$('.wsmenu-list').slideToggle('slow');
	});
	$('.wsmenu-click').click(function(){
		$(this).siblings('.wsmenu-submenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
		$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
		$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
		$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
		$(this).siblings('.megamenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
	});
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop>50){
			$('body').addClass('scroll');
		}else{
			$('body').removeClass('scroll');
		}
		if(scrollTop>800){
			$('.goTop').show();
		}else{
			$('.goTop').hide();
		}
	});
	
	$('#search').click(function(){
		$('#search-wrap').toggle();
		$('#lang_box').hide();
	});

	$('#cart').click(function(){
		$('#cartInfo-wrap').toggle();
		$('#search-wrap').hide();
	});
	
	$(".goTop").click(function(){
		$("html,body").animate({scrollTop:0},600);
		return false;
	});

	var scrollLink = $('.scroll_tag');
    scrollLink.click(function(e) {
    	e.preventDefault();
    	$('body,html').animate({
      		scrollTop: $(this.hash).offset().top -70
    	}, 1000 );
    });
	

	$(".iframe").click(function(){
		var url=$(this).attr("data_url");
		$.fancybox({
			href : url,
			type : 'iframe',
		});
		return false;
	});

	new WOW().init();

	$('img.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
	
	var index_swiper = new Swiper('.banner .swiper-container', {
		effect: 'fade',
		speed:1000,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.banner .swiper-pagination',
        	clickable: true,
		},
		navigation: {
			nextEl: '.banner .swiper-button-next',
			prevEl: '.banner .swiper-button-prev',
		},
	});

	var $animation_elements = $('.view-an');
	var $window = $(window);
	function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height - 100);
	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} else {
			$element.removeClass('in-view');
		}
	});
	}
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll', check_if_in_view);
	$('#r_icon_btn').on('click',function(){
		$(this).toggleClass('active');
		$('#right-fixed').toggleClass('active');
	});

	$( "#right-fixed .f_contact" ).hover(
		function() {
			$(this).addClass('on_hover');
		}, function() {
			$(this).removeClass('on_hover');
		}
	);
	$('#esc_btn').on('click',function(){
		$('#right-fixed .f_contact').removeClass('on_hover');
	});
	var swiper = new Swiper(".thumbsSlider", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".store_box", {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		spaceBetween: 10,
		navigation: {
			nextEl: ".store-img .swiper-button-next",
			prevEl: ".store-img .swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	var swiper = new Swiper(".thumbsSlider_prd", {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".product_box", {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		thumbs: {
			swiper: swiper,
		},
	});
});