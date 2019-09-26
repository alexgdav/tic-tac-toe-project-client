'use strict'

// require store object so we can save the user and their token
// const store = require('../store.js')

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

/* const msgDiv = $('#message-gm')
function testQueue () {
  msgDiv
    .show()
    .hide(7000)
} */

const onNewGameSuccess = function () {
  successMessageGM('new game started')
  $('.game-started').show()
  // testQueue()
}

const onNewGameFail = function () {
  failMessageGM('unable to start, please try again')
  // testQueue()
}

const onAddXSuccess = function () {
  console.log(event.target)
  $(event.target).text('x')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFail,
  onAddXSuccess,
  successMessageGM,
  failMessageGM
}
