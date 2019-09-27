'use strict'
// require config to use config.apiUrl
const config = require('../config.js')
// require store so we have access to token when we need it later
const store = require('../store.js')
// const ui = require('./ui.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST'
  })
}

const getStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const move = function () {
  /* TODO: api call to patch the game here
  return $.ajax ({
  url: config.apiUrl + PATCH games/:id,  // TODO: figure out how to grab game id
  headers: {
  Authorization: 'Token token=' + store.user.token
  },
  method: 'UPDATE'
}) */
  console.log('finish this API call, Alex!')
}

module.exports = {
  newGame,
  move,
  getStats
}
