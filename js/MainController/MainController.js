

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = '****************Welcome to******************';
  $scope.greeting1 = '**********Automated Teller Machine***********';
}])

app.controller('SHcontroller', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Enter';
  }

    )})

app.controller('controller1', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Withraw';
  }

    )})

app.controller('controller2', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Deposit';
  }

    )})
app.controller('controller3', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Balance Inquiry';
  }

    )})
app.controller('controller4', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Enter';
  }
  )})
app.controller('controller5', function($scope){
  $scope.hideandshow=false;
  $scope.$watch('hideandshow', function(){
  $scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Enter';
  }
  )})
app.controller('multiply', ['$scope', function($scope){
  $scope.product  = function(value) { return value - 1000}
}]);

app.controller('multiply1', ['$scope', function($scope){
  $scope.product  = function(value) { return value * 1}
}]);
