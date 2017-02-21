(function(){

    angular.module("friends")
    .controller("addFriendsCtrl",["$scope",function($scope){
                                    $scope.users=[];
        $scope.addFriends=function(){
            var result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var userService  = new App42User();  
userService.getAllUsers({    
success: function(object)  
 {    
     $scope.users.length=0;
    var userObj = JSON.parse(object);  
    result = userObj.app42.response.users.user;  
        for(var i = 0;i<result.length;i++)  
        {  
            //console.log("UserName : " + result[i].userName)  
            //console.log("EmailId : " + result[i].email)  
            $scope.users.push(result[i].userName);
            
        }  
     console.log("Users "+$scope.users);
  
},    
error: function(error) { 
    console.log("err "+error);
}    
});       
        };
        //send friend requests
        $scope.sendFriendRequest=function(item){
            console.log("item "+item)
            var userName ="chaitanya",  
buddyName = item,
                
message = "Welcome to Shephertz",  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.sendFriendRequest(userName, buddyName, message,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("userName is : " + result.userName)  
    console.log("buddyName is : " + result.buddyName)  
    console.log("message is : " + result.message)  
    console.log("sendedOn is : " + result.sendedOn) 
    alert("friend request sent successfully to "+item);
},    
error: function(error) { 
    console.log("err "+error);
    }    
}); 

        };
        
    }]);
    
})();
