/**
    * headerFixed();
    * flatOwl();
    * googleMap();
    * quantity_adjust();
    * priceFilter();
    * flexProduct();
    * taboutsie();
    * flatTabs();
    * customSelect();
    * sidebarcategory();
    * countDownTime();
    * parallax();
    * VideoPopup();
    * goTop();
    * dropcart();
    * flatEqualizeHeight();
    * menu_Mobile();
    * flatColor();
    * flatRetinaLogo();
    * spacer();
    * removePreloader();
;*/

; (function ($) {
	"use strict";

	var headerFixed = function () {
		var top_height = $('.top-bar').height(),
			hd_height = $('.header').height();
		$(window).on('load scroll resize', function () {
			var header = $(".header");
			var offset = 0;
			if (typeof (header.data('offset')) != 'undefined') {
				offset = header.data('offset');
			}

			$('.header.header-sticky').css('top', 0);
			if (top_height > 0) {
				if ($(window).scrollTop() >= top_height + hd_height + 20) {
					header.addClass('header-sticky');
				} else {
					header.removeClass('header-sticky');
				}
			}
			else {
				if ($(window).scrollTop() >= hd_height) {
					header.addClass('header-sticky');
				} else {
					header.removeClass('header-sticky');
				}
			}
		});
	};

	var flatOwl = function () {
		if ($().owlCarousel) {
			$('.flat-carousel-box').each(function () {
				var
					$this = $(this),
					auto = $this.data("auto"),
					item = $this.data("column"),
					item2 = $this.data("column2"),
					item3 = $this.data("column3"),
					item4 = $this.data("column4"),
					loops = $this.data("loop"),
					zero = $this.data("zero"),

					gap = Number($this.data("gap")),

					dots = $this.data("dots"),
					nav = $this.data("nav");

				$this.find('.owl-carousel').owlCarousel({
					margin: gap,
					loop: loops,
					dots: dots,
					nav: nav,
					navigation: true,
					pagination: true,
					autoplay: false,
					autoplayTimeout: 5000,
					responsive: {
						0: {
							items: item4
						},
						600: {
							items: item3
						},
						768: {
							items: item2
						},
						1000: {
							items: item
						}
					}
				});

				if (zero === 0) {
					$(".banners-z .owl-dot").find('span').addClass("number_zero");
				}
				$this.find('.owl-dot').each(function () {
					var number = $(this).index() + 1;
					if ($(this).children('span').hasClass("number_zero")) {
						if (number < 9) {
							number = '0' + number;
						}
						$(this).children('span').html(number);
						$(this).append('<i class="line"></i>');
					}
					else {
						$(this).children('span').html(number);
					}

					$(this).children('span').addClass("btn-dots btn-defect");


				});
			});
		}
	};

	var googleMap = function () {
		// gmap default
		if ($().gmap3) {
			var data = JSON.parse('[{"address":"Brooklyn, Tiá»ƒu bang New York 11201 Hoa Ká»³"}]');
			$(".flat-map")
				.gmap3({
					map: {
						options: {
							zoom: 10,
							center: [40.7024767, -73.9877404, 17.5],
							mapTypeId: 'Xian',
							scrollwheel: true
						},
					},
				});
		}
		// json loop
		$.each(data, function (key, val) {
			$('.flat-map').gmap3({
				marker: {
					values: [{
						address: val.address,
						options: {

						}

					}]
				},
				styledmaptype: {
					id: "Xian",
					options: {
						name: "Xian"
					},
					styles: [
						{
							"featureType": "administrative",
							"elementType": "all",
							"stylers": [
								{
									"saturation": "-100"
								}
							]
						},
						{
							"featureType": "administrative.province",
							"elementType": "all",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "all",
							"stylers": [
								{
									"saturation": -100
								},
								{
									"lightness": 65
								},
								{
									"visibility": "on"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "all",
							"stylers": [
								{
									"saturation": -100
								},
								{
									"lightness": "50"
								},
								{
									"visibility": "simplified"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "all",
							"stylers": [
								{
									"saturation": "-100"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "all",
							"stylers": [
								{
									"visibility": "simplified"
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "all",
							"stylers": [
								{
									"lightness": "30"
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "all",
							"stylers": [
								{
									"lightness": "40"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "all",
							"stylers": [
								{
									"saturation": -100
								},
								{
									"visibility": "simplified"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
								{
									"hue": "#ffff00"
								},
								{
									"lightness": -25
								},
								{
									"saturation": -97
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels",
							"stylers": [
								{
									"lightness": -25
								},
								{
									"saturation": -100
								}
							]
						}
					]
				}
			});
		});
	};

	var quantity_adjust = function () {
		$('body').on('click', '.quantity .plus', function (e) {
			var $input = $(this).parent().parent().find('input');
			$input.val(parseInt($input.val()) + 1);

			$input.trigger('change');
		});
		$('body').on('click', '.quantity .minus', function (e) {
			var $input = $(this).parent().parent().find('input');
			var value = parseInt($input.val()) - 1;
			if (value < 0) value = 0;
			$input.val(value);

			$input.trigger('change');
		});
	};

	var priceFilter = function () {
		$("#price-slider").slider({
			range: true,
			min: 20,
			max: 720,
			values: [20, 560],
			slide: function (event, ui) {
				$("#min-price").val('$' + ui.values[0]);
				$("#max-price").val('$' + ui.values[1]);
			}
		});
		$("#min-price").val('$' + $("#price-slider").slider("values", 0));
		$("#max-price").val('$' + $("#price-slider").slider("values", 1));
	};

	var flexProduct = function () {
		$('.flexslider').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
			prevText: "",
			nextText: ""
		});
	};

	var taboutsie = function () {
		$('.flat-outside').each(function () {
			$(this).find('.content-tab-os').children().hide();
			$(this).find('.content-tab-os').children().first().show();
			$(this).find('.menu-tab-os').children('li').on('click', function () {
				var liActive = $(this).index();
				var contentActive = $(this).siblings().removeClass('active').parents('.flat-outside').find('.content-tab-os').children().eq(liActive);
				contentActive.addClass('active').fadeIn("slow");
				contentActive.siblings().removeClass('active');
				$(this).addClass('active').parents('.flat-outside').find('.content-tab-os').children().eq(liActive).siblings().hide();
			});
		});
	};

	var flatTabs = function () {
		$('.flat-tabs').each(function () {
			$(this).find('.content-tab').children().hide();
			$(this).find('.content-tab').children().first().show();
			$(this).find('.menu-tab').children('li').on('click', function () {
				var liActive = $(this).index();
				var contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
				contentActive.addClass('active').fadeIn("slow");
				contentActive.siblings().removeClass('active');
				$(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
			});
		});
	};

	var customSelect = function () {
		$(".custom-select").each(function () {
			var classes = $(this).attr("class"),
				id = $(this).attr("id"),
				name = $(this).attr("name");
			var template = '<div class="' + classes + '">';
			template += '<span class="custom-select-trigger">' + $(this).find('.selection').text() + '</span>';
			template += '<div class="custom-options">';
			$(this).find("option").each(function () {
				template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
			});
			template += '</div></div>';

			$(this).wrap('<div class="custom-select-wrapper"></div>');
			$(this).hide();
			$(this).after(template);
		});
		$(".custom-option:first-of-type").hover(function () {
			$(this).parents(".custom-options").addClass("option-hover");
		}, function () {
			$(this).parents(".custom-options").removeClass("option-hover");
		});
		$(".custom-select-trigger").on("click", function () {
			$('html').one('click', function () {
				$(".custom-select").removeClass("opened");
			});
			$(this).parents(".custom-select").toggleClass("opened");
			event.stopPropagation();
		});
		$(".custom-option").on("click", function () {
			$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
			$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
			$(this).addClass("selection");
			$(this).parents(".custom-select").removeClass("opened");
			$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
		});
	}

	var sidebarcategory = function () {
		$(".sidebar-category").each(function () {
			var categoryChildren = $('.sidebar-category li .children');
			categoryChildren.slideUp();
			categoryChildren.parents('li').addClass('has-children');
			$('.sidebar-category').on('click', 'li.has-children > a', function (e) {

				if ($(this).parent().hasClass('has-children')) {
					if ($(this).siblings('ul:visible').length > 0) {
						$(this).siblings('ul').slideUp();
						$(this).parent().removeClass('active');
					}
					else {
						$(this).parents('li').siblings('li').find('ul:visible').slideUp();
						$(this).siblings('ul').slideDown();
						$(this).parent().addClass('active');
					}
				}
				if ($(this).attr('href') === '#') {
					e.preventDefault();
					return false;
				}
			});
		});
	};

	var countDownTime = function () {
		$(".count-time").each(function () {
			var day = $(".count-time").data("day"),
				month = $(".count-time").data("month") - 1,
				year = $(".count-time").data("year"),
				hour = $(".count-time").data("hour"),
				minute = $(".count-time").data("minutes"),
				second = $(".count-time").data("second");

			var countDownDate = new Date(year, month, day, hour, minute, second).getTime();

			// Update the count down every 1 second
			var x = setInterval(function () {

				// Get todays date and time
				var now = new Date().getTime();

				// Find the distance between now and the count down date
				var distance = countDownDate - now;

				// Time calculations for days, hours, minutes and seconds
				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);

				// Display the result in the element with id="demo"
				$(".days .numb").html(days);
				$(".hours .numb").html(hours);
				$(".minutes .numb").html(minutes);
				$(".seconds .numb").html(seconds);

				// If the count down is finished, write some text
				if (distance < 0) {
					clearInterval(x);
					$(".days .numb").html("0");
					$(".hours .numb").html("0");
					$(".minutes .numb").html("0");
					$(".seconds .numb").html("0");
				}
			}, 1000);
		});
	};

	var parallax = function () {
		if ($().parallax) {
			$('.parallax1').parallax("50%", -0.12);
		}
	};

	var VideoPopup = function () {
		$(".fancybox").on("click", function () {
			$.fancybox({
				href: this.href,
				type: $(this).data("type")
			});
			return false
		});
	};

	var goTop = function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 800) {
				$('#scroll-top').addClass('show');
			} else {
				$('#scroll-top').removeClass('show');
			}
		});

		$('#scroll-top').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
			return false;
		});
	};

	var dropcart = function () {
		$('.indicator-trigger-click .indicator_button').on('click', function (event) {
			event.preventDefault();

			const dropdown = $(this).closest('.indicator');

			if (dropdown.is('.indicator-open')) {
				dropdown.removeClass('indicator-open');
			} else {
				dropdown.addClass('indicator-open');
			}
		});

		$(document).on('click', function (event) {
			$('.indicator')
				.not($(event.target).closest('.indicator'))
				.removeClass('indicator-open');
		});
	};

	var flatEqualizeHeight = function () {
		$(window).on('load resize', function () {
			setTimeout(function () {
				$(document).imagesLoaded(function () {
					if (matchMedia('only screen and (max-width: 767px)').matches) {
						$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
						$('.equalize.sm-equalize-auto').children().css("height", "");
						return false;
					} else if (matchMedia('only screen and (max-width: 991px)').matches) {
						$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
						$('.equalize.sm-equalize-auto').children().css("height", "");
						return false;
					} else if (matchMedia('only screen and (max-width: 1199px)').matches) {
						$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
						return false;
					} else {
						$('.equalize').equalize({ equalize: 'outerHeight', reset: true });
					}
				});
			}, 500);
		});
	};

	var menu_Mobile = function () {

		const body = $('body');
		const mobileMenu = $('.mobile-menu');
		const mobileMenuBody = mobileMenu.children('.mobile-menu__body');

		if (mobileMenu.length) {
			const open = function () {
				const bodyWidth = body.width();
				body.css('overflow', 'hidden');
				body.css('paddingRight', (body.width() - bodyWidth) + 'px');

				mobileMenu.addClass('mobile-menu--open');
			};
			const close = function () {
				body.css('overflow', 'auto');
				body.css('paddingRight', '');

				mobileMenu.removeClass('mobile-menu--open');
			};

			$('.mobile-header__menu-button').on('click', function () {
				open();
			});
			$('.mobile-menu__backdrop, .mobile-menu__close').on('click', function () {
				close();
			});
		}

		const panelsStack = [];
		let currentPanel = mobileMenuBody.children('.mobile-menu__panel');

		mobileMenu.on('click', '[data-mobile-menu-trigger]', function (event) {
			const trigger = $(this);
			const item = trigger.closest('[data-mobile-menu-item]');
			let panel = item.data('panel');

			if (!panel) {
				panel = item.children('[data-mobile-menu-panel]').children('.mobile-menu__panel');

				if (panel.length) {
					mobileMenuBody.append(panel);
					item.data('panel', panel);
					panel.width(); // force reflow
				}
			}

			if (panel && panel.length) {
				event.preventDefault();

				panelsStack.push(currentPanel);
				currentPanel.addClass('mobile-menu__panel--hide);');

				panel.removeClass('mobile-menu__panel--hidden');
				currentPanel = panel;
			}
		});
		mobileMenu.on('click', '.mobile-menu__panel-back', function () {
			currentPanel.addClass('mobile-menu__panel--hidden');
			currentPanel = panelsStack.pop();
			currentPanel.removeClass('mobile-menu__panel--hide');
		});
	};

	var flatColor = function () {
		$(window).on('load resize', function () {
			$('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				slideshow: false,
				itemWidth: 30,
				itemMargin: 10,
				asNavFor: '#slider',
				directionNav: false
			});
			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				slideshow: false,
				directionNav: false,
				sync: "#carousel"
			});
		});
	};

	var flatRetinaLogo = function () {
		var retina = window.devicePixelRatio > 1 ? true : false;
		var $logo = $('#logo img');
		var $logo_retina = $logo.data('retina');

		if (retina && $logo_retina) {
			$logo.attr({
				src: $logo.data('retina'),
				width: $logo.data('width'),
				height: $logo.data('height')
			});
		}
	};

	var spacer = function () {
		$(window).on('load resize', function () {
			var mode = 'desktop';

			if (matchMedia('only screen and (max-width: 991px)').matches)
				mode = 'mobile';

			if (matchMedia('only screen and (max-width: 767px)').matches)
				mode = 'smobile';

			$('.flat-spacer').each(function () {
				if (mode == 'desktop') {
					$(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
				} else if (mode == 'mobile') {
					$(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
				} else {
					$(this).attr('style', 'height:' + $(this).data('smobi') + 'px')
				}
			})

		});
	};

	var removePreloader = function () {
		$(window).on("load", function () {
			$(".loader").fadeOut();
			$("#loading-overlay").delay(500).fadeOut('slow', function () {
				$(this).remove();
			});
		});
	};

	// Dom Ready
	$(function () {
		headerFixed();
		flatOwl();
		googleMap();
		quantity_adjust();
		priceFilter();
		flexProduct();
		taboutsie();
		flatTabs();
		customSelect();
		sidebarcategory();
		countDownTime();
		parallax();
		VideoPopup();
		goTop();
		dropcart();
		flatEqualizeHeight();
		menu_Mobile();
		flatColor();
		flatRetinaLogo();
		spacer();
		removePreloader();
	});
})(jQuery);
