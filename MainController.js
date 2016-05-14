app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  $scope.title = 'Find your favorite movie here!'; 
  $scope.promo = 'Write something in the textbox.';
  $scope.data = [ ];
  $scope.response = "";  //just for debugging...
  
  $scope.changeInput = function()
  {
      var baseURL = "http://www.omdbapi.com/?plot=full&r=json";
      var fullURL = baseURL+"&t="+$scope.searchKey + "&s="+$scope.searchKey;
	   
        $http.get(fullURL)
	        .success(function(response) {
			     $scope.response = JSON.stringify(response);
				 if (response.hasOwnProperty("Search"))
					$scope.data = response.Search;
				 else 
				     $scope.data = [ ];
			
	             return response;
		    })
			.error(function(err){
			     console.log("Error: "+err);
			     return err;
			});
			
	    //not really working
		console.log("megvan!"+JSON.stringify($scope.data));
	    for (var elem in $scope.data)
		{
		  var baseURL = "http://www.omdbapi.com/?plot=full&tomatoes=true&r=json";
		  var fullURL = baseURL+"&i="+elem.imdbID + "&s="+$scope.searchKey;
		  $http.get(fullURL).then(function(response) {
				elem = response;
				console.log(JSON.stringify(elem));
		  });
		}
  }
  
 
  
}]);