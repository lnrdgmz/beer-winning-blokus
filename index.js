const readline = require('readline')
const sample = require('lodash').sample;
const chalk = require('chalk');

const BlokusBoard = require('./board');
const pieces = require('./pieces');
const utils = require('./utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const board = new BlokusBoard(10);

const colors = [
  chalk.blue,
  chalk.red,
  chalk.yellow,
  chalk.green,
];

const colorPiece = (colorFunc, piece) => {
  return piece.map(row => {
    return row.map(square => {
      return square !== ' ' ? colorFunc(square) : ' ';
    })
  })
}

const promptMove = (board, piece0, playerIdx) => {
  const piece = colorPiece(colors[playerIdx], piece0)
  console.log('Board:')
  console.log(board.toString());
  console.log('Piece:');
  console.log(utils.matrixToString(piece));
  rl.question('[r]otate, [f]lip, or [p]lace piece?', (str) => {
    if (str === 'r') {
      promptMove(board, pieces.rotate(piece), playerIdx)
    } else if (str === 'f') {
      promptMove(board, pieces.flip(piece), playerIdx)
    } else if (str === 'p') {
      promptPlace(board, piece, playerIdx);
    } else {
      promptMove(board, piece, playerIdx);
    }
  })
}

const promptPlace = (board, piece, playerIdx) => {
  rl.question('Choose the location (row, col):', (str) => {
    const [row, col] = str.split(',').map(c => parseInt(c, 10));
    board.place(piece, [row, col]);
    promptMove(board, sample(pieces.pieces), (playerIdx + 1) % 4)
  })
}

promptMove(board, sample(pieces.pieces), 0)