'use strict';

module.exports = {

	/**
	 * Given a real number between 0 and 7 (e.g., 0.72)
	 * that is passed in as a double,
	 * print the binary representation.
	 * If the number cannot be represented accurately in binary
	 * with at most 32 characters, print "ERROR."
	 * @param {number} number
	 * @return {string}
	 */
	printBinary: function (number) {
    var isNumber = function(num) {
      return !isNaN(num) && isFinite(num);
    };
    if (!isNumber(number)) {
      console.info('error');
      return "ERROR.";
    }
    if (number === 1 || number === 0) {
      return number;
    }
    var base = Math.floor(number/2);
    var odd = number % 2;
    return this.printBinary(base).toString() + odd.toString();
  }
};
