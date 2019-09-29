'use strict'

// require store object so we can save the user and their token
const store = require('../store.js')

const successMessage = function (successText) {
  $('#message-top-right').text(successText)
  $('#message-top-right').removeClass('failure') // removes fail class to apply success
  $('#message-top-right').addClass('success') // adds success styling from index.scss for now
  $('form').trigger('reset') // clears the forms after submit
}

const failMessage = function (failText) {
  $('#message-top-right').text(failText)
  $('#message-top-right').removeClass('success') // removes success to apply fail
  $('#message-top-right').addClass('failure') // adds fail styling from index.scss for now
}

/* const msgDiv = $('#message')
function testQueue () {
  msgDiv
    .show()
    .hide(7000)
} */
const onSignUpSuccess = function () {
  successMessage('registered! please log in')
  // testQueue()
}

const onSignInSuccess = function (resData) {
  successMessage(`hello! let's play tic tac toe!`)
  store.user = resData.user
  // console.log('resData is', resData)
  $('.logged-out').hide() // need to hide the sign in div
  $('.logged-in').show() // need to show the sign out div
  // testQueue()
}

const onSignOutSuccess = function () {
  $('.logged-out').show()
  $('.logged-in').hide()// need to show the sign in div
  successMessage('goodbye! come play again!')
  $('.gamespace').empty().removeClass('bg-success').removeClass('border-primary')
  $('.game-started').hide() // hide the gameboard
  // testQueue()
}

const onChangePwSuccess = function () {
  successMessage('your password was changed')
//  testQueue()
}
const onSignUpFail = function () {
  failMessage('sorry, please try registering again')
//  testQueue()
}

const onSignInFail = function () {
  failMessage('sorry, try signing in again')
//  testQueue()
}

const onSignOutFail = function () {
  failMessage('sign out failed')
//  testQueue()
}

const onChangePwFail = function () {
  failMessage('password not changed, please try again!')
//  testQueue()
}

// export all the functions in this file to make usable in other files

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onSignOutFail,
  onSignOutSuccess,
  onChangePwSuccess,
  onChangePwFail,
  successMessage,
  failMessage
}
