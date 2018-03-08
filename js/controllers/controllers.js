angular.module('appController', []).controller('appController',function($scope) {
        $scope.datalist = [];
        $scope.markAll = false;
    
//      ADD NEW DATA IN LIST
        
        $scope.addNewList = function() {
                $scope.datalist.push({text:$scope.addtext, done:false});
                $scope.addtext = '';
        };
        
//      CHECK REMAINING DATA SIZE
        
        $scope.isShow = function() {
            return ($scope.datalist.length != $scope.rest());
        }  
        
//      CHECK REMAINING LIST DATA
        
        $scope.rest = function() {
            var count = 0;
                angular.forEach($scope.datalist, function(data) {
                    count += data.done ? 0 : 1;
                });
                return count;
        };
        
//      MARK ALL LIST FOR ACTION
        
        $scope.MarkCompleteAll = function() {
            angular.forEach($scope.datalist, function(data) {
                data.done =$scope.markAll;
            });
        };
        
        $scope.item = function() {
                return ($scope.datalist.length - $scope.rest() > 1) ? "items" : "item";     
        };
        
//      DELETE LIST 
      
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
