(function(){
	var app = angular.module('uberfuli-modules', []);
	app.directive('fuliItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'fuli-item.html'
		};
	});
	app.directive('fuliFooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'fuli-footer.html'
		};
	});

})();
