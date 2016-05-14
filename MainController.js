app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  $scope.title = 'Find your favorite movie here!'; 
  $scope.promo = 'Write something in the textbox.';
  $scope.data = [ {"Title": "Semmise"} ];
  $scope.response = "";
  
  $scope.change = function(searchKey)
  {
      var baseURL = "http://www.omdbapi.com/?plot=full&r=json";
      var fullURL = baseURL+"&t="+$scope.searchKey + "&s="+$scope.searchKey;
	   
        $http.get(fullURL)
	        .success(function(response) {
			     $scope.response = JSON.stringify(response);
				 if (response.hasOwnProperty("Search"))
					$scope.data = response.Search;
			
	             return response;
		    })
			.error(function(err){
			     console.log("Error: "+err);
			     return err;
			});
  }
	 
    
}]);