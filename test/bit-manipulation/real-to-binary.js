'use strict';

var solver = require('../../src/bit-manipulation/real-to-binary'),
	assert = require('assert');

describe('Bit manipulation', function () {
	describe('Print binary', function () {
		it('should print bits', function () {
			assert.equal(solver.printBinary(9), '1001');
			assert.equal(solver.printBinary(110), '1101110');
		});
	});
});
