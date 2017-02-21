(function () {
    
    angular.module("demo", ["header","ui.router","register","login","settings","forgotPassword","logout","friends","requests","allFriends","groups"]);
    angular.module("demo")
        .config(["$stateProvider", "$urlRouterProvider",
             function ($stateProvider, $urlRouterProvider) {
               
                var loginObj = {
                    templateUrl: "app/templates/login.html",
                    name: "Login",
                    url:"/login"
                };
                var registerObj = {
                    templateUrl: "app/templates/register.html",
                    name: "Register",
                    url:"/register"
                };
                var homeObj = {
                    templateUrl: "app/templates/home.html",
                    name: "Home",
                    url:"/home"
                };
                 var settingsObj = {
                    templateUrl: "app/templates/settings.html",
                    name: "Settings",
                    url:"/settings"
                };
                 var logoutObj = {
                     templateUrl: "app/templates/logout.html",
                    name: "Logout",
                    url:"/logout"
                };
                  var forgotPasswordObj = {
                    templateUrl: "app/templates/forgotPassword.html",
                    name: "ForgotPassword",
                    url:"/forgot-password"
                };
                  var friendsObj = {
                    templateUrl: "app/templates/friends.html",
                    name: "Friends",
                    url:"/friends"
                };
                 var receivedRequestsObj = {
                    templateUrl: "app/templates/receivedrequests.html",
                    name: "ReceivedRequests",
                    url:"/received-requests"
                };
                 var allFriendsObj = {
                    templateUrl: "app/templates/allFriends.html",
                    name: "AllFriends",
                    url:"/all-friends"
                };
                 var groupsObj = {
                     templateUrl: "app/templates/groups.html",
                    name: "Groups",
                    url:"/groups"
                };
                 var createGroupObj = {
                     templateUrl: "app/templates/createGroup.html",
                    name: "CreateGroup",
                    url:"/create-group"
                };
                 var groupChatObj = {
                     templateUrl: "app/templates/groupChat.html",
                    name: "GroupChat",
                    url:"/group-chat/:name"
                };
                 $stateProvider.state("Login", loginObj);
                 $stateProvider.state("Register", registerObj);
                 $stateProvider.state("Home", homeObj);
                 $stateProvider.state("Settings", settingsObj);
                 $stateProvider.state("Logout", logoutObj);
                 $stateProvider.state("ForgotPassword", forgotPasswordObj);
                 $stateProvider.state("Friends", friendsObj);
                 $stateProvider.state("ReceivedRequests", receivedRequestsObj);
                 $stateProvider.state("AllFriends", allFriendsObj);
                 $stateProvider.state("Groups", groupsObj);
                 $stateProvider.state("CreateGroup", createGroupObj);
                 $stateProvider.state("GroupChat", groupChatObj);






    }]);
        
})();