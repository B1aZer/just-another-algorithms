'use strict';

/**
 * Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 */
module.exports = {

	/**
	 * Rotate given matrix
	 * @param {Array<number>} matrix
	 * @returns {Array<number>}
	 */
	rotateMatrix: function (matrix) {
    var newMatrix = [];
    var len = matrix.length - 1;
    for (var i=0; i<=len; i++) {
      var row = [];
      for (var ii=0; ii<=len; ii++) {
        row.unshift(matrix[ii][i]);
      }
      newMatrix.push(row);
    }
    return newMatrix;
	}
};
