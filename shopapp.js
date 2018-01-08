//create a model to control the app
var app = angular.module("myShoppingList", []); 
//create a controller where all the data and methods are defined
app.controller("myCtrl", function($scope) {
	//The array where the list items are stored
    $scope.products = ["Create a list ;)","Use the cross to remove me!"];
	//method called when create button is clicked
	 $scope.addItem = function () {
		$scope.errortext="";
		//case for empty
        if (!$scope.addMe) {return;}
		//when no duplicate is there
		if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
			$scope.addMe="";
        } else {
			//when duplicate is found
            $scope.errortext = "The item is already in your shopping list.";
        }
    }    
	//function when item is removed via the remove span element
	$scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    } 
});
