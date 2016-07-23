app.controller('factoryCtrl',['$scope', 'yelpFactory', function($scope, yelpFactory){

  getYelp();

function getYelp(){
  yelpFactory.getYelp()
    .then(function(response){
      console.log('call');
      console.log(response);
      $scope.listing = response.data;

      $scope.sendID = function(){
        var data = $scope.listing;
        console.log(data);
        console.log($scope.listing.id);
      };
    });
}

}]);
