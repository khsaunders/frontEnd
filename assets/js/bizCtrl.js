app.controller('bizController', ['$http', '$scope', '$window' function($http, $scope, $window) {

  var token = localStorage.getItem('Authorization');
  console.log(token);

  $scope.bizProfile = function pullData(){

  $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find.json',
      data: {location:27701},
      headers: {'Authorization': 'asdf'}

  }).success(function call(data) {
      $scope.businesses = data;

      console.log(data);

  });

}]);

}
