'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

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
  ui.onMoveSuccess(clickedDiv)
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
