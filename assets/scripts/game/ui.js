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
  $('#message-top-left').text(failText)
  $('#message-top-left').removeClass('success') // removes success to apply fail
  $('#message-top-left').addClass('failure') // adds fail styling from index.scss for now
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
  console.error('argh')
  failMessageGMProc('pick another space')
}

const onWin = function () {
  successMessageGM('you won! nice job!')
  notifMessageGMProc('')
}

const onLoss = function () {
  failMessageGM('you lost. try again!')
  notifMessageGMProc('')
}

const onTie = function () {
  failMessageGM('a tie! try again for a win!')
  notifMessageGMProc('')
}

const onNewGameSuccess = function (resData) {
  // console.log(resData.game)
  store.game = resData.game
  successMessageGM('new game in process')
  notifMessageGMProc('x turn')
  $('.game-started').show()
  $('.gamespace').empty().removeClass('bg-success').removeClass('border-primary')
  $('#message-bottom-right').text('')
  // console.log(store.game)
}

const onNewGameFail = function () {
  failMessageGM('unable to start, please try again')
}

const onMoveSuccess = function (response) {
  console.log('move successfull', response)
}

const onGetStatsSuccess = function (response) {
  $('#message-bottom-right').text('you have played ' + response.games.length + ' games')
  /*  $('#testing-stats').html(' ')
 response.games.forEach(game => {
    const gameHTML = (`
    <h4>Title: ${game.title}</h4>
    <p>Author: ${game.author}</p>
    <p>ID: ${game.id}</p>
    <br>
     `)
    $('#testing-stats').append(gameHTML) } */
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
  onWin,
  onLoss,
  onTie
}
