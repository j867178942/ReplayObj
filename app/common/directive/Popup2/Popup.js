//img:     $scope.srcJl = "";
//part1:   $scope.partJl1 = "";
// part2   $scope.partJl2 = "第二部分灰色信息";
// button  $scope.buttonJl = "摁钮部分";
// fun1     $scope.resend = function (){
//             alert("123");
//          };
// fun2     $scope.resend2 = function (){
//             alert("678");
//          };

var myApp = angular.module("myApp",[]);
angular.module("myApp")
    .controller("myCtrl",function ($scope) {
        $scope.srcJl = "Nike.png";
        $scope.partJl1 = "第一部分橘红色信息";
        $scope.partJl2 = "第二部分灰色信息";
        $scope.partJl3 = "摁钮部分1";
        $scope.partJl4 = "摁钮部分2";
        $scope.resend = function (){
            alert("123");
        };
        $scope.resend2 = function(){
            alert("678");
        }
    });
myApp.directive("popup",function () {
    return{
        restrict:'AEMC',
        replace:true,
        template:'<div id="bodyJl">\n' +
        '    <div id="Popup_jl">\n' +
        '        <img id="img" ng-src="{{srcJl}}" alt="提示信息+{{srcJl}}">\n' +
        '        <div id="Prompt_jl_1">{{partJl1}}</div>\n' +
        '        <div id="Prompt_jl_2">{{partJl2}}</div>\n' +
        '        <div id="buttonList2">\n' +
        '            <div id="leftJl" class="Prompt_jl_button" ng-click="resend()">{{partJl3}}</div>\n' +
        '            <div class="Prompt_jl_button" ng-click="resend2()">{{partJl4}}</div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>',
        scope: {
            srcJl:"@srcJl"
            ,partJl1:"@partJl1"
            ,partJl2:"@partJl2"
            ,partJl3:"@partJl3"
            ,partJl4:"@partJl4"
            ,resend:"&"
            ,resend2:"&"
        }
    }
});