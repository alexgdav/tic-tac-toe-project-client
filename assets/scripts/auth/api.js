'use strict'
// require config to use config.apiUrl
const config = require('../config.js')
// require store so we have access to token when we need it later
const store = require('../store.js')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const changePw = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}
// export all the functions in this file to make them available to other files

module.exports = {
  signUp,
  signIn,
  signOut,
  changePw
}
