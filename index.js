class BlokusBoard {
  constructor(n) {
    this.grid = Array(n).fill(Array(n).fill(' '));
  }
}

module.exports = {
  Board,
}