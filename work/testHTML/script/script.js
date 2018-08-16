'use strict'
console.log(1.5);


var sld_btn_l = document.getElementById('sld_btn_l');
var sld_btn_r = document.getElementById('sld_btn_r');
var sld = document.getElementById('sld_list_img');
var wsld = document.getElementById('range');

var anim = true;

var nameShoes = ["TY","CAMYLLE","NOEL","EMME","MAX","NAT","ROAN"]
var counter = 1;
sld_btn_r.onclick = function () {
	var actImg = sld.querySelector(".range_img.change.active");
	var nextImg = actImg.nextElementSibling;

	if (!nextImg || !anim) {
		return
	}
	// nextImg.style.left = "0px";
	// actImg.classList.remove("active");
	// nextImg.classList.add("active");
	// console.log(nextImg.style.left,"l");
	anim = false;
	var w = nextImg.offsetWidth;
	var wAct = 0;
	var timerId = setInterval(function () {
		nextImg.style.left = w - (nextImg.offsetWidth/50) + "px";
		actImg.style.left = (wAct - (actImg.offsetWidth/50)) + "px";

		w = w - (nextImg.offsetWidth/50);
		wAct = wAct - (actImg.offsetWidth/50);

	if (w < 0 ) {
		nextImg.style.left = "0px";
		actImg.style.left = "-" + actImg.offsetWidth + "px";

		actImg.classList.remove("active");
		nextImg.classList.add("active");
		
		clearTimeout(timerId);

		counter++;
		wsld.querySelector("div.range_footer_header").innerHTML = nameShoes[counter-1];
		wsld.querySelector(".range_footer_count .var_count").innerHTML = counter;
		anim = true;
	}
	}, 20);
}


sld_btn_l.onclick = function () {
	var actImg = sld.querySelector(".range_img.change.active");
	var prevImg = actImg.previousElementSibling;

	if (!prevImg || !anim) {
		return
	}
	anim = false;
	// actImg.style.left = actImg.offsetWidth+"px";
	// actImg.classList.remove("active");
	// prevImg.classList.add("active");
	// console.log(prevImg.style.left);

	var w = parseInt(prevImg.style.left);
	var wAct = 0;
	var timerId = setInterval(function () {
		prevImg.style.left = w + (prevImg.offsetWidth/50) + "px";
		actImg.style.left = (wAct + (actImg.offsetWidth/50)) + "px";

		w = w + (prevImg.offsetWidth/50);
		wAct = wAct + (actImg.offsetWidth/50);

	if (w > 0 ) {
		prevImg.style.left = "0px";
		actImg.style.left = actImg.offsetWidth + "px";

		actImg.classList.remove("active");
		prevImg.classList.add("active");

		

		clearTimeout(timerId);

		counter--;
		wsld.querySelector(".range_footer_header").innerHTML = nameShoes[counter-1];
		wsld.querySelector(".range_footer_count .var_count").innerHTML = counter;
		anim = true;
	}
	}, 20);

}



var form = document.getElementsByClassName('reg_form');

for (var i = 0; i < form.length; i++) {
	form[i].addEventListener('click', validateForm);
}

function validateForm(e) {

	if (e.target.classList.contains("reg_submit")) {
		var input = this.querySelectorAll(".reg_email");

		for (var i = 0; i < input.length; i++) {
	     if (input[i].value == "" ) {

	        if (!input[i].parentElement.querySelector(".popup")) {
	            var div = document.createElement('div');
	            div.classList.add("popup");
	            div.innerHTML = "Please, fill in this field";
	            input[i].parentElement.insertBefore(div, input[i]);
	        }

	        

	        input[i].classList.add("err");
	        } else {
	            input[i].classList.remove("err");
	           
	            if (input[i].parentElement.querySelector(".popup")) {
	                input[i].parentElement.removeChild(input[i].parentElement.querySelector(".popup"));
	            }
	        }
	    }
	    e.preventDefault();
    }
};

var sections = document.querySelectorAll("section");
var navList = document.querySelectorAll(".nav_list .nav_item");
var nav = document.querySelector("#nav_list");

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //console.log(scrolled);

  for (var i = 0; i < sections.length; i++) {

  	if(scrolled > sections[i].offsetTop) {

  		nav.querySelector(".nav_item.active").classList.remove("active");
		navList[i].classList.add("active");
  	}
  }
}