'use strict';

var solver = require('../../src/bit-manipulation/real-to-binary'),
	assert = require('assert');

describe('Bit manipulation', function () {
	describe('Print binary', function () {
		it('should print bits', function () {
			assert.equal(solver.printBinary(2), '10');
			assert.equal(solver.printBinary(0.72), '0.1011101');
		});
	});
});
