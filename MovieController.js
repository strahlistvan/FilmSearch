app.controller('MovieController', ['$scope', '$http', function($scope, $http){
     $scope.movieData = { "Title:": "kutyauto"};	
		
	 $scope.showMore = function(imdbID)
	{	
		var baseURL = "http://www.omdbapi.com/?plot=full&r=json&tomatoes=true";
		var fullURL = baseURL + "&i="+imdbID;
		$http.get(fullURL)
		  .success(function(response){
				$scope.movieData = response;
				console.log(JSON.stringify($scope.movieData));
		  })
		  .error(function(err){
		       console.log("Error: "+err);
		  });
		
		//Some delay to load the data in modal
		setTimeout(function() {
			document.getElementById('myModal').style.display = "block";
		}, 1500);
		
	 }
	 	
} ]);