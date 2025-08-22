/*scroll active*/
//scroll/scrolltop()/offset()을 사용해서 스크롤 시 css.animation html.class'on'추가
$(window).scroll(function () {
	var win_top = $(window).scrollTop()
	var win_h = $(window).height()

	$('.circle,.circle1,.bg4,p,.con2,.con1,img,.title').each(function () {
		var box_top = $(this).offset().top
		if (win_top >= box_top - 700) {
			$(this).addClass('on')
		}
	});
	
});
$(document).ready(function () {

	// js/jquery.js (토글 핸들러 보강)
	$('.navbtn').attr({
	'aria-expanded': 'false',
	'aria-controls': 'global-nav'
	});

	$('.gnb').attr({
	'id': 'global-nav',
	'aria-hidden': 'true'
	});

	$('.navbtn').on('click', function() {
	const $btn = $(this);
	const $menu = $('.gnb');
	const isOpen = $btn.attr('aria-expanded') === 'true';

	$menu.fadeToggle(500);
	$btn.toggleClass('open')
		.attr('aria-expanded', String(!isOpen));
	$menu.attr('aria-hidden', String(isOpen));

	if (!isOpen) {
		// 열릴 때 메뉴 첫 링크로 포커스 이동
		$menu.find('a').first().focus();
	} else {
		// 닫히면 트리거 버튼으로 포커스 복귀
		$btn.focus();
	}
	});

	//autogallery ->fade
	//function()함수/if()조건문/setInterval()반복 실행으로 autogallery구현
	//jQuery Effect Methods fadeIn()/siblings()/fadeOut()/addClass()/siblings()/removeClass()를 사용해서 클릭시 보이고 그외 숨기기
	var galleryli = $('.gallery>ul>li');
	var idx = -1;
	var itemsli = $('.items>ul>li')

	function autogallery() {
		if (idx >= galleryli.length - 1) idx = -1; 
		idx++;
		//12340순서
		galleryli.eq(idx).fadeIn().siblings().fadeOut();
		itemsli.eq(idx).addClass('on').siblings().removeClass('on');
		if (idx >= galleryli.length - 1) idx = -1; 
	}
	var setin = setInterval(autogallery, 3000); 

	//items 
	itemsli.on('click', itemslifunc);
	function itemslifunc() {
		var thisidx = $(this).index();
		galleryli.eq(thisidx).fadeIn(400).siblings().fadeOut();
		$(this).addClass('on').siblings().removeClass('on');
		idx = thisidx;
	}
});
