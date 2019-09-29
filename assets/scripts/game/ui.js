'use strict'

// require store object so we can save the user and their token
const store = require('../store.js')

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

const noMoreMoves = function () {
  console.log('game is over, no more moves')
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
  $('.gamespace').empty().removeClass('bg-success').removeClass('border-primary')
  // console.log(store.game)
}

const onNewGameFail = function () {
  failMessageGM('unable to start, please try again')
}

const onMoveSuccess = function (response) {
  console.log('move successfull', response)
}

const onGetStatsSuccess = function () {
  console.log(store.user.id)
  console.log(store.game)
}

const onGetStatsFail = function () {
  console.log('no stats here')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  onMoveSuccess,
  successMessageGM,
  failMessageGM,
  notifMessageGMProc,
  failMessageGMProc,
  onGetStatsSuccess,
  onGetStatsFail,
  noMoveHere,
  noMoreMoves
}
