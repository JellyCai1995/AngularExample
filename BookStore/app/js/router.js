import uirouter from '@uirouter/angularjs'; 

var approuter = angular.module('router', ['ui.router']);

approuter.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	
	$stateProvider.state('login',{
		url: '/',
		template: require('../modules/user/template/login.html'),
		controller: 'login'
	});

	$stateProvider.state('reg',{
		url: '/reg',
		template: require('../modules/user/template/register.html'),
		controller: 'reg'
	});
	
	$stateProvider.state('bookdetail',{
		url: '/bookdetail/{bookid:[0-9]{1,3}}',
		template: require('../modules/bookdetail/template/bookdetail.html'),
		controller: 'bookdetail'		
	});

	$stateProvider.state('main',{
		url: '/{bookType:[0-9]{1,3}}',
		views: {
			'': {
				template: require('../modules/bookshelf/template/main.html')
			},
			'type@main': {
				template: require('../modules/bookshelf/template/type.html'),
				controller: 'type'
			},
			'list@main': {
				template: require('../modules/bookshelf/template/list.html'),
				controller: 'list'
			},
			'nav@main': {
				template: require('../modules/bookshelf/template/nav.html')
			}
		}
		
	});

});