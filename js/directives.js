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

BlogDirectiveModule.directive( 'preview', function () {
  return {
    link: function (  scope, element, attr ) {
      scope.$watch(attr.preview, function(content) {
        element.html(content);
      });
    }
  };
} );