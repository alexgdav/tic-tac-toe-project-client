'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

const onAddX = function (event) {
  // console.log(event.target)
  const clickedDiv = event.target
  ui.onAddXSuccess(clickedDiv)
  // api.addX()
  //  .then(ui.onAddXSuccess)
  // ui.onAddXSuccess(formData)
  // api.addX()
  // .catch()
}

module.exports = {
  onNewGame,
  onAddX

}
