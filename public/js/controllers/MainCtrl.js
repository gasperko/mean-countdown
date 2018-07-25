// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $location, $interval, $http, countdownService) {

	function getData() {
		countdownService.get()
			.then(
				function(result) {
					if(result.data.length > 0){
						$scope.future = new Date(result.data[0].year, result.data[0].month, result.data[0].day, result.data[0].hours, result.data[0].minutes, 0, 0);

					} else {	
						var date = new Date();
						date.setMinutes(date.getMinutes() + 60);

						countdownService.create([{
							"day" : date.getDate(),
							"month" : date.getMonth(),
							"year" : date.getFullYear(),
							"hours" : date.getHours(),
							"minutes" : date.getMinutes(),
						}])
						.then(
							function(result) {
								$scope.future = new Date(result.data.year, result.data.month, result.data.day, result.data.hours, result.data.minutes, 0, 0);
							},
							function(error) {
								console.log("error");
							}
						)
					}
				},
				function(error) {
					console.log("error");
				}
			)
	}
    	
    var countdown = function () {

    	today = new Date();

		todayInMs = today.getTime();
		futureInMs = $scope.future.getTime();

		differenceInMs = futureInMs - todayInMs;
		differenceInMs = differenceInMs/1000;

		$scope.seconds = Math.floor(differenceInMs % 60);
		differenceInMs = differenceInMs/60;

		$scope.minutes = Math.floor(differenceInMs % 60);
		differenceInMs = differenceInMs/60;

		$scope.hours = Math.floor(differenceInMs % 24);
		$scope.days = Math.floor(differenceInMs/24);
    
    }


    getData();

    $interval(countdown, 1000);

    $scope.delay = function (hour) {

		var date = new Date($scope.future);
		date.setMinutes(date.getMinutes() + 60);

		countdownService.update([{
			"day" : date.getDate(),
			"month" : date.getMonth(),
			"year" : date.getFullYear(),
			"hours" : date.getHours(),
			"minutes" : date.getMinutes(),
		}])
		.then(
			function(result) {
				$scope.future = new Date(result.data.year, result.data.month, result.data.day, result.data.hours, result.data.minutes, 0, 0);
			},
			function(error) {
				console.log("error");
			}
		)
    }
});