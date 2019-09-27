'use strict'

// require store object so we can save the user and their token
const store = require('../store.js')
// const api = require('./api.js')
const board = require('./board.js')

const successMessageGM = function (successText) {
  $('#message-gm').text(successText)
  $('#message-gm').removeClass('failure') // removes fail class to apply success
  $('#message-gm').addClass('success') // adds success styling from index.scss for now
  $('form').trigger('reset') // clears the forms after submit
}

const failMessageGM = function (failText) {
  $('#message-gm').text(failText)
  $('#message-gm').removeClass('success') // removes success to apply fail
  $('#message-gm').addClass('failure') // adds fail styling from index.scss for now
}

const notifMessageGMProc = function (notifText) {
  $('#message-gm-process').text(notifText)
  $('#message-gm-process').removeClass('failure') // removes fail class to apply success
  $('#message-gm-process').addClass('success')
}
const failMessageGMProc = function (failText) {
  $('#message-gm-process').text(failText)
  $('#message-gm-process').removeClass('success') // removes success to apply fail
  $('#message-gm-process').addClass('failure')
}

const noMoveHere = function () {
  failMessage('pick another space') // need to give this one its own div
  testQueue1()
}

const msgDivGm = $('#message-gm-process')
function testQueue1 () {
  msgDivGm
    .show()
    .hide(1000)
    .show()
}

const onNewGameSuccess = function (resData) {
  // console.log(resData.game)
  store.game = resData.game
  successMessageGM('new game in process')
  notifMessageGMProc('x turn')
  $('.game-started').show()
  $('.gamespace').empty()
  // console.log(store.game)
}

const onNewGameFail = function () {
  failMessageGM('unable to start, please try again')
}

const onMoveSuccess = function () {
  const shouldIMoveHere = $(event.target).text()
  if (shouldIMoveHere === '') {
    $(event.target).text(board.switchPlayer)
    onSwitchPlayerSuccess()
  } else {
    noMoveHere()
  }
}

const onSwitchPlayerSuccess = function () {
  const msg = $('#message-gm-process').text()
  if (msg === 'x turn') {
    notifMessageGMProc('o turn')
  } else {
    notifMessageGMProc('x turn')
  }
}

const onGetStatsSuccess = function () {
  console.log(store.user.id)
  console.log(store.game)
}

const onGetStatsFail = function () {
  console.log('no stats here')
}

/* const mod = {
  onNewGameSuccess,
  onNewGameFail,
  onMoveSuccess,
  successMessageGM,
  failMessageGM,
  onSwitchPlayerSuccess,
  onGetStatsSuccess,
  onGetStatsFail
}

module.exports = mod
window.gameUI = mod */
 module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  onMoveSuccess,
  successMessageGM,
  failMessageGM,
  onSwitchPlayerSuccess,
  onGetStatsSuccess,
  onGetStatsFail
}
