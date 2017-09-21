app.controller("jianshuControl", function($scope,$http) {
    $http.post("http://127.0.0.1:8080/4.4/jianshu")
        .success(function(response) {$scope.data = response.data;});
});