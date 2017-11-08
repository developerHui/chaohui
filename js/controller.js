/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.controller('bannerController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
	console.log('测试路由和控制器');
	var btnY = $('#rotY'),
    	cont = $('#cont'),
    	btnX = $('#rotX'),
    	revrsePic = $('#pic3'),
    	degY = 0,
    	degX = 0;
    console.log(btnY)
    btnY.on('click',function(){
        var timer = setInterval(function(){
        	degY += 90;
        	revrsePic[0].style.transform = 'rotateY(180deg) translateZ(100px)';
       		cont[0].style.transform = 'rotateY('+ degY +'deg)';
       		if(degY % 360 == 0){
       			degY = 0;
       			clearInterval(timer);
       			btnX.trigger('click');
       		}
        },2500)
    });
    btnX.on('click',function(){
        var timer = setInterval(function(){
        	degX += 90;
	        cont[0].style.transform = 'rotateX('+ degX +'deg)';
	        if(degX == 180){
	        	revrsePic[0].style.transform = 'rotateX(180deg) translateZ(100px)';
	        }
	        if(degX % 360 == 0){
	        	degX = 0;
	        	clearInterval(timer);
       			btnY.trigger('click');
	        }
        },2500)
    });
    // btnY.trigger('click');
}]);