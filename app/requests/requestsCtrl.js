(function(){
    angular.module("requests")
    .controller("requestsCtrl",["$scope",function($scope){
   
    $scope.friendRequests =function(item){
         $scope.requests=[1,2,'name','names'];
            var result,  
userName  = "abcd";  
        console.log("req "+$scope.requests);
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.getFriendRequest(userName,{    
success: function(object)   
{    
    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("res "+JSON.stringify(result.buddyName));
               $scope.requests.push(result.buddyName);

       console.log(result.buddyName);
    
    console.log("names arr "+$scope.requests);
},    
error: function(error) { 
    console.log("err "+error);
}    
});       
            
        };
        //Accept Friend requests
        $scope.acceptRequest=function(){
            var userName = "abcd",  
buddyName = "ddsjdd",  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.acceptFriendRequest(userName, buddyName,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("userName is : " + result.userName)  
    console.log("buddyName is : " + result.buddyName)  
    console.log("sendedOn is : " + result.sendedOn);   
    console.log("acceptedOn is : " + result.acceptedOn);
    alert("friend request accepted");
},    
error: function(error) {   
    console.log("err "+error)
    }    
});   
        };
        //delete Friend request
        $scope.deleteRequest=function(){
            var userName = "abcd",  
buddyName = "ddsjdd",  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.rejectFriendRequest(userName, buddyName,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("userName is : " + result.userName)  
    console.log("buddyName is : " + result.buddyName)  
    console.log("sendedOn is : " + result.sendedOn);   
    console.log("acceptedOn is : " + result.acceptedOn);   
},    
error: function(error) {
    console.log("err "+error);
    }    
});   

        };
                $scope.friendRequests();

}]);
})();