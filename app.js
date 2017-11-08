/*
*	data: 2017/08/22
*	author: zhangchaohui
*/
var testproject = angular.module('huiproject',['ui.router']);

// yuejuanyi.run(['$rootScope', '$state', '$stateParams','$templateCache', '$location', '$http', 'commonHttpService', 'commonService', function($rootScope, $state, $stateParams, $templateCache, $location, $http, commonHttpService, commonService){
// 	$rootScope.$state = $state;
// 	$rootScope.$stateParams = $stateParams;

// }]);
huiproject.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('banner',{
			url: '/banner',
			templateUrl: '/tpls/square-banner.html',
			controller: 'bannerController'
		})
}])