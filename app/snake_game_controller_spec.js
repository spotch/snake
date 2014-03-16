describe('SnakeGameController', function() {
	beforeEach(function() {
		angular.mock.module('snakeGame');
	});

	it('should prepare a welcome for the user', inject(function($controller, example) {
		var scope = {};
		var snakeGameController = $controller('SnakeGameController', {$scope: scope});
		expect(scope.welcome).toBe(example.welcome());
	}));
});