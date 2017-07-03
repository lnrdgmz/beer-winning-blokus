const utils = require('./utils');

class BlokusBoard {
  constructor(n) {
    // this.grid = Array(n).fill(undefined).map(arr => Array(n).fill(' '));
    this.grid = utils.newMatrix(n, n);
  }
  place(piece, [rowIdx, colIdx]) {
    piece.forEach((row, pieceRowIdx) => {
      row.forEach((square, pieceColIdx) => {
        if (square !== ' ') {
          this.grid[rowIdx + pieceRowIdx][colIdx + pieceColIdx] = square;
        }
      })
    })
  }
  isLegalMove(piece, [rowIdx, colIdx]) {
    /**
     * Incomplete for now. Just checks if the spaces are empty.
     */
    // check that all spaces are empty
    let allSpacesClear = true;
    piece.forEach((row, pieceRowIdx) => {
      row.forEach((square, pieceColIdx) => {
        if (square !== ' ' &&
          this.grid[rowIdx + pieceRowIdx][colIdx + pieceColIdx] !== ' ') {
          allSpacesClear = false;
        }
      })
    })
    return allSpacesClear;
    // check that the new piece is not touching sides with a piece of the same color
    // check that the new piece touches corners with a piece of the same color on the board
    // return if all conditions are met
  }
  toString() {
    // return this.grid.map(row => row.join('')).join('\n');
    const top = Array(this.grid.length + 2).fill('_').join('');
    const bottom = Array(this.grid.length + 2).fill('¯').join('');
    const board =  utils.matrixToString(this.grid);
    return top + '\n|' + board.replace(/\n/g, '|\n|') + '|\n' + bottom;
  }
}

module.exports = BlokusBoard;