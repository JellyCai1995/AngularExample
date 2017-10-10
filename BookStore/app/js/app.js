import '../css/index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from '@uirouter/angularjs'; 

var app = angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	
	$stateProvider.state('login',{
		url: '/',
		template: require('../modules/login.html'),
		controller: 'login'
	});

	$stateProvider.state('main',{
		url: '/{bookType:[0-9]{1,3}}',
		views: {
			'': {
				template: require('../modules/main.html')
			},
			'type@main': {
				template: require('../modules/type.html')
			},
			'list@main': {
				template: require('../modules/list.html'),
				controller: 'list'
			}
		}
		
	});

});

/**
配置Http
*/
app.config(function($httpProvider){
	$httpProvider.defaults.transformRequest = function(obj){
		var arrStr = [];
		for(var p in obj){ //解析obj中的属性
			arrStr.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
		}
		return arrStr.join("&");
	}
	$httpProvider.defaults.headers.post = {
		"Content-Type":"application/x-www-form-urlencoded"
	}
    $httpProvider.interceptors.push(function($window) {
        return {
          responseError: function(rejection) {
          		if(rejection.status = -1){
          			$window.alert("网络连接异常!");
          		}
            }
        };
    });
});

/**
登录
*/
app.controller('login',function($scope,$http,$state,$window){
	$scope.loginSubmit = function(){
		var postData = {
			type: 'login',
			loginid: $scope.loginid,
			password: $scope.password
		}
		$http({
			method: 'POST',
			url: 'http://127.0.0.1:8080/4.4/book',
			data: postData
		}).then(function(response){
			$scope.loginData = response.data;
			if($scope.loginData.code == 1){//登录成功
				$state.go('main',{bookType:1});
			}else{ //登录失败
				$window.alert("账户或者密码错误!");
			}
		});
	}
});

/**
获取书籍列表
*/
app.controller('list',function($scope,$http,$stateParams){
	var postData = {
		type: 'bookList',
		bookType: $stateParams.bookType
	}
	$http({
		method: 'POST',
		url: 'http://127.0.0.1:8080/4.4/book',
		data: postData
	}).then(function(response){
		$scope.listData = response.data;
	});
});