//全体路由
var ourApp = angular.module("ourApp",["ui.router"]);
ourApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("",'/login');
    $stateProvider

        //登陆暂时放着
        //普通登陆页面
        .state('login',{
            url:'/login',
            templateUrl:'app/login/login.html'
            // ,
            // controller:'loginCtrl'
        })
        //超管登陆控制器 -------------------- 自己加吧。
        .state('rootLogin',{
            url:'/rootLogin'
            // ,
            // templateUrl:'html/home.html',
            // controller:'hid2'
        })
        //业务模块---------------------------三八线-------------------------------------------
        .state('business',{
            url:'/business',
            templateUrl:"app/business/business.html"
        })
        //运营模块--------------------------------三八线----------------------------------------
        .state('operate',{
            url:'/operate',
            templateUrl:"app/operate/operate.html"
        })
        //后台模块-------------------------------------三八线-------------------------------------------
        .state('backstage',{
            url:'/backstage',
            templateUrl:"app/backstage/backstage.html"
        })
});