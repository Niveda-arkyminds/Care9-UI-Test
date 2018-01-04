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
	}).when("/distributor", {
		templateUrl : "distributor.html",
		controller : "DistributorController"
	}).when("/manage-request", {
		templateUrl : "manage-request.html",
		controller : "ManageRequestController"
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

app.controller('DistributorController', [ '$scope', function($scope) {
	
	$scope.showTitle=true;
	$scope.showForm = false;
	$scope.addNewDistributor = function() {
		$scope.showTitle=false;
		$scope.showForm = true;
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

app.directive('salesChart',
		function(){
	return{
		restrict: 'E',
		replace:true,
		template:'<div id="chartdiv"></div>',
			link:function (scope, element, attrs){
				var chart=false;
				var initChart= function(){
					if (chart) chart.destroy();
					var config=scope.config || {};
					
					chart = AmCharts.makeChart("chartdiv", {
						"type" : "serial",
						"theme" : "none",
						"marginRight" : 70,
						"dataProvider" : [ {
							"country" : "Prime Pharmacy",
							"visits" : 30250,
							"color" : "#FF0F00"
						}, {
							"country" : "Sriram Pharmacy",
							"visits" : 18820,
							"color" : "#FF6600"
						}, {
							"country" : "Sun Pharmacy",
							"visits" : 18090,
							"color" : "#FF9E01"
						}, {
							"country" : "Pheonix Pharmacy",
							"visits" : 13220,
							"color" : "#FCD202"
						}, {
							"country" : "Med Pharmacy",
							"visits" : 11220,
							"color" : "#F8FF01"
						}, {
							"country" : "Chemi Pharmacy",
							"visits" : 11140,
							"color" : "#B0DE09"
						}, {
							"country" : "Maple Medicals",
							"visits" : 4410,
							"color" : "#CD0D74"
						} ],
						"valueAxes" : [ {
							"axisAlpha" : 0,
							"position" : "left",
							"title" : "Total Sales"
						} ],
						"startDuration" : 1,
						"graphs" : [ {
							"balloonText" : "<b>[[category]]: [[value]]</b>",
							"fillColorsField" : "color",
							"fillAlphas" : 0.9,
							"lineAlpha" : 0.2,
							"type" : "column",
							"valueField" : "visits"
						} ],
						"chartCursor" : {
							"categoryBalloonEnabled" : false,
							"cursorAlpha" : 0,
							"zoomable" : false
						},
						"categoryField" : "country",
						"categoryAxis" : {
							"gridPosition" : "start",
							"labelRotation" : 45
						},
						"export" : {
							"enabled" : false
						}

					});
				}; initChart();
			}}
			});

app.directive('productChart',
		function(){
	return{
		restrict: 'E',
		replace:true,
		template:'<div id="chartdiv2"></div>',
			link:function (scope, element, attrs){
				var chart=false;
				var initChart= function(){
					if (chart) chart.destroy();
					var config=scope.config || {};
					
					chart = AmCharts.makeChart("chartdiv2", {
						"type" : "gauge",
						"theme" : "light",
						"axes" : [ {
							"axisAlpha" : 0,
							"tickAlpha" : 0,
							"labelsEnabled" : false,
							"startValue" : 0,
							"endValue" : 100,
							"startAngle" : 0,
							"endAngle" : 270,
							"bands" : [ {
								"color" : "#eee",
								"startValue" : 0,
								"endValue" : 100,
								"radius" : "100%",
								"innerRadius" : "85%"
							}, {
								"color" : "#84b761",
								"startValue" : 0,
								"endValue" : 80,
								"radius" : "100%",
								"innerRadius" : "85%",
								"balloonText" : "90%"
							}, {
								"color" : "#eee",
								"startValue" : 0,
								"endValue" : 100,
								"radius" : "80%",
								"innerRadius" : "65%"
							}, {
								"color" : "#fdd400",
								"startValue" : 0,
								"endValue" : 35,
								"radius" : "80%",
								"innerRadius" : "65%",
								"balloonText" : "35%"
							}, {
								"color" : "#eee",
								"startValue" : 0,
								"endValue" : 100,
								"radius" : "60%",
								"innerRadius" : "45%"
							}, {
								"color" : "#cc4748",
								"startValue" : 0,
								"endValue" : 92,
								"radius" : "60%",
								"innerRadius" : "45%",
								"balloonText" : "92%"
							}, {
								"color" : "#eee",
								"startValue" : 0,
								"endValue" : 100,
								"radius" : "40%",
								"innerRadius" : "25%"
							}, {
								"color" : "#67b7dc",
								"startValue" : 0,
								"endValue" : 68,
								"radius" : "40%",
								"innerRadius" : "25%",
								"balloonText" : "68%"
							} ]
						} ],
						"allLabels" : [ {
							"text" : "Crocin",
							"x" : "49%",
							"y" : "5%",
							"size" : 15,
							"bold" : true,
							"color" : "#84b761",
							"align" : "right"
						}, {
							"text" : "Pan 40",
							"x" : "49%",
							"y" : "15%",
							"size" : 15,
							"bold" : true,
							"color" : "#fdd400",
							"align" : "right"
						}, {
							"text" : "Vomikind Plus",
							"x" : "49%",
							"y" : "24%",
							"size" : 15,
							"bold" : true,
							"color" : "#cc4748",
							"align" : "right"
						}, {
							"text" : "Dolo 650",
							"x" : "49%",
							"y" : "33%",
							"size" : 15,
							"bold" : true,
							"color" : "#67b7dc",
							"align" : "right"
						} ],
						"export" : {
							"enabled" : false
						}
					
					
				

					});
				}; initChart();
			}}
			});

