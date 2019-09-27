'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const xPlayer = 'x'
const oPlayer = 'o'

let currMovePlayer

const winStates = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

const checkForWin = function () {
  const map = {}
  console.log(store.game.cells)
  // looping through the game board and creating map object of x and o cells
  for (let i = 0; i < store.game.cells.length; i++) {
    const element = store.game.cells[i]
    if (!map[element]) {
      map[element] = [i]
    } else {
      map[element].push(i)
    }
  }
  console.log({map})
  // looping through wins to check if x wins
  const xWins = winStates.some(winState => winState.every(item => map.x.includes(item)))
  console.log({xWins})
  if (xWins) {
    console.log('X WON')
    return true
  } else {
    console.log('no win')
    return false
  }
  // const oWins = winStates.forEach(function (winState) {
  //   winState.every(item => map.o.includes(item))
  // })
  // const xoTie = winStates.forEach(winState => {
  //  winState.every(item => map[""] !== '' && xWins === false && oWins === false)
  //  console.log()
  // })
}

const switchPlayer = function () {
  if (currMovePlayer === xPlayer) {
    currMovePlayer = oPlayer
  } else {
    currMovePlayer = xPlayer
  }
}

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
    // TODO: either this or onNewGameSuccess needs to clear the stored board state and any messages
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

const onMove = function (event) {
  // console.log(event.target)
  const clickedDiv = event.target
  // console.log(this)
  // ui.onMoveSuccess(clickedDiv)
  const shouldIMoveHere = $(clickedDiv).text()
  if (shouldIMoveHere === '') {
    switchPlayer()
    $(clickedDiv).text(currMovePlayer)
    const msg = $('#message-bottom-left').text()
    if (msg === 'x turn') {
      ui.notifMessageGMProc('o turn')
    } else {
      ui.notifMessageGMProc('x turn')
    }
    // add the current player to gameboard
    store.game.cells[clickedDiv.id] = currMovePlayer
    // check for the winner
    const gameOver = checkForWin()
    // update the api
    api.move(clickedDiv.id, currMovePlayer, gameOver)
      .then(ui.onMoveSuccess)// message
      .catch(ui.noMoveHere) // message
  } else {
    ui.noMoveHere()
  }
  // console.log(store.game)
}

const onGetStats = function () {
  event.preventDefault()
  api.getStats()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsFail)
}
module.exports = {
  onNewGame,
  onMove,
  onGetStats

}
