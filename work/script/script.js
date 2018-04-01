'use strict'
console.log(1.5);


$(".icon_nav").click( function() {
 
	$(".popup_wrap").toggleClass("active");

});
$(".popup-nav .nav_item").eq(0).click( function() {
 
	$(".popup_wrap").toggleClass("active");

});


$(".skils_item").click( function() {
 	var i = $(this).index();
	$(".skils_item .skils_item_text")
		.eq(i).toggle( 600, function() {
    	$(".skils_item")
		.eq(i).toggleClass("active");
  });;

});


var count = 0;
$(".wrap_s_b").click( function(e) {
	var target = e.target;
	var w = $(".sld_item").eq(1).position().left;
	var w_w = $(".sld_list").eq(0).width() - $(".slider").eq(0).width();
	var sign;

	if ( $(target).hasClass("r")) {
	console.log("left");
	count = count + w;
	sign = "-";
	if (count > w_w) {
		count = w_w;
	}


	}
	if ($(target).hasClass("l")) {
	console.log("right");
	count = count - w;
	sign = "+";
	if (count < 0) {
		count = 0;
	}
	} 
	var q = "-"+count + "px";
	var end = $(".sld_item:last").position().left ;
	console.log(end);
	$('.sld_list').css( 'left', q );
});
// $(".s_b.r").click( function() {
 
// 	toLeft("+");

// });

function 	toLeft (sign) {
	var w = $(".sld_item").eq(1).position().left;
	var end = $(".sld_item:last").position().left ;
	var w_list = $(".slider").eq(0).width();
	
	var a = $('.sld_list').css( "left");
	var b = w_list - w - end;

	$('.sld_list').css( "left", sign+"="+w );

	// if ( ( parseInt(a) ) < (b) ) {
	// 	 $('.sld_list').css( "left", b );
	// 	console.log(1);
	// } 
}











$(".testmon_list").click( function() {
 	
	
	//$("testmon_item").eq(0).css( "left", "-=770" );
	var timer = setInterval(function () {
		$(".testmon_item.a").eq(0).css( "left", "-=1000");
		if ( parseInt($(".testmon_item.a").eq(0).css( "left")) < -1000 ) {
			console.log("stop");
			clearInterval(timer);

	$( ".testmon_item" ).each(function() {
		var t = this;
  		if ( $(t).hasClass("a") ) {
		$(t).addClass("c").removeClass("a");
			return;
  		}
  		if ( $(t).hasClass("b") ) {
		$(t).addClass("a").removeClass("b");
			return;
  		}
  		if ( $(t).hasClass("c") ) {
			$(t).addClass("b").removeClass("c");
			return;
  		}	
	}); 
	$(".testmon_item").removeAttr("style");


		}
		
		
	},20);
	

	

	 //setTimeout(function () {$(".testmon_item").removeAttr("style")},2000);
});



function tooltype(elem,valid) {

	if (valid) {
		elem.classList.remove("error");
		var span = elem.parentNode.querySelector('span') ;
		if (span) {
		elem.parentNode.removeChild(span);
		}
	} else {
	elem.classList.add("error");
	
	var span = elem.parentNode.querySelector('span') || document.createElement('span');
		span.classList.add("tooltype");
		span.innerHTML = "Заполните эту строку!";
		elem.parentNode.insertBefore(span,elem);

	}
};





$("#send").click( function(event) { 
		event.preventDefault();
	var input = document.getElementsByClassName('input');
	[].forEach.call(input,function(item, i, arr) {
	if (item.value == 0) {
		tooltype(item,false);
	}	else {
		tooltype(item,true);

	}
  	
});
});