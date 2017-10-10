var appdetail = angular.module('bookdetail',[]);

appdetail.controller('bookdetail',function($scope,$stateParams){
	console.log($stateParams.bookid);
});
