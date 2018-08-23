/*
* @Author: Administrator
* @Date:   2018-06-15 18:54:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-19 20:12:39
*/

'use strict';

$(document).ready(function(){


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


});

