var Counting = require('./counting');

describe('Count', function () {
	var counting = new Counting();

	it('should count true as sheeps', function() {
		expect(counting.count([true])).toEqual(1);
	});

	it('should count false as non sheeps', function() {
		expect(counting.count([false])).toEqual(0);
	});

	it('should count through an array', function() {
		expect(counting.count([true, false, true])).toEqual(2);
	});

	it('should be aware of undefined and null values', function() {
		expect(counting.count([true, false, false, true, undefined, false, null, true])).toEqual(3);
	});

	it('should pass this test because i want it to', function() {
		expect(counting.count([true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true, false, false, true, true])).toEqual(17);
	});
})