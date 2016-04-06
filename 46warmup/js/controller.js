var pokeNum = Math.floor((Math.random() * 721) + 1);
var moveNum = Math.floor((Math.random() * 639) + 1);

app.controller('pokeControl', function($scope, $http) {

    $scope.waiting1 = false;
    $scope.waiting2 = false;
    $scope.pokeName = '';
    $scope.move = '';
    $scope.pokeImg = '';
    $scope.imgShow = false;

    $scope.makePoke = function() {
        $scope.waiting1 = true;
        return $http.get("http://pokeapi.co/api/v2/pokemon/"+pokeNum+"/")
         .then(function(data) {
            data = data.data;
            console.log(data);
            $scope.waiting1 = false;
            $scope.imgShow = true;
            $scope.pokeName = data.name;
            $scope.pokeImg = data.sprites.front_default;
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

