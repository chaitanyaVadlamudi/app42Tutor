(function(){
    angular.module("allFriends",[]);
    angular.module("allFriends")
    .controller("allFriendsCtrl",["$scope",function($scope){
        $scope.friendsList=['abcd','ddsjhj'];

        $scope.allFriends =function(){
            var result,  
userName  = "abcd";  
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.getAllFriends(userName,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
        for(var i = 0;i<result.length;i++)  
        {  
            console.log("userName is : " + result[i].userName)  
            console.log("buddyName is : " + result[i].buddyName)  
            console.log("message is : " + result[i].message)  
            console.log("sendedOn is : " + result[i].sendedOn)  
            console.log("acceptedOn is : " + result[i].acceptedOn); 
            $scope.friendsList.push(result[i].buddyName);

        } 
         console.log("Friends "+$scope.friendsList);
     
},    
error: function(error) {  
    console.log("err "+error);
}    
});   
        };
            $scope.allFriends();
        
        
        //unfriend a friend
        $scope.unFriend=function(){
            var userName = "abcd",  
buddyName  = "ddsjhj",  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.unFriend(userName,buddyName,{  
success: function(object)   
{  
    var buddy = JSON.parse(object);  
    result = buddy.app42.response;  
    console.log("response is : " +result) 
    alert("You are no longer friend with him")
},  
error: function(error) {
    console.log("err "+error)
    }    
});   
        };
        //Block User
        $scope.blockUser=function(){
            var userName = "ddsjhj",  
buddyName = "abcd",  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.blockUser(userName, buddyName,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("userName is : " + result.userName)  
    console.log("buddyName is : " + result.buddyName)  
    alert("successfully blocked the user")
},    
error: function(error) {
    console.log("err "+error);
    }    
});   
        };

    }]);
})();