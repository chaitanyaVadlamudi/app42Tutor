(function(){
    function logoutCtrl($scope,$state){
        $scope.logout=function(){
            var local = localStorage.getItem("sessionId");
            console.log("local "+local);
           var sessionId = local;   
var result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.logout(sessionId,{    
    success: function(object)   
    {    
        var userObj = JSON.parse(object);    
        result = userObj.app42.response.users.user;  
        console.log("userName is " + result.userName)  
    },    
    error: function(error) { 
        console.log("err"+error);
    }    
});     
        }
    }
    angular.module("logout")
    .controller("logoutCtrl",["$scope","$state",logoutCtrl]);
})();