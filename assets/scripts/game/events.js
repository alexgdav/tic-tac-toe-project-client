'use strict'

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
  for (let i = 0; i < store.game.cells.length; i++) {
    const element = store.game.cells[i]
    if (!map[element]) {
      map[element] = [i]
    } else {
      map[element].push(i)
    }
  }

  const xWins = map.x && winStates.some(winState => winState.every(item => map.x.includes(item)))
  const oWins = map.o && winStates.some(winState => winState.every(item => map.o.includes(item)))
  const xoTie = !map[''] && xWins === false && oWins === false
  let isGameOver
  if (xWins) {
    isGameOver = true
    ui.onWin()
    stopClickHandler()
  } else if (oWins) {
    isGameOver = true
    ui.onLoss()
    stopClickHandler()
  } else if (xoTie) {
    isGameOver = true
    ui.onTie()
    stopClickHandler()
  }
  return isGameOver
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
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

const onMove = function (event) {
  ui.failMessageGMProc(' ')
  const clickedDiv = event.target
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
    store.game.cells[clickedDiv.id] = currMovePlayer
    const gameOver = checkForWin()
    api.move(clickedDiv.id, currMovePlayer, gameOver)
      .then(ui.onMoveSuccess)
      .catch(ui.noMoveHere)
  } else {
    ui.noMoveHere()
  }
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
