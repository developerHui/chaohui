/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('banner',{
			url: '/banner',
			templateUrl: 'tpls/square-banner.html',
			controller: 'bannerController'
		})
}]);