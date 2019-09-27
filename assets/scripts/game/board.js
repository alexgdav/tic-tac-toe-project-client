'use strict'
// const store = require('../store.js')
const api = require('./api.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

const updateGameBoard = function (target) {
  const id = $(target).attr('id')
  // gameBoard.splice(id, 0, currMovePlayer)
  gameBoard[id] = currMovePlayer
  // console.log(gameBoard)
  // TODO: check whether game over function called here
  api.move(id, currMovePlayer) // TODO: when above done, pass in gameover status also
    .then((res) => {
      console.log(res)
    })
}

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
  updateGameBoard
}
