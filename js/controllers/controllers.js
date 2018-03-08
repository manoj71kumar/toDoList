angular.module('appController', []).controller('appController',function($scope) {
        $scope.datalist = [];
        $scope.markAll = false;
    
        $scope.addNewList = function() {
                $scope.datalist.push({text:$scope.addtext, done:false});
                $scope.addtext = '';
        };
        
        $scope.isShow = function() {
            return ($scope.datalist.length != $scope.rest());
        }  
        
        $scope.rest = function() {
            var count = 0;
                angular.forEach($scope.datalist, function(data) {
                    count += data.done ? 0 : 1;
                });
                return count;
        };
        
        $scope.MarkCompleteAll = function() {
            angular.forEach($scope.datalist, function(data) {
                data.done =$scope.markAll;
            });
        };

        $scope.item = function() {
                return ($scope.datalist.length - $scope.rest() > 1) ? "items" : "item";     
        };
      
        $scope.empty = function() {
            var prevData = $scope.datalist;
            $scope.datalist = [];
            angular.forEach(prevData, function(data) {
                if (!data.done) $scope.datalist.push(data);
            });
        };
        
        $scope.isData = function(){
            return $scope.datalist.length > 0;  
        }
});
