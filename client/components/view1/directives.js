angular.module('myApp')	
	.directive('headDir', function(){
		return {

			restrict: 'E',
			templateUrl: '../components/view1/templates/head.tmpl.html'

		}

	})
	.directive('navDir', function(){
		return {

			restrict: 'E',
			templateUrl: '../components/view1/templates/nav.tmpl.html'

		}

	})
	.directive('sectionDir', function(){
		return {

			restrict: 'E',
			templateUrl: '../components/view1/templates/section.tmpl.html'

		}

	});