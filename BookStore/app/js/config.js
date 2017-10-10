
var appconfig = angular.module('config', []);

/**
配置Http
*/
appconfig.config(function($httpProvider){
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