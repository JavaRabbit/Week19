var myApp = angular.module('myApp', []);

myApp.controller('ChickenController',function ChickenController($scope){
  // This is the model
  // There is a variable called scope
  $scope.author = [
  {
    'name' : "Bonnie",
    'title' : "web designer"
  },
  {
    "title":"Day 1",
    "text": "Day 1 info goes here"
  },
  {
    "title":"Day 2",
    "text": "Day 2 info goes here"
  }
  ]
});
