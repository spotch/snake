describe('Example', function() {
	beforeEach(function() {
		angular.mock.module('exampleModule');
	});

	it('returns Hello!', inject(function(example) {
		var actual = example.welcome();
		expect(actual).toEqual('Hello!');
	}));
});