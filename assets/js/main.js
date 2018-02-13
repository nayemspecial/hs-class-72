(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".video-play-btn").magnificPopup({
			type:'video'
		});

        $(".counter-number span").counterUp({
            delay: 10,
            time: 1000
        });
        
    });


    jQuery(window).load(function(){
		
		
    });


}(jQuery));	