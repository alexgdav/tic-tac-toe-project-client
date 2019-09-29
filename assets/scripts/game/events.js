'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const xPlayer = 'x'
const oPlayer = 'o'

let currMovePlayer

function startClickHandler () {
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').on('click', onMove)
}

function stopClickHandler () {
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', onMove)
}

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
  // console.log(store.game.cells)
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
  const xWins = map.x && winStates.some(winState => winState.every(item => map.x.includes(item)))
  const oWins = map.o && winStates.some(winState => winState.every(item => map.o.includes(item)))
  const xoTie = !map[''] && xWins === false && oWins === false
  if (xWins) {
    console.log('X WON')
    ui.onWin()
    stopClickHandler()
    // console.log({xWins})
  } else if (oWins) {
    console.log('O WON')
    ui.onLoss()
    stopClickHandler()
    // console.log({oWins})
  } else if (xoTie) {
    console.log('a tie')
    ui.onTie()
    stopClickHandler()
  }
}

const switchPlayer = function () {
  if (currMovePlayer === xPlayer) {
    currMovePlayer = oPlayer
  } else {
    currMovePlayer = xPlayer
  }
}

const onNewGame = function () {
  currMovePlayer = oPlayer
  event.preventDefault()
  stopClickHandler()
  startClickHandler()
  api.newGame()
    // TODO: either this or onNewGameSuccess needs to clear the stored board state and any messages
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

const onMove = function (event) {
  ui.failMessageGMProc(' ')
  // console.log(event.target)
  const clickedDiv = event.target
  // console.log(this)
  // ui.onMoveSuccess(clickedDiv)
  const shouldIMoveHere = $(clickedDiv).text()
  if (shouldIMoveHere === '') {
    switchPlayer()
    $(clickedDiv).text(currMovePlayer).addClass('border-primary').addClass('bg-success')
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
    // update the API
    api.move(clickedDiv.id, currMovePlayer, gameOver)
      .then(ui.onMoveSuccess) // message
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
