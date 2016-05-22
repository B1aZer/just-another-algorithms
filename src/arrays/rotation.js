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
    for (var i=len; i>=0; i--) {
      for (var ii=0; ii<len; ii++) {
        var row = [];
        row.push(matrix[i][ii]);
        newMatrix.push(row);
      }
    }
    return newMatrix;
	}
};
