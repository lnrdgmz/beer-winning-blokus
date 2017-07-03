const utils = require('./utils');

const templates = [
  '# #\n' +
  '###',

  '#####',

  '#',

  '#  \n' +
  '## \n' +
  ' ##',

  '##\n' +
  '# '
];
const pieces = templates.map(t => t.split('\n').map(line => line.split('')));

const flip = (piece) => {
  return piece.reduce((acc, row) => {
    return [...acc, row.slice().reverse()];
  }, [])
};

const rotate = (piece) => {
  const newPiece = utils.newMatrix(piece[0].length, piece.length);
  piece.forEach((row, rowIdx) => {
    row.forEach((square, colIdx) => {
      newPiece[row.length - 1 - colIdx][rowIdx] = square;
    })
  })
  return newPiece;
}

module.exports = {
  pieces,
  flip,
  rotate,
}