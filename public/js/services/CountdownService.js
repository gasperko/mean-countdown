// public/js/services/CountdownService.js
angular.module('CountdownService', []).factory('countdownService', ['$http', function($http) {

    return {
        // call to get a countdown
        get : function() {
            return $http.get('/api/countdown');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new countdow
        create : function(countdownData) {
            return $http.post('/api/countdown', countdownData);
        },

        update : function(countdownData) {
            return $http.put('/api/countdown', countdownData);
        },
        // call to DELETE a countdown
        delete : function(id) {
            return $http.delete('/api/countdown/' + id);
        }
    }       

}]);