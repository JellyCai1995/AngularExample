var appshelf = angular.module('bookshelf', []);

/**
获取书籍列表
*/
appshelf.controller('list',function($scope, $http, $state, $stateParams){
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

	$scope.selectItem = function(item){
		$state.go('bookdetail',{bookid:item.id});
	}

});

/**
书籍类型
*/
appshelf.controller('type',function($scope){
	$scope.tabs = [
		{
			tabIndex: 0,
			tabName:'历史'
		},
		{
			tabIndex: 1,
			tabName:'科学'
		}];
});
