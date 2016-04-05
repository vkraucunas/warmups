var app= angular.module('taskApp', []);

app.controller('underControl', function($scope) {
    $scope.show = "new";
    $scope.newTask = {
        done: false
    }
    $scope.tasks = [
        {
            task: "Make a to do app",
            done: false
        }
    ];


    $scope.addTask = function(newTask) {
        console.log($scope.newTask);
        $scope.tasks.push($scope.newTask);
        $scope.newTask = { done: false }
    }
})