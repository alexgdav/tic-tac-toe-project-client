'use strict'
// const store = require('../store.js')

/* this is what the API returns when you start a new game:
{"game":{"id":45,"cells":["","","","","","","","",""],"over":false,
"player_x":{"id":13,"email":"tarkin@deathstar.com"},"player_o":null}} */

// const currentGame = []
// const currentCells = store.game

/* $('.gamespace').each(function () {
  const id = $(this).attr('id')
  currentGame.push(id)
}) */

const gameBoard = ['', '', '', '', '', '', '', '', '']
// div ids for the board in index.html match the indexes of the array items

const xPlayer = 'x'
const oPlayer = 'o'

let currMovePlayer

const switchPlayer = function () {
  if (currMovePlayer === xPlayer) {
    currMovePlayer = oPlayer
  } else {
    currMovePlayer = xPlayer
  }
  return currMovePlayer
}

module.exports = {
  xPlayer,
  oPlayer,
  currMovePlayer,
  switchPlayer,
  gameBoard
}
