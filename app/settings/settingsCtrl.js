(function(){
    function settingsCtrl($scope){
        $scope.changePassword={};
        $scope.changeUserPassword=function(){
            console.log($scope.changePassword);
            var userName = $scope.changePassword.userName,  
            oldPwd   = $scope.changePassword.oldpassword,  
             newPwd   = $scope.changePassword.newpassword,  
               result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.changeUserPassword(userName, oldPwd, newPwd,{    
    success: function(object)   
    {    
        var userObj = JSON.parse(object);    
        result = userObj.app42.response;  
        console.log("success is " + result.success)  
    },    
    error: function(error) {
        console.log("err"+error)
    }    
});   
        }
    }
    angular.module("settings")
    .controller("settingsCtrl",["$scope",settingsCtrl]);
})();