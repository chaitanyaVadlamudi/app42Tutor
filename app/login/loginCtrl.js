(function(){
    function loginCtrl($scope,$state){
        $scope.loginDetails={};
        $scope.login=function(){
            console.log($scope.loginDetails);
        var userName = $scope.loginDetails.userName;    
var pwd = $scope.loginDetails.password;    
var result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.authenticate(userName, pwd,{    
    success: function(object)   
    {    
        var userObj = JSON.parse(object);    
        result = userObj.app42.response.users.user;  
        localStorage.setItem("sessionId",JSON.stringify(result.sessionId));
        console.log("userName is " + result.userName)  
        console.log("sessionId is " + result.sessionId)
        $state.go("Home");
    },    
    error: function(error) {  
                console.log("err "+error);

    }
    
});   
    }
    }
    angular.module("login")
.controller("loginCtrl",["$scope","$state",loginCtrl]);
})();