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

	/*menu*/
	//toggleClass()/fadeToggle 사용해서 menu버튼 동적효과 적용 
	$('.navbtn').click(function () {
		$('.gnb').fadeToggle(500)
		$('.navbtn').toggleClass('open')
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
