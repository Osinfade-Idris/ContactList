var app = angular.module('myapp', []);
app.controller('mycontroller', function($scope, $http) {
    $scope.btname = 'ADD';

    $scope.insertIntoDB = function() {
            if ($scope.name == null) {
                alert('insert Name')
            } else if ($scope.phone == null) {
                alert('insert Phone')
            } else {
                $http.post('insert.php', {
                    'send_name': $scope.name,
                    'send_phone': $scope.phone,
                    'send_btnname': $scope.btname,
                    'send_id': $scope.id
                }).success(function(data) {
                    alert(data);
                    $scope.name = null;
                    $scope.phone = null;
                    $scope.updateTable();
                    $scope.btname = 'ADD';
                })

            }

        }
        // click function ends

    $scope.updateTable = function() {
        $http.get('select.php').success(function(data) {
            $scope.somearray = data;
        })

    }

    $scope.updateData = function(id, name, phone) {
        $scope.id = id
        $scope.name = name
        $scope.phone = phone
        $scope.btname = 'Update';
    }
})