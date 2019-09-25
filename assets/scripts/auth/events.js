'use strict'
// require getFormFields to get formData
// require api to get those functions
// require ui to get those functions

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  // preventDefault stops page reload
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formDatais', formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
}

const onSignIn = function (event) {
  // preventDefault stops page reload
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formDatais', formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

const onChangePw = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFail)
}

// export all the functions in this file to make them available to other files

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
