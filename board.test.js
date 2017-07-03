const blokus = require('./index.js');

const BlokusBoard = blokus.BlokusBoard;

const empty3by3 = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

describe('Blokus class', () => {
  test('should return an object', () => {

    const board = new BlokusBoard(3);
    expect(board).toBeInstanceOf(BlokusBoard);
  })
  test('should generate a grid of size n', () => {
    expect(new BlokusBoard(2).grid).toEqual([[' ', ' '], [' ', ' ']]);
    expect(new BlokusBoard(3).grid).toEqual(empty3by3);
  })
})

describe('pieces should be placed on the gird', () => {
  test('', () => {
    const board = new BlokusBoard(3);
    board.place([['#']], [1,1]);
    expect(board.grid).toEqual([
      [' ', ' ', ' '],
      [' ', '#', ' '],
      [' ', ' ', ' ']
    ]);
  });
  test('', () => {
    const board = new BlokusBoard(3);
    board.place([['#', '#'], ['#']], [0,0]);
    expect(board.grid).toEqual([
      ['#', '#', ' '],
      ['#', ' ', ' '],
      [' ', ' ', ' ']
    ]);
  })
})

describe('isLegalMove', () => {
  const single = [['#']];
  const board = new BlokusBoard(3);
  board.place([['#', '#'], ['#']], [0,0]);
  test('should return false when trying to place a piece on an existing piece', () => {
    expect(board.isLegalMove(single, [0,0])).toBe(false);
    expect(board.isLegalMove(single, [1,0])).toBe(false);
    expect(board.isLegalMove(single, [0,1])).toBe(false);
  })
  test('should return true when all spaces are clear', () => {
    expect(board.isLegalMove(single, [1,1])).toBe(true);
    expect(board.isLegalMove(single, [0,2])).toBe(true);
  })
})

