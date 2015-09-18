var BlogListModule = angular.module('BlogListModule', []);
var BlogContentModule = angular.module('BlogContentModule', []);

routerApp.controller('loginCtrl', function($rootScope, $scope, $http){

	$scope.login = function() {
		if($scope.userInfo === undefined) {
			$scope.userInfo = {};
			$scope.userInfo.userName = '';
		}
		var userInfoFile = $scope.userInfo.userName+'_'+$scope.userInfo.password;
		$http.get('../data/users/' + userInfoFile + '.json')
  			.success(function(result) {
  				$rootScope.userInfo = result;
  				$rootScope.query = {};
  			  $rootScope.$state.go('userBlog');
  			})
  			.error(function(err) {
  				$scope.error_message = '用户名或密码错误';
  			});
	}
});

routerApp.controller('navBarCtrl', function($rootScope, $scope) {
	$scope.search = function(keyWord) {
		$rootScope.query.name = keyWord;
	}
});

BlogContentModule.controller('blogContentCtrl', function($scope, $http, $state, $stateParams) {
	$scope.blogName = $stateParams.blogName; 
});

BlogListModule.controller('blogListCtrl', function($rootScope, $scope, $http, $state, $stateParams) {
	// $scope.userInfo = $rootScope.userInfo; 

	$scope.showBlog = function(blog) {
		var blogName = blog.name;
	}
	
});

routerApp.controller('editCtrl', function($rootScope, $scope, $http){
	$scope.preview = function() {
		$rootScope.content_dom = marked($scope.blog_content);
		// document.getElementById('blog_preview').innerHTML = $rootScope.content_dom;
		// console.log($scope.content_dom);
	}
});