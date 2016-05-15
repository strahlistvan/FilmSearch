app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  $scope.title = 'Find your favorite movie here!'; 
  $scope.promo = 'Write something in the textbox.';
  $scope.allMovies = [ ];
  $scope.response = "";  //just for debugging...
   $scope.movieData = { "Title:": "kutyauto"};	
  
  $scope.changeInput = function()
  {
      var baseURL = "http://www.omdbapi.com/?r=json";
      var fullURL = baseURL+"&t="+$scope.searchKey + "&s="+$scope.searchKey;
	   
        $http.get(fullURL)
	        .success(function(response) {
			     $scope.response = JSON.stringify(response);
				 if (response.hasOwnProperty("Search"))
					$scope.allMovies = response.Search;
				 else 
				     $scope.allMovies = [ ];
			
	             return response;
		    })
			.error(function(err){
			     console.log("Error: "+err);
			     return err;
			});
  }
    
}]);