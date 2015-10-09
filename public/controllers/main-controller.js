var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope','$http', function($scope,$http){
	console.log("Hello from controller js")



// Create the instant search filter
  $scope.filterFunction = function(element) {
    return element.name.match(/^Ma/) ? true : false;
  };



	// $http.get('/contactlist').success(function(response) {
	//     console.log("I got the data I requested");
	//     $scope.contactlist = response;
	
	// });

var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.contactlist = response;
    $scope.contact = "";
  });
};

refresh();

// to add contact 
$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};

// to remove contact
$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    refresh();
  });
};

// to edit contact
$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).success(function(response) {
    $scope.contact = response;  // put the responce to the input box
  });
};  

// to updated contactlist
$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};


$scope.deselect = function() {
  $scope.contact = "";
}


	// $scope.addContact = function(){
	// 	console.log($scope.contact)
	// };


}])
