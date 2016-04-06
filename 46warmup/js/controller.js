var pokeNum = Math.floor((Math.random() * 721) + 1);
var moveNum = Math.floor((Math.random() * 639) + 1);

app.controller('pokeControl', function($scope, $http) {

    $scope.waiting1 = false;
    $scope.waiting2 = false;
    $scope.pokeName = '';
    $scope.move = '';

    $scope.makePoke = function() {
        $scope.waiting1 = true;
        return $http.get("http://pokeapi.co/api/v2/pokemon/"+pokeNum+"/")
         .then(function(data) {
            data = data.data;
            $scope.waiting1 = false;
            $scope.pokeName = data.name;
         })
    }

    $scope.makeMove = function() {
        $scope.waiting2 = true;
        return $http.get("http://pokeapi.co/api/v2/move/"+moveNum+"/")
         .then(function(data) {
            $scope.waiting2 = false;
            data = data.data;
            $scope.move = data.name;
         })
    }

});

