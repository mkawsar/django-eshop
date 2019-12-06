// Revolution Slider
var RevSlider = function () {
	"use strict";
	// Slider 1 ( Simple )
	var handleRevSliderLayout1 = function () {
		var tpj = jQuery,
			revapi1;
		tpj(document).ready(function () {
			if (tpj("#rev-slider1").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider1");
			} else {
				revapi1 = tpj("#rev-slider1").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "auto",
					fullWidth: "on",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: false,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: true,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "right",
							v_align: "center",
							h_offset: 92,
							v_offset: -33,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1183, 975, 750],
					gridwidth: [1170, 970, 760, 320],
					gridheight: [921, 860, 600, 500],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$('#rev-slider1').find('.tp-bullets').attr('dir', 'rtl');
				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	// Slider 2 ( Simple )
	var handleRevSliderLayout2 = function () {
		var tpj = jQuery,
			revapi2;
		tpj(document).ready(function () {
			if (tpj("#rev-slider2").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider2");
			} else {
				revapi2 = tpj("#rev-slider2").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "none",
					fullWidth: "on",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: true,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: false,
							tmp: '',
							left: {
								h_align: "right",
								v_align: "bottom",
								h_offset: 110,
								v_offset: 50
							},
							right: {
								h_align: "right",
								v_align: "bottom",
								h_offset: 90,
								v_offset: 50
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "right",
							v_align: "center",
							h_offset: 92,
							v_offset: -33,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1183, 975, 750],
					gridwidth: [1170, 970, 760, 320],
					gridheight: [921, 860, 600, 400],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$('#rev-slider2').find('.tp-bullets').attr('dir', 'rtl');
				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	var handleRevSliderLayout3 = function () {
		var tpj = jQuery,
			revapi3;
		tpj(document).ready(function () {
			if (tpj("#rev-slider3").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider3");
			} else {
				revapi3 = tpj("#rev-slider3").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "none",
					fullWidth: "on",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: false,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: true,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "left",
							v_align: "center",
							h_offset: 92,
							v_offset: -10,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1183, 975, 750],
					gridwidth: [1170, 970, 760, 320],
					gridheight: [921, 860, 700, 600],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	var handleRevSliderLayout4 = function () {
		var tpj = jQuery,
			revapi4;
		tpj(document).ready(function () {
			if (tpj("#rev-slider4").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider4");
			} else {
				revapi4 = tpj("#rev-slider4").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "none",
					fullWidth: "on",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: true,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: false,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 50,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 50,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "right",
							v_align: "bottom",
							h_offset: 92,
							v_offset: 120,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1183, 975, 750],
					gridwidth: [1170, 970, 760, 320],
					gridheight: [921, 860, 600, 550],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$('#rev-slider4').find('.tp-bullets').attr('dir', 'rtl');
				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	var handleRevSliderLayout5 = function () {
		var tpj = jQuery,
			revapi5;
		tpj(document).ready(function () {
			if (tpj("#rev-slider5").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider5");
			} else {
				revapi5 = tpj("#rev-slider5").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "none",
					fullWidth: "off",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: false,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: true,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: false,
							direction: "horizontal",
							h_align: "right",
							v_align: "bottom",
							h_offset: 92,
							v_offset: 120,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1920, 1183, 975, 750],
					gridwidth: [1170, 700, 970, 760, 320],
					gridheight: [921, 921, 860, 700, 600],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$('#rev-slider5').find('.tp-bullets').attr('dir', 'rtl');
				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	var handleRevSliderLayout6 = function () {
		var tpj = jQuery,
			revapi6;
		tpj(document).ready(function () {
			if (tpj("#rev-slider6").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev-slider6");
			} else {
				revapi6 = tpj("#rev-slider6").show().revolution({

					jsFileLocation: "rev-slider/js/",
					sliderType: "standard",
					sliderLayout: "none",
					fullWidth: "on",
					dottedOverlay: "none",
					delay: 6000,
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation: "off",
						onHoverStop: "off",
						touch: {
							touchenabled: "on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							drag_block_vertical: false,
							swipe_direction: "horizontal"
						},
						arrows: {
							style: "custom",
							enable: false,
							hide_onmobile: true,
							hide_under: 768,
							hide_onleave: true,
							tmp: '',
							left: {
								h_align: "left",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							},
							right: {
								h_align: "right",
								v_align: "center",
								h_offset: 0,
								v_offset: 0
							}
						},
						bullets: {
							enable: true,
							hide_onmobile: true,
							style: "custom",
							hide_onleave: true,
							direction: "horizontal",
							h_align: "right",
							v_align: "bottom",
							h_offset: 92,
							v_offset: 90,
							space: 8,
							tmp: ''
						}
					},
					viewPort: {
						enable: true,
						outof: "pause",
						visible_area: "80%"
					},
					responsiveLevels: [2220, 1183, 975, 750],
					gridwidth: [1170, 970, 760, 320],
					gridheight: [936, 860, 700, 600],
					lazyType: "smart",
					parallax: {
						type: "scroll",
						origo: "enterpoint",
						speed: 400,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
					},
					shadow: 0,
					spinner: "off",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					fullScreenOffsetContainer: ".rev-slider-offset",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});

				$('#rev-slider6').find('.tp-bullets').attr('dir', 'rtl');
				$(this).find('.tp-bullet').each(function () {

					var number = $(this).index() + 1;
					if (number < 9) {
						number = '0' + number;
					}
					$(this).append('<span class="number"></span>');
					$(this).children('span').html(number);
				});
			}
		});
	}

	return {
		init: function () {
			handleRevSliderLayout1();
			handleRevSliderLayout2();
			handleRevSliderLayout3();
			handleRevSliderLayout4();
			handleRevSliderLayout5();
			handleRevSliderLayout6();
		}
	}
}();

$(document).ready(function () {
	RevSlider.init();
});
