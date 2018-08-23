/*
* @Author: Administrator
* @Date:   2018-06-15 18:54:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-01 21:44:24
*/

'use strict';

$(document).ready(function(){
	//侧边栏固定
	$(window).scroll(function(){
		if($(window).scrollTop()>$('.homepage').offset().top){
			$('.nav').css({'top': 120});
		}else{
			$('.nav').css({'top': 230});
		}


		if($('.documentary').offset().top < $(window).scrollTop()){
			$('.nav li').eq(16).addClass('col');
			$('.nav li').eq(16).siblings().removeClass('col');
		}else if($('.television').offset().top < $(window).scrollTop()){
			$('.nav li').eq(15).addClass('col');
			$('.nav li').eq(15).siblings().removeClass('col');
		}else if($('.tvplay').offset().top < $(window).scrollTop()){
			$('.nav li').eq(14).addClass('col');
			$('.nav li').eq(14).siblings().removeClass('col');
		}else if($('.film').offset().top < $(window).scrollTop()){
			$('.nav li').eq(13).addClass('col');
			$('.nav li').eq(13).siblings().removeClass('col');
		}else if($('.entertainment').offset().top < $(window).scrollTop()){
			$('.nav li').eq(12).addClass('col');
			$('.nav li').eq(12).siblings().removeClass('col');
		}else if($('.advertising').offset().top < $(window).scrollTop()){
			$('.nav li').eq(11).addClass('col');
			$('.nav li').eq(11).siblings().removeClass('col');
		}else if($('.fashion').offset().top < $(window).scrollTop()){
			$('.nav li').eq(10).addClass('col');
			$('.nav li').eq(10).siblings().removeClass('col');
		}else if($('.kichiku').offset().top < $(window).scrollTop()){
			$('.nav li').eq(9).addClass('col');
			$('.nav li').eq(9).siblings().removeClass('col');
		}else if($('.life').offset().top < $(window).scrollTop()){
			$('.nav li').eq(8).addClass('col');
			$('.nav li').eq(8).siblings().removeClass('col');
		}else if($('.science').offset().top < $(window).scrollTop()){
			$('.nav li').eq(7).addClass('col');
			$('.nav li').eq(7).siblings().removeClass('col');
		}else if($('.game').offset().top < $(window).scrollTop()){
			$('.nav li').eq(6).addClass('col');
			$('.nav li').eq(6).siblings().removeClass('col');
		}else if($('.dance').offset().top < $(window).scrollTop()){
			$('.nav li').eq(5).addClass('col');
			$('.nav li').eq(5).siblings().removeClass('col');
		}else if($('.music').offset().top < $(window).scrollTop()){
			$('.nav li').eq(4).addClass('col');
			$('.nav li').eq(4).siblings().removeClass('col');
		}else if($('.guochuang').offset().top < $(window).scrollTop()){
			$('.nav li').eq(3).addClass('col');
			$('.nav li').eq(3).siblings().removeClass('col');
		}else if($('.muscovy').offset().top < $(window).scrollTop()){
			$('.nav li').eq(2).addClass('col');
			$('.nav li').eq(2).siblings().removeClass('col');
		}else if($('.animation').offset().top < $(window).scrollTop()){
			$('.nav li').eq(1).addClass('col');
			$('.nav li').eq(1).siblings().removeClass('col');
		}else if($('.live').offset().top < $(window).scrollTop()){
			$('.nav li').eq(0).addClass('col');
			$('.nav li').eq(0).siblings().removeClass('col');
		}else{
			$('.nav li').removeClass('col');
		}
	})
	$('.nav li').click(function(){
		if($(this).index() == 0){
			$('html,body').animate({'scrollTop': $('.live').offset().top+30},666);
		}else if($(this).index() == 1){
			$('html,body').animate({'scrollTop': $('.animation').offset().top+30},666)
		}else if($(this).index() == 2){
			$('html,body').animate({'scrollTop': $('.muscovy').offset().top+30},666)
		}else if($(this).index() == 3){
			$('html,body').animate({'scrollTop': $('.guochuang').offset().top+30},666)
		}else if($(this).index() == 4){
			$('html,body').animate({'scrollTop': $('.music').offset().top+30},666)
		}else if($(this).index() == 5){
			$('html,body').animate({'scrollTop': $('.dance').offset().top+30},666)
		}else if($(this).index() == 6){
			$('html,body').animate({'scrollTop': $('.game').offset().top+30},666)
		}else if($(this).index() == 7){
			$('html,body').animate({'scrollTop': $('.science').offset().top+30},666)
		}else if($(this).index() == 8){
			$('html,body').animate({'scrollTop': $('.life').offset().top+30},666)
		}else if($(this).index() == 9){
			$('html,body').animate({'scrollTop': $('.kichiku').offset().top+30},666)
		}else if($(this).index() == 10){
			$('html,body').animate({'scrollTop': $('.fashion').offset().top+30},666)
		}else if($(this).index() == 11){
			$('html,body').animate({'scrollTop': $('.advertising').offset().top+30},666)
		}else if($(this).index() == 12){
			$('html,body').animate({'scrollTop': $('.entertainment').offset().top+30},666)
		}else if($(this).index() == 13){
			$('html,body').animate({'scrollTop': $('.film').offset().top+30},666)
		}else if($(this).index() == 14){
			$('html,body').animate({'scrollTop': $('.tvplay').offset().top+30},666)
		}else if($(this).index() == 15){
			$('html,body').animate({'scrollTop': $('.television').offset().top+30},666)
		}else if($(this).index() == 16){
			$('html,body').animate({'scrollTop': $('.documentary').offset().top+30},666)
		}
	});


	//live_hot
	$('.nav_live').hover(function() {
		$('.live_hot').stop().fadeIn(500);
	}, function() {
		$('.live_hot').stop().fadeOut(500);
	});

	$('.live_hot_left ul li').hover(function() {
		$(this).children('div').stop().fadeIn(300);
	}, function() {
		$(this).children('div').stop().fadeOut(300);
	});


	//phone_erweima
	$('.phone').hover(function() {

		$('.erweima').stop().fadeIn(500);
		$('.erweima').css('top','42px');
	}, function() {
		$('.erweima').stop().fadeOut(500);
	});

	//input框
	$('.mysearch p img').hover(function() {
		$(this).attr('src','img/search_hover.png');
		$('.mysearch input').css('background','#fff');

	}, function() {
		$(this).attr('src','img/search.png');
		$('.mysearch input').css('background','#ebf1f7');
	});

	$('.mysearch input').mouseover(function(event) {
		$(this).css('background','#fff');
	});

	$('.mysearch input').mouseleave(function(event) {
		$(this).css('background','#ebf1f7');
	});

	//people栏目
	$('.peo').hover(function(event) {
		$('.people').stop().fadeIn(600);
	},function(){
		$('.people').stop().fadeOut(600);
	});

	$('.people').mouseenter(function(event) {
		$('.people').stop().fadeIn(600);
	});
	$('.people').mouseleave(function(event) {
		$('.people').stop().fadeOut(600);
	});

	//投稿栏目
	$('.top_nav_right').children('a').eq(0).hover(function(event) {
		$('.tougao').stop().fadeIn(600);
	},function(){
		$('.tougao').stop().fadeOut(600);
	});
	$('.tougao').mouseenter(function(event) {
		$('.tougao').stop().fadeIn(600);
	});
	$('.tougao').mouseleave(function(event) {
		$('.tougao').stop().fadeOut(600);
	});

	
	//轮播图
	var num = 0;
	$('.homepage_left ol li').eq(num).addClass('whie');
	var timer = setInterval(startself,5000);
	function gogo(){	
		if(num == 5){
			$('.homepage_left ul').animate({'left':-440*num}, 500);
			$('.homepage_left ol li').eq(0).addClass('whie');
			$('.homepage_left ol li').eq(0).siblings('li').removeClass('whie');
		}else{
			$('.homepage_left ul').animate({'left':-440*num}, 500);
			$('.homepage_left ol li').eq(num).addClass('whie');
		    $('.homepage_left ol li').eq(num).siblings('li').removeClass('whie');
		}
			
	}
		
	function startself(){
		num =num+1;
		if(num>5){
			num = 0;
			$('.homepage_left ul').css({'left':-440*num});
			num = 1;
		}
		gogo();
	}

	$('.homepage_left ol li').click(function(){
		num = $(this).index();
		gogo();
	})

	$('.left').click(function(){
		num = num-1;
		if(num<0){
			num = 5;
			$('ul').css({'left':-440*num});
			num = 4;
		}
		gogo();
	})
	$('.right').click(function(){
		num = num+1;
		if(num>5){
			num = 0;
			$('ul').css({'left':-440*num});
			num = 1;
		}
		gogo();
		
	})
	$('.homepage_left').mouseenter(function(event) {
		clearInterval(timer);
		$('.more').fadeIn(400);
	});
	$('.homepage_left').mouseleave(function(event) {
		timer = setInterval(startself, 2000);
		$('.more').fadeOut(400);
	});

	//导航
	$('.nav_menu ul>li').hover(function() {
		$(this).children('.drowmenu').css('display','block')
	}, function() {
		$(this).children('.drowmenu').css('display','none')
	});

	//下拉菜单
	$('.drowmenu li').hover(function(event) {
		$(this).children('.span_onshow').css('display', 'inline-block');
	},function(){
		$(this).children('.span_onshow').css('display', 'none');
	});

	$('.square_li').hover(function() {
		// console.log(1);
		$('.square_onshow').css('display', 'block');
	}, function() {
		$('.square_onshow').css('display', 'none');
	});

	$('.square_onshow').hover(function() {
		$('.square_onshow').css('display', 'block');
	},function(){
		$('.square_onshow').css('display', 'none');
	});

	$('.broadcast_li').hover(function() {
		$('.broadcast_onshow').css('display','block');
	}, function() {
		$('.broadcast_onshow').css('display','none');
	});

	$('.broadcast_onshow').hover(function() {
		$('.broadcast_onshow').css('display','block');
	}, function() {
		$('.broadcast_onshow').css('display','none');
	});



	$('.broadcast_onshow li').hover(function() {
		$(this).children('#img_onshow').css('display','block');
	}, function() {
		$(this).children('#img_onshow').css('display','none');
	});	




	//侧边栏nav
	$('.nav .paixu').hover(function() {
		$(this).children('img').attr('src','img/paixu_hover.png');
	}, function() {
		$(this).children('img').attr('src','img/paixu.png');
	});

	$('.nav .huidaodingbu').hover(function() {
		$(this).children('a').children('img').attr('src','img/huidaodingbu_hover.png');
	}, function() {
		$(this).children('a').children('img').attr('src','img/huidaodingbu.png');
	});
	


	//homepage
	$('.homepage_right li').hover(function(event) {
		var oindex = $(this).index();	
		$('.homepage_right div').eq(oindex).show();
		$('.homepage_right li>p').eq(oindex).hide();
		$('.homepage_right div').eq(oindex).children('span').fadeIn();
	},function(event){
		var oindex = $(this).index();	
		$('.homepage_right div').eq(oindex).hide();
		$('.homepage_right li>p').eq(oindex).show();
		$('.homepage_right div').eq(oindex).children('span').fadeOut();
	});

	//extensionleft_botm
	$('.extensionleft_botm li').hover(function() {
		$(this).children('p').css('color','#00a1d6');
		$(this).children('div').stop().fadeIn(400);
	}, function() {
		$(this).children('p').css('color','#555');
		$(this).children('div').stop().fadeOut(400);
	});

	//all_left
	$('.left_top li').click(function() {
		$(this).addClass('left_top_li');
		$(this).siblings('li').removeClass('left_top_li');
		$(this).parents('ul').parents('.left_top').siblings('.left_botm').children('ul').eq($(this).index()).addClass('left_botm_ulshow');
		$(this).parents('ul').parents('.left_top').siblings('.left_botm').children('ul').eq($(this).index()).siblings('ul').removeClass('left_botm_ulshow');
	});
	$('.left_botm ul li').hover(function() {
		$(this).children('p').css('color','#00a1d6');
		$(this).children('span').stop().slideUp(400);
		$(this).children('.left_botm_noshow').stop().fadeIn(400);
	}, function() {
		$(this).children('p').css('color','#555');
		$(this).children('span').stop().slideDown(400);
		$(this).children('.left_botm_noshow').stop().fadeOut(400);
	});

	//all_right
	$('.right_top_cen li').mouseenter(function(event) {
		$(this).addClass('animation_current');
		$(this).siblings('li').removeClass('animation_current');
		$(this).parents('ul').parents('.right_top').siblings('.right_cen').children('ul').eq($(this).index()).addClass('right_cen_ulshow');
		$(this).parents('ul').parents('.right_top').siblings('.right_cen').children('ul').eq($(this).index()).siblings('ul').removeClass('right_cen_ulshow');
	});



	//muscovy 
	$('.muscovy .muscovy_conleft_top ul li').click(function(event) {
		$(this).addClass('muscovycon_current');
		$(this).siblings('li').removeClass('muscovycon_current');
		$('.muscovy .muscovy_conleft_botm ul').eq($(this).index()).addClass('muscovy_ulshow');
		$('.muscovy .muscovy_conleft_botm div').eq($(this).index()).siblings('div').children('ul').removeClass('muscovy_ulshow');
	});


	//guochuang
	$('.guochuang .muscovy_conleft_top ul li').click(function(event) {
		$(this).addClass('muscovycon_current');
		$(this).siblings('li').removeClass('muscovycon_current');
		$('.guochuang .muscovy_conleft_botm ul').eq($(this).index()).addClass('muscovy_ulshow');
		$('.guochuang .muscovy_conleft_botm div').eq($(this).index()).siblings('div').children('ul').removeClass('muscovy_ulshow');
	});


	//liveleft_botm
	$('.liveleft_botm li').hover(function() {
		 $(this).children('span').stop().slideUp(400);
		 $(this).children('p').css('color','#00a1d6');
		var num = ($(this).index()+1)*10+$(this).index()+1;
		if(num>100){
			num = 101;
			var imgsrc = 'img/live/live_'+num+'.png';
		    $(this).children('img').attr('src',imgsrc);

		}else{
			var imgsrc = 'img/live/live_'+num+'.png';
		    $(this).children('img').attr('src',imgsrc);
		}
		
	}, function() {
		$(this).children('span').stop().slideDown(400);
		$(this).children('p').css('color','#555');
		var num = $(this).index()+1;
		if(num>9){
			var imgsrc = 'img/live/live_'+num+'.png';
			$(this).children('img').attr('src',imgsrc);
		}else{
			var imgsrc = 'img/live/live_0'+num+'.png';
			$(this).children('img').attr('src',imgsrc);
		}
		
	});


	//live_right
	$('.liveright_top li').click(function(){
		$(this).attr('class','liverighttop_current');
		$(this).siblings().attr('class','');
		var num = $(this).index();
		$('.liveright_botm ul').animate({'left':-260*num}, 500);
	})

	$('.ankings li').hover(function(event) {
		
		$(this).children('div').children('h5').css('color','#00a1d6');
	},function(){
		$(this).children('div').children('h5').css('color','#333');
	});


	//muscovy_btmright
	var muscovy_num = 0;
	$('.muscovy_btmright_botm ol li').eq(muscovy_num).addClass('list_current');
	$('.muscovy_btmright_botm ol li').eq(muscovy_num).siblings('li').removeClass('list_current');
	var all_timer = setInterval(btmright_start,3000);		
	function btmright_start(){
		muscovy_num =muscovy_num+1;
		if(muscovy_num>1){
			muscovy_num = 0;
		}
		btmright_gogo();		
	};

	function btmright_gogo(){
		$('.muscovy_btmright_botm ol li').eq(muscovy_num).addClass('list_current');
		$('.muscovy_btmright_botm ol li').eq(muscovy_num).siblings('li').removeClass('list_current');
		$('.muscovy_btmright_botm ul').css({'left':-260*muscovy_num});
	};

	$('.muscovy_btmright_botm ol li').mouseenter(function(){
		muscovy_num = $(this).index();
		$('.muscovy_btmright_botm ul').css({'left':-260*muscovy_num});
		$('.muscovy_btmright_botm ol li').eq(muscovy_num).addClass('list_current');
		$('.muscovy_btmright_botm ol li').eq(muscovy_num).siblings('li').removeClass('list_current');
	});

	$('.muscovy_btmright_botm').mouseenter(function(event) {
		clearInterval(all_timer);
	});
	$('.muscovy_btmright_botm').mouseleave(function(event) {
		all_timer = setInterval(btmright_start, 3000);
	});

	//guochuang_btmright
	var guochuang_num = 0;
	$('.guochuang_right_botm ol li').eq(guochuang_num).addClass('list_current');
	$('.guochuang_right_botm ol li').eq(guochuang_num).siblings('li').removeClass('list_current');
	var guochuang_timer = setInterval(guochuang_start,3000);		
	function guochuang_start(){
		guochuang_num =guochuang_num+1;
		if(guochuang_num>1){
			guochuang_num = 0;
		}
		guochuang_gogo();		
	};

	function guochuang_gogo(){
		$('.guochuang_right_botm ol li').eq(guochuang_num).addClass('list_current');
		$('.guochuang_right_botm ol li').eq(guochuang_num).siblings('li').removeClass('list_current');
		$('.guochuang_right_botm ul').css({'left':-260*guochuang_num});
	};

	$('.guochuang_right_btom ol li').mouseenter(function(){
		guochuang_num = $(this).index();
		$('.guochuang_right_botm ul').css({'left':-260*guochuang_num});
		$('.guochuang_right_botm ol li').eq(guochuang_num).addClass('list_current');
		$('.guochuang_right_botm ol li').eq(guochuang_num).siblings('li').removeClass('list_current');
	});

	$('.guochuang_right_botm').mouseenter(function(event) {
		clearInterval(guochuang_timer);
	});
	$('.guochuang_right_botm').mouseleave(function(event) {
		guochuang_timer = setInterval(guochuang_start, 3000);
	});


	//special

	$('.special .left_botm li').mouseover(function() {
		$(this).children('p').css('color','#00a1d6');
	});

	$('.special .left_botm li').mouseout(function() {
		$(this).children('p').css('color','#333');
	});

	$('.special .left_botm li>img').hover(function() {
		$('.special .left_botm li').eq($(this).parent().index()).children('em').children().css('display','block');
	}, function() {
		$('.special .left_botm li').eq($(this).parent().index()).children('em').children().css('display','none');
	});
	$('.special .left_botm em>img').hover(function() {
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('em').children().css('display','block');
	}, function() {
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('em').children().css('display','none');
	});

	$('.special .left_botm li>div img').mouseover(function(){
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('div').children('h5').css('color','#00a1d6');
		return false;
	});
	$('.special .left_botm li>div img').mouseout(function(){
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('div').children('h5').css('color','#333');
	});


	$('.special .left_botm li>div h5').mouseover(function(){
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('div').children('h5').css('color','#00a1d6');
		return false;
	});
	$('.special .left_botm li>div h5').mouseout(function(){
		$('.special .left_botm li').eq($(this).parent().parent().index()).children('div').children('h5').css('color','#333');
	});


	//footer
	$('.check').click(function(){
		if($("input[type='checkbox']").is(':checked')==true){
			$('.iput5').css('background','#00a0da');
			$('.iput5').css('color','#fff');
		}else{
			$('.iput5').css('background','#f9f9f9');
			$('.iput5').css('color','#aaa');
		}
	});
	$('.iphone').mouseenter(function(){
		$('.iphone .bg').css('display','block');
		return false;
	});
	$('.iphone').mouseleave(function(){
		$('.iphone .bg').css('display','none');
		return false;
	});
	$('.weibo').mouseenter(function(){
		$('.weibo .bg').css('display','block');
		return false;
	});
	$('.weibo').mouseleave(function(){
		$('.weibo .bg').css('display','none');
		return false;
	});
	$('.wchat').mouseenter(function(){
		$('.wchat .bc').css('display','block');
		return false;
	});
	$('.wchat').mouseleave(function(){
		$('.wchat .bc').css('display','none');
		return false;
	});
	$('.img1').mouseenter(function(){
		$('.img1').css('display','none')
		$('.img2').css('display','block')
	});






});

