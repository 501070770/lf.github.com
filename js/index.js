(function() {
	//添加导航
	(function() {
		var oNav = document.querySelector('#nav');
		var aSpan = oNav.querySelectorAll('.swiper-pagination-bullet');
		var arrNavP = ['Home', 'WebKnow', 'MyCase', 'AboutMe'];
		var arrNavD = ['首页', '前端知识', '我的作品', '关于本人'];
		for(var i = 0; i < aSpan.length; i++) {
			$(aSpan[i]).addClass('box');
			aSpan[i].innerHTML = '<p>' + arrNavP[i] + '</p><div class="content">' + arrNavD[i] + '</div>';
		}
	})();
	//调用swiper插件
	(function() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true
		});
	})();
	//我的案例，添加鼠标移入移出动画效果
	(function() {
		var aA = document.querySelectorAll('.con a');
		var aShade = document.querySelectorAll('.shade');
		for(var i = 0; i < aA.length; i++) {
			(function(index) {
				aA[i].onmouseenter = function() {
					for(var j = 0; j < aShade.length; j++) {
						aShade[j].className = 'shade';
					}
					aShade[index].className = 'shade shade1';
				}
				aA[i].onmouseleave = function() {
					for(var j = 0; j < aShade.length; j++) {
						aShade[j].className = 'shade';
					}
					aShade[index].className = 'shade shade2';
				}
			})(i);
		}
	})();
	//为 我的案例 最后一个li添加高度
	(function() {
		var liH = document.querySelector('.case li').offsetHeight;
		document.querySelector('.case li:last-child').style.height = liH + 'px';
	})();
	//为 前端开发 最后一个li添加高度
	(function() {
		var liH = document.querySelector('.web li').offsetHeight;
		document.querySelector('.web .fr li:last-child').style.height = liH + 'px';
	})();
	//首页图片切换效果
	setInterval(function() {
		var oImg = document.querySelector('.home img');
		oImg.src.indexOf('banner1') > 0 ? oImg.src = 'images/banner2.jpg' : oImg.src = 'images/banner1.jpg';
	}, 4000);
})()