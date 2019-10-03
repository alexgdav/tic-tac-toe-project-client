'use strict'

const store = require('../store.js')

const successMessage = function (successText) {
  $('#message-top-right').text(successText)
  $('#message-top-right').removeClass('failure')
  $('#message-top-right').addClass('success')
  $('form').trigger('reset')
}

const failMessage = function (failText) {
  $('#message-top-right').text(failText)
  $('#message-top-right').removeClass('success')
  $('#message-top-right').addClass('failure')
  $('form').trigger('reset') // TODO: need to add this -- on change pw fail form didn't clear
}

const onSignUpSuccess = function () {
  successMessage('registered! please log in')
}

const onSignInSuccess = function (resData) {
  store.user = resData.user
  $('.logged-out').hide()
  $('.logged-in').show()
  successMessage('hello, ' + store.user.email)
}

const onSignOutSuccess = function () {
  $('.logged-out').show()
  $('.logged-in').hide()
  successMessage('goodbye! come play again!')
  $('.gamespace').empty().removeClass('bg-success').removeClass('border-primary')
  $('.game-started').hide()
  $('#message-top-left').text('')
  $('#message-bottom-left').text('')
  $('#message-bottom-right').text('')
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
