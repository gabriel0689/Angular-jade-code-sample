var app = angular.module('challenge', ['asideModule']);

app.controller('hamburgerMenuController', function($scope) {
   
    var vm = this;

    $scope.$on("getMenuState", function (event, data) {
        $scope.$apply(function () {
            vm.opened = data;
        });
    });
});

app.directive('windowResize', function($window, $timeout) {
 	return function(scope, element, attrs) {
		
		var w = angular.element($window);
		var container = $( ".container-fluid" );		
		
		scope.getWindowDimensions = function () {
	 		return {
	   			'h': $window.innerHeight,
	   			'w': $window.innerWidth
	     	};
	   	};
	   	scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	   		
	   		var offset = container.offset();
			var newOffset = 425 + offset.left;

			var ribbonWidth = (newValue.w + 800);
	     	var ribbonMargin = '-'+(newValue.w );


	     	scope.onResizeBackground = function () {
	     		console.log("offset-left: "+ offset.left)
     			return {
	           		background: "linear-gradient(0deg, #171c1f  200px, rgba(0,0,0,0) 0), linear-gradient(-82deg, #212b2c calc(100% - "+ newOffset +"px), #171c1f 0)"
 				};		
	     	};

	     	
	     	scope.onResizeRibbon = function () {
	     	console.log(ribbonWidth); 	
     			return {
	           		width:''+ ribbonWidth +'px',
	           		margin: '0 '+ ribbonMargin +'px'
 				};		
	     	};

	    }, true);

	   	w.bind('resize', function () {
	   		// scope.onResize();
	     	scope.$apply();
	   	});
  	}
});
app.directive('masonry', function($window, $timeout) {
 	return function(scope, element, attrs) {
 		
 		$('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
 	}
});
// masonry init ----

