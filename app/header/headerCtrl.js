 (function () {
        
        function headerCtrlFn($scope){
            $scope.brandName="app42.tuto";
            $scope.navItems=["Home","Register","Login","Settings","Friends","Groups","Logout"];
     
        }
        angular.module("header")
        .controller("headerCtrl",["$scope",headerCtrlFn]);
        
        
    })();