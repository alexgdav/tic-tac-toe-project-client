'use strict'

const store = require('../store.js')

const niceMoves = ['not bad!', 'i would not have picked that space', 'a great move!', 'okay, sure!', 'the most okayest move!', 'pretty good move!', 'good choice!', 'good move!', 'are you sure?', 'not a bad choice!']
const niceMove = function () {
  return niceMoves[Math.floor(Math.random() * niceMoves.length)]
}

const successMessageGM = function (successText) {
  $('#message-top-left').text(successText)
  $('#message-top-left').removeClass('failure')
  $('#message-top-left').addClass('success')
  $('form').trigger('reset')
}

const failMessageGM = function (failText) {
  $('#message-top-left').text(failText)
  $('#message-top-left').removeClass('success')
  $('#message-top-left').addClass('failure')
}

const notifMessageGMProc = function (notifText) {
  $('#message-bottom-left').text(notifText)
  $('#message-bottom-left').removeClass('failure')
  $('#message-bottom-left').addClass('success')
}
const failMessageGMProc = function (failText) {
  $('#message-bottom-right').text(failText)
  $('#message-bottom-right').removeClass('success')
  $('#message-bottom-right').addClass('failure')
}

const noMoveHere = function () {
  failMessageGMProc('INVALID MOVE. PICK ANOTHER SPACE!')
}

const onWin = function () {
  successMessageGM('you won! nice job!')
  notifMessageGMProc('')
  $('.box').removeClass('hover')
}

const onLoss = function () {
  failMessageGM('you lost. try again!')
  notifMessageGMProc('')
  $('.box').removeClass('hover')
}

const onTie = function () {
  failMessageGM('a tie! try again for a win!')
  notifMessageGMProc('')
  $('.box').removeClass('hover')
}

const onNewGameSuccess = function (resData) {
  store.game = resData.game
  successMessageGM('new game in process')
  notifMessageGMProc('x turn')
  $('.game-started').show()
  $('.gamespace').empty().removeClass('bg-success').removeClass('border-primary')
  $('#message-bottom-right').text('')
  $('.box').addClass('hover')
}

const onNewGameFail = function () {
  failMessageGM('unable to start, please try again')
}

const onMoveSuccess = function (response) {
  $('#message-bottom-right').text(niceMove())
}

const onGetStatsSuccess = function (response) {
  $('#message-bottom-right').text('you have played ' + response.games.length + ' games')
}

const onGetStatsFail = function () {
  $('#message-bottom-right').text('could not find your stats, sorry!')
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
  onWin,
  onLoss,
  onTie
}
