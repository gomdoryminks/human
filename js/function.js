/**
 * @author minks
 */

$(function() {
    //상위 메뉴 밑의 하위 메뉴 보이기&숨기기
	$('nav.nav .top_menu>li').on("mouseover", function(evt) {
		evt.preventDefault();
        $('nav.nav .top_menu>li .top_sub_menu').css("display","none");
        $(this).children('.top_sub_menu').css("display","block");
        $(this).children('.top_sub_menu').stop(true,true).slideDown(200);
	});
	
	$('nav.nav .top_menu>li').on("mouseleave", function(evt) {
		evt.preventDefault();
        $(this).children('.top_sub_menu').stop(true,true).slideUp(200);
	});
	
	$('.mb_area .mb_box .top_menu>li .top_menu_tit').click(function() {
		if ($(this).next('.top_sub_menu').css("display") == "block") {
			$(this).next('.top_sub_menu').stop(true,true).slideUp();
			$(this).removeClass("rotate");
			return false;
		} else {
			$('.mb_area .mb_box .top_menu>li .top_sub_menu').slideUp();
            $('.mb_area .mb_box .top_menu>li .top_menu_tit').removeClass("rotate");
			$(this).next('.top_sub_menu').stop(true,true).slideDown();		
			$(this).addClass("rotate");
			return false;
		}
	});
    
	//모바일 슬라이드 메뉴 보이기&숨기기
	$('.mb_area .mb_btn').click(function() {
		if ($('.mb_area .mb_menu').css("display") == "none") {
			$('.mb_area .mb_menu').css('display','block');
			$('.mb_area .mb_menu').css('z-index','999');
			$('.mb_area .mb_box').css('left','0px');
			$('.mb_area .line1').addClass('line11');
			$('.mb_area .line2').addClass('line22');
			$('.mb_area .line3').addClass('line33');
			//$('body').css('overflow','hidden');
		} else {
			$('.mb_area .mb_menu').css('display','none');
			$('.mb_area .mb_menu').css('z-index','-1');
			$('.mb_area .mb_box').css('left','-300px');
			$('.mb_area .line1').removeClass('line11');
			$('.mb_area .line2').removeClass('line22');
			$('.mb_area .line3').removeClass('line33');
			//$('body').css('overflow','scroll');
		}
	});
	
	//swiper 이미지 슬라이드 (메인)
	var swiper = new Swiper('.swiper-container-main', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.main_slide_pagination',
            clickable: true,
        },
        watchOverflow: true
    });
    
    //swiper 이미지 슬라이드 (이달의책)
    var swiper = new Swiper('.swiper-container-book', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        navigation: {
            prevEl: '.main_book_slide_btn_prev',
            nextEl: '.main_book_slide_btn_next',
            clickable: true,
        },
        pagination: {
            el: '.main_book_slide_pagination',
            type: 'fraction',
            clickable: true,
        },
        watchOverflow: true
    });
});

