// public/js/controllers/IndexCtrl.js
angular.module('IndexCtrl', []).controller('IndexController', function($scope, $location, $interval) {

	var photos = function () {
		var photos = ["/img/1.jpg"]

    	$scope.dynamicBackground = photos[Math.floor(Math.random()*photos.length)];
	}

	photos();

    $interval(photos, 10000);

});
