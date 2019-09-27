'use strict'

// require store object so we can save the user and their token
const store = require('../store.js')
// const api = require('./api.js')
const board = require('./board.js')

const successMessageGM = function (successText) {
  $('#message-top-left').text(successText)
  $('#message-top-left').removeClass('failure') // removes fail class to apply success
  $('#message-top-left').addClass('success') // adds success styling from index.scss for now
  $('form').trigger('reset') // clears the forms after submit
}

const failMessageGM = function (failText) {
  $('#message-gm').text(failText)
  $('#message-gm').removeClass('success') // removes success to apply fail
  $('#message-gm').addClass('failure') // adds fail styling from index.scss for now
}

const notifMessageGMProc = function (notifText) {
  $('#message-bottom-left').text(notifText)
  $('#message-bottom-left').removeClass('failure') // removes fail class to apply success
  $('#message-bottom-left').addClass('success')
}
const failMessageGMProc = function (failText) {
  $('#message-bottom-right').text(failText)
  $('#message-bottom-right').removeClass('success') // removes success to apply fail
  $('#message-bottom-right').addClass('failure')
}

const noMoveHere = function () {
  failMessageGMProc('pick another space')
  // testQueue1()
}

/* const msgDivGm1 = $('#message-bottom-left')
function testQueue1 () {
  msgDivGm1
    .show()
    .hide(1000)
    .show()
} */

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

const onMoveSuccess = function (target) {
  const shouldIMoveHere = $(target).text()
  if (shouldIMoveHere === '') {
    $(target).text(board.switchPlayer)
    onSwitchPlayerSuccess()
  } else {
    noMoveHere()
  }
  // console.log(store.game)
  board.updateGameBoard(target)
}

const onSwitchPlayerSuccess = function () {
  const msg = $('#message-bottom-left').text()
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
