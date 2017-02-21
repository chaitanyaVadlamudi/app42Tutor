(function(){
    function forgotPasswordCtrl($scope){
        $scope.forgot={};
        $scope.forgotPassword=function(){
            console.log($scope.forgot);
            var userName = $scope.forgot.userName;   
var result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.resetUserPassword(userName,{    
success: function(object)   
    {    
        var userObj = JSON.parse(object);    
        result = userObj.app42.response.users.user;  
        console.log("userName is " + result.userName)  
    },    
    error: function(error) {  
        console.log("err"+error)
    }    
});     

        }
    }
    angular.module("forgotPassword")
    .controller("forgotPasswordCtrl",["$scope",forgotPasswordCtrl]);
})();