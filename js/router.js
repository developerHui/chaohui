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
		//前端开发
		.state('frontend',{
			url: '/frontend',
			templateUrl: 'tpls/frontend.html',
			controller: 'frontendController'
		})
		//后端开发
		.state('backend',{
			url: '/backend',
			templateUrl: 'tpls/backend.html',
			controller: 'backendController'
		})
		//移动开发
		.state('mobile',{
			url: '/mobile',
			templateUrl: 'tpls/mobiledev.html',
			controller: 'frontendController'
		})
		//数据库
		.state('database',{
			url: '/database',
			templateUrl: 'tpls/database.html',
			controller: 'frontendController'
		})
		//云计算&大数据
		.state('clouddata',{
			url: '/clouddata',
			templateUrl: 'tpls/clouddata.html',
			controller: 'frontendController'
		})
		//运维&测试
		.state('test',{
			url: '/test',
			templateUrl: 'tpls/frontend.html',
			controller: 'testController'
		})
		//UI设计
		.state('design',{
			url: '/design',
			templateUrl: 'tpls/design.html',
			controller: 'designController'
		})
}]);