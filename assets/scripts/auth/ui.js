'use strict'

// require store object so we can save the user and their token
const store = require('../store.js')

const successMessage = function (successText) {
  $('#message').text(successText)
  $('#message').removeClass('failure') // removes fail class to apply success
  $('#message').addClass('success') // adds success styling from index.scss for now
  // $('#message').delay(3000).text(' ')
  $('form').trigger('reset') // clears the forms after submit
}

const failMessage = function (failText) {
  $('#message').text(failText)
  $('#message').removeClass('success') // removes success to apply fail
  $('#message').addClass('failure') // adds fail styling from index.scss for now
}

const onSignUpSuccess = function () {
  successMessage('registered! please log in')
}

const onSignInSuccess = function (resData) {
  successMessage(`hello! let's play tic tac toe!`)
  store.user = resData.user
  // console.log('resData is', resData)
  $('.logged-out').hide() // need to hide the sign in div
  $('.logged-in').show() // need to show the sign out div
}

const onSignOutSuccess = function () {
  $('.logged-out').show()
  $('.logged-in').hide()// need to show the sign in div
  successMessage('goodbye! come play again!')
}

const onChangePwSuccess = function () {
  successMessage('your password was changed')
}
const onSignUpFail = function () {
  failMessage('sorry, please try registering again')
}

const onSignInFail = function () {
  failMessage('sorry, try signing in again')
}

const onSignOutFail = function () {
  failMessage('sign out failed')
}

const onChangePwFail = function () {
  failMessage('password not changed, please try again!')
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
