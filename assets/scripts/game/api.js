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

const move = function (id, currMovePlayer) /* then the game status when done see board.js */{
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: id,
          value: currMovePlayer
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  move,
  getStats
}
