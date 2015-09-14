
var routerApp = angular.module('routerApp', ['ui.router', 
                                             'BlogListModule', 
                                             'BlogContentModule',
                                             'BlogDirectiveModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/loginForm.html',
                    controller: 'loginCtrl'
                }
            }
        })
        .state('addbook', {
            url: '/addbook',
            templateUrl: 'tpls/addBookForm.html'
        })
        .state('bookdetail', {
            url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/bookDetail.html'
        })
        .state('userBlog', {
            url: '/userBlog',
            views: { 
                '': {
                    templateUrl: 'tpls/userBlog.html'
                },
                'navBar@userBlog': {
                    templateUrl: 'tpls/navBar.html'
                },
                'blogList@userBlog': {
                    templateUrl: 'tpls/blogList.html',
                    controller: 'blogListCtrl'
                },
                'blogContent@userBlog': {
                    templateUrl: 'tpls/blogContent.html',
                    controller: 'blogContentCtrl'
                }
            }
        })
        .state('edit', {
            url: '/edit',
            templateUrl: 'tpls/edit.html',
            controller: 'editCtrl'
        })
});



















