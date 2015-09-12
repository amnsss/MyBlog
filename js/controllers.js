var BlogListModule = angular.module('BlogListModule', []);
var BlogContentModule = angular.module('BlogContentModule', []);

routerApp.controller('loginCtrl', function($scope, $http){
	$scope.login = function() {
		$http.get('../data/blogs/' + 'first' + '.html')
  			.success(function(result) {
  			    $element.html(result);
  			});
	}
});

BlogContentModule.controller('blogContentCtrl', function($scope, $http, $state, $stateParams) {
	
	
});

BlogListModule.controller('blogListCtrl')