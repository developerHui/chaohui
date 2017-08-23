/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('test',{
			url: 'index',
			templateUrl: 'index.html'
		})
		.state('test.banner',{
			url: '/banner',
			templateUrl: '/tpls/square-banner.html',
			controller: 'bannerController'
		})
}])