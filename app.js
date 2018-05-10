//全体路由
var ourApp = angular.module("ourApp",["ui.router"]);
ourApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("",'/login');
    $stateProvider

        //登陆暂时放着
        //普通登陆页面                     一级
        .state('login',{
            url:'/login',
            templateUrl:'app/login/login.html'
            // ,
            // controller:'loginCtrl'
        })
        //欢迎父页                          一级
        .state('home',{
            url:'/home',
            templateUrl:'html/home.html'
            // ,
            // controller:'hid2'
        })
            //欢迎页                          二级
        .state('home.welcome',{
            url:'/welcome',
            templateUrl:'html/home.html'
            // ,
            // controller:'hid2'
        })
        //业务模块---------------------------三八线-------------------------------------------
        .state('home.business',{
            url:'/business',
            templateUrl:"app/business/business.html"
        })
        //运营模块--------------------------------三八线----------------------------------------
        //我的模块有三级路由
        .state('home.content',{
            url:'/content',
            templateUrl:"app/operate/html/content.html"
        })
        .state('home.content.contentEdit',{
            url:'/contentEdit',
            templateUrl:"app/operate/html/contentEdit.html"
        })
        .state('home.message',{
            url:'/message',
            templateUrl:"app/operate/html/message.html"
        })
        .state('home.message.messageEdit',{
            url:'/messageEdit',
            templateUrl:"app/operate/html/messageEdit.html"
        })
        .state('home.bank',{
            url:'/bank',
            templateUrl:"app/operate/html/bank.html"
        })
        .state('home.bank.bankEdit',{
            url:'/bankEdit',
            templateUrl:"app/operate/html/bankEdit.html"
        })
        .state('home.suggestion',{
            url:'/suggestion',
            templateUrl:"app/operate/html/suggestion.html"
        })
        .state('home.suggestion.suggestionEdit',{
            url:'/suggestionEdit',
            templateUrl:"app/operate/html/suggestionEdit.html"
        })
        //后台模块-------------------------------------三八线-------------------------------------------
        .state('home.backstage',{
            url:'/backstage',
            templateUrl:"app/backstage/backstage.html"
        })
});