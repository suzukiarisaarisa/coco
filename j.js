// JavaScript Document
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-70;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
    var scrollPoint = 80;
    $(window).scroll(function(){
        if($(this).scrollTop() > scrollPoint){
            $('.fixed_header').fadeIn();
        }else{
            $('.fixed_header').fadeOut();
        }
    });
});


$(function(){
	const hum = $('.spmenu div, .sp-nav div a,.close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
   nav.toggleClass('toggle');
});
});
