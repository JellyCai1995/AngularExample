
var appuser = angular.module('user', []);

/**
注册
*/
appuser.controller('reg',function($scope,$http,$state,$timeout){
	$scope.showWarning = false;
	$scope.showWarningContent = '';

	$scope.regSubmit = function(){
		if($scope.password != $scope.passwordConfirm){
			$scope.showWarningContent = '两次输入的密码不一致！';
			$scope.showWarning = true;
			//2秒后提示消失
			$timeout(function(){
	            $scope.showWarning = false;
	        },2000)
		}

		var postData = {
			type: 'reg',
			loginid: $scope.loginid,
			email: $scope.email,
			password: $scope.password
		}

		$http({
			method: 'POST',
			url: 'http://127.0.0.1:8080/4.4/book',
			data: postData
		}).then(function(response){
			$scope.regData = response.data;
			if($scope.regData.code == 1){
				$state.go('main',{bookType:0});
			}else{
				console.log(123);
				$scope.showWarningContent = '注册失败！';
				$scope.showWarning = true;
				//2秒后提示消失
				$timeout(function(){
                    $scope.showWarning = false;
                },2000)
			}
		});

		
	}
});

/**
登录
*/
appuser.controller('login',function($scope, $http, $state, $timeout){
	$scope.showWarning = false; //是否显示错误信息

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
				$state.go('main',{bookType:0});
			}else{ //登录失败
				$scope.showWarning = true;
				//2秒后提示消失
				$timeout(function(){
                    $scope.showWarning = false;
                },2000)
			}
		});
	}
});