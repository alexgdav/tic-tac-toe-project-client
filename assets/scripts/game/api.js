'use strict'

const config = require('../config.js')

const store = require('../store.js')

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

const move = function (index, currMovePlayer, gameOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: currMovePlayer
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  move,
  getStats
}
