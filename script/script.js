console.log(1.5);
var anim = false;
var mainMenu = document.getElementById('main_menu');
var bot_scroll = document.getElementById('bot_scroll');
var about = document.getElementById('about');

bot_scroll.onclick = function(e) {
    if (anim) { e.preventDefault(); return };
    anim = true;
    var menuHeight = mainMenu.offsetHeight;
    var scrollHeight = document.getElementById('about').offsetTop;
    var timerId = setInterval(function() {
        var pageCurrentScroll = window.pageYOffset || document.documentElement.scrollTop;
        var i = 10;

        if (pageCurrentScroll > scrollHeight - menuHeight) {
            clearInterval(timerId);
            anim = false;
        }

        window.scrollBy(0, i);
    }, 20);
    e.preventDefault();
};
mainMenu.addEventListener('click', scrollToPage);

function scrollToPage(e) {
    if (anim) { e.preventDefault(); return };

    var target = e.target;
    if (!target.getAttribute('data-scroll')) { return; }

    var scrollHeight = 0;
    var pageCurrentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var menuHeight = mainMenu.offsetHeight;
    switch (target.getAttribute('data-scroll')) {
        case 'about':
            {
                scrollHeight = document.getElementById('about').offsetTop;
                console.log(scrollHeight);
                break;
            }
        case 'work':
            {
                scrollHeight = document.getElementById('work').offsetTop;
                break;

            }
        case 'contact':
            {
                scrollHeight = document.getElementById('contact').offsetTop;
                break;
            }

        default:
            scrollHeight = 0;
    }

    if (pageCurrentScroll > scrollHeight) {

        anim = true;
        var timerId = setInterval(function() {
            var pageCurrentScroll = window.pageYOffset || document.documentElement.scrollTop;
            var i = -10;

            if (pageCurrentScroll <= scrollHeight) {

                clearInterval(timerId);
                anim = false;
            }

            window.scrollBy(0, i);
        }, 20);
    } else {

        anim = true;
        var timerId = setInterval(function() {
            var pageCurrentScroll = window.pageYOffset || document.documentElement.scrollTop;
            var i = 10;

            if (pageCurrentScroll > scrollHeight - menuHeight) {
                clearInterval(timerId);
                anim = false;
            }

            window.scrollBy(0, i);
        }, 20);
    }


    console.log(target);
    e.preventDefault();
}


var workList = document.getElementById('work_list');

workList.addEventListener('click', selectCard);


function selectCard(e) {
    var target = e.target;
    if (!target.getAttribute('data-select')) { return; }

    var arrReact = [document.getElementById('second_work'), ];
    var arrCss = [document.getElementById('first_work'), ];
    var arrAll = document.getElementsByClassName('work_item');


    switch (target.getAttribute('data-select')) {
        case 'all':
            {
                for (var i = 0; i < arrAll.length; i++) {
                    arrAll[i].style.display = "block";
                }

                break;
            }
        case 'react':
            {
                for (var i = 0; i < arrAll.length; i++) {
                    arrAll[i].style.display = "none";
                }
                for (var i = 0; i < arrReact.length; i++) {
                    arrReact[i].style.display = "block";
                }

                break;

            }
        case 'css':
            {
                for (var i = 0; i < arrAll.length; i++) {
                    arrAll[i].style.display = "none";
                }
                for (var i = 0; i < arrCss.length; i++) {
                    arrCss[i].style.display = "block";
                }
                break;
            }

        case 'js':
            {

                break;
            }
    }
}


var submit = document.getElementsByClassName('input_submit');

submit[0].addEventListener('click', validateForm);

function validateForm(e) {
	var input = document.getElementsByClassName('input_name');
	
};