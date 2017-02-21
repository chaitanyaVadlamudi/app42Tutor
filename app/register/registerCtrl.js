(function(){
    function registerCtrl($scope,$state){
        $scope.userDetails={};
        $scope.register=function(){
var userName = $scope.userDetails.userName;    
var pwd = $scope.userDetails.password;    
var emailId = $scope.userDetails.email;    
var result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.createUser(userName, pwd, emailId,{    
    success: function(object)   
    {    
        var userObj = JSON.parse(object);    
        result = userObj.app42.response.users.user;  
        console.log("userName is " + result.userName)  
        console.log("emailId is " + result.email)
        $state.go("Home")
    },    
    error: function(error) { 
        console.log("err "+error);
    }    
});           }
    }
    angular.module("register")
    .controller("registerCtrl",["$scope","$state",registerCtrl]);
})();