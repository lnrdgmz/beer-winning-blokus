const newMatrix = (rows, cols) => {
  return Array(rows).fill(undefined).map(arr => Array(cols).fill(' '))
};
const matrixToString = (matrix) => {
  return matrix.map(row => row.join('')).join('\n');
}

module.exports = {
  newMatrix,
  matrixToString,
}