var appdetail = angular.module('bookdetail',[]);
appdetail.controller('bookdetail',function($scope,$stateParams,$http){
	var postData = {
		type:'bookdetail',
		bookid:$stateParams.bookid
	}
	$http({
		method:'POST',
		url:'http://127.0.0.1:8080/4.4/book',
		data: postData
	}).then(function(response){
		$scope.detailData = response.data.data;
	});

	$scope.backPrePage = function(){
		history.go(-1);
	}

});
