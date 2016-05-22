'use strict';

/**
 * Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0
 */
module.exports = {

	/**
	 * Set zero in rows and columns with zero item
   * @param {Array}
   * @returns {Array}
	 */
	setZero: function (matrix) {
    var rows = [];
    var cols = [];
    var i, ii;
    var len = matrix.length;
    for (i=0; i<len; i++) {
      for (ii=0; ii<len; ii++) {
        if (matrix[i][ii] === 0) {
          rows.push(i);
          cols.push(ii);
        }
      }
    }
    for (i=0; i<len; i++) {
      for (ii=0; ii<len; ii++) {
        if (rows.indexOf(i) >= 0) {
          matrix[i][ii] = 0;
        }
        if (cols.indexOf(ii) >= 0) {
          matrix[i][ii] = 0;
        }
      }
    }
		return matrix;
	}
};
