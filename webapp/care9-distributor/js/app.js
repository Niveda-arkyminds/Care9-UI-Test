var app = angular.module('distributor', [ 'ngRoute' ]);


app.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl : "dashboard.html",
		controller : "DashBoardController"
	}).when("/dashboard", {
		templateUrl : "dashboard.html",
		controller : "DashBoardController"
	}).when("/inventory", {
		templateUrl : "inventory.html",
		controller : "InventoryController"
	}).when("/manage-request", {
		templateUrl : "manage-request.html",
		controller : "ManageRequestController"
	}).when("/manufacture", {
		templateUrl : "manufacturer.html",
		controller : "ManufacturerController"
	}).when("/pharmancies", {
		templateUrl : "pharmacies.html",
		controller : "PharmanciesController"
	}).when("/send-request", {
		templateUrl : "send-request.html",
		controller : "SendRequestController"
	}).when("/batchid", {
		templateUrl : "batchid.html"
		
	}).when("/logout", {
		templateUrl : "logout.html"
		
	});
});

app.controller('DashBoardController', [ '$scope', function($scope) {

} ]);
app.controller('InventoryController', ['$scope', function($scope) {
	$scope.showTitle=true;
	
	$scope.showForm = false;
	
	$scope.addNewproduct = function() {
		$scope.showForm = true;
	$scope.showTitle=false;
	};
	$scope.cancel = function() {
		$scope.showForm = false;
		$scope.showTitle=true;
	};
} ]);
app.controller('ManageRequestController', [ '$scope', function($scope) 
	{
	$scope.showInformation = false;
	
	$scope.showDetails = function() 
	
	{
		$scope.showInformation = true;
	};
	
	$scope.hideDetails = function() 
	{
		$scope.showInformation = false;
	};
} ]);
app.controller('ManufacturerController', [ '$scope', function($scope) {
	
	$scope.showTitle=true;
	$scope.showForm = false;
	$scope.addNewManufacturer = function() {
		$scope.showTitle=false;
		$scope.showForm = true;
	};
	$scope.cancel = function() {
		$scope.showForm = false;
		$scope.showTitle=true;
	};
} ]);
app.controller('PharmanciesController', [ '$scope', function($scope) {
	$scope.showTitle=true;
	$scope.showForm = false;
	$scope.addNewPharmancies = function() {
		$scope.showTitle=false;
		$scope.showForm = true;
	};
	$scope.cancel = function() {
		$scope.showTitle=true;
		$scope.showForm = false;
	};
} ]);
app.controller('SendRequestController', [ '$scope', function($scope) {
	$scope.showTitle=true;
	$scope.showForm = false;
	$scope.createOrder = function() {
		$scope.showForm = true;
		$scope.showTitle=false;
	};
	$scope.cancel = function() {
		$scope.showForm = false;
		$scope.showTitle=true;
	};
} ]);

