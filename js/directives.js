var BlogDirectiveModule = angular.module('BlogDirectiveModule', []);
BlogDirectiveModule.directive( 'blogContent', function ($http) {
  return {
    restrict: 'A',
    transclude: false,
    link: function ( $scope, $element ) {
      $http.get('../data/blogs/' + 'first' + '.html')
  			.success(function(result) {
  			    $element.html(result);
  			});
    }
  };
} );