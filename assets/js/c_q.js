app.controller('cqController', ['$http', '$scope','$location', function($http, $scope,$location) {
  $scope.hiring = false;
  $scope.glutFree = false;
  $scope.musicians = false;
  $scope.lgbt = false;
  $scope.livWage = false;
  $scope.localFood = false;
  $scope.minorityOwned = false;
  $scope.petFriend = false;
  $scope.artCrafts = false;
  $scope.charNonprof = false;
  $scope.sustain = false;
  $scope.veganPeta = false;
  $scope.claimBusiness = false;

$scope.clicked = function(){
// //////////////////////
  $('.checkBox').click(function() {
      $(this).toggleClass('signUpFormClicked');
      $(this).toggleClass('signUpForm');
  });
  // //////////////////////

    if ($scope.claimBusiness == false){
      $location.path('/login');
    } else{
      $location.path("/business_search");
    }

  console.log($scope.claimBusiness);




  data = {
    hiring : $scope.hiring,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    livWage : $scope.livWage,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    petFriend : $scope.petFriend,
    artCrafts : $scope.artCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta
  };

  console.log(data);

  $http({
    method: 'POST',
    url: " https://6b6decab.ngrok.io/surveys",
    data:data,
    headers:{'Authorization':'blah'}
  }).then(function success(response){
    console.log(response);
  });

}


}]);
