(function(){
    angular.module("groups")
    .controller("groupsCtrl",["$scope","$state",function($scope,$state){
        $scope.allGroups=["asdsd","dffgfgr"];
       
        //get all groups
        $scope.getAllGroups=function(){
            var result,  
userName  = "ddsjhj";  
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.getAllGroups(userName,{    
success: function(object) {    
var buddyObj = JSON.parse(object);    
result = buddyObj.app42.response.buddies.buddy;  
        for(var i = 0;i<result.length;i++)  
        {  
//            $scope.allGroups.length=0;
            console.log("userName is : " + result[i].userName)  
            console.log("groupName is : " + result[i].groupName) 
            $scope.allGroups.push(result[i].groupName);
            
        }  
},    
error: function(error) {
    console.log("err "+error);
}    
});       
        };
        $scope.getAllGroups();
        $scope.mygroup = function(name1){
            console.log("name "+name1)
            $state.go("GroupChat",{name:name1})
        }
    }])
    //create new group
    .controller("createGroupCtrl",["$scope",function($scope){
        $scope.create={};
        $scope.createGroup=function(){
           var userName = "ddsjhj",  
groupName = $scope.create.groupName,  
result ;    
App42.initialize("3b72cca9d43c0600c20f287b13d7e618986509d42125dfa6518a25e744342631","5c7afa2790fbdd8267f0d79c81c46148f32545b7e6be7ad2264ef0250d9d3763");  
var buddyService  = new App42Buddy();  
buddyService.createGroupByUser(userName, groupName,{    
success: function(object)   
{    
    var buddyObj = JSON.parse(object);    
    result = buddyObj.app42.response.buddies.buddy;  
    console.log("userName is : " + result.userName)  
    console.log("groupName is : " + result.groupName)  
    },    
    error: function(error) {
        console.log("err "+error)
    }    
}); 
            console.log($scope.create);

        };
    }])
    //group chat
    .controller("groupChat",["$scope","$stateParams",function($stateParams,$scope){
        $scope.chat = $stateParams.name;
        console.log("nam "+$scope.chat)
    }]);
     
})();