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
      return null;
    }
    var calcMinTwo = function(num) {
      var pr = 0;
      var pow = 1;
      var fnd = 2;
      while (pr <= num) {
        pr *= pr;
        pow += 1;
      }
      return pow;
    };
    var makeBinFromArr = function(arr) {
      if (!arr || arr.length !== 2) {
        return null;
      }
      var bin = new Array(7);
      for (var i=0; i<arr.length; i++) {
        bin[i] = 1;
      }
    };
    return null;
	}
};
