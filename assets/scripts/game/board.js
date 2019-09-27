// 'use strict'
// const store = require('../store.js')
// const api = require('./api.js')
// // const ui = require('./ui.js')
//
// const gameBoard = ['', '', '', '', '', '', '', '', '']

// const updateGameBoard = function (target) {
//   const id = $(target).attr('id')
//   // gameBoard.splice(id, 0, currMovePlayer)
//   gameBoard[id] = currMovePlayer
//   // console.log(gameBoard)
//
//   api.move(id, currMovePlayer) // TODO: pass in gameover status also
//     .then((res) => {
//       console.log(res)
//       testing(res)
//     //  ui.runTheTests(res)
//       //  })
//       // ui function where i update the store
//       // and then in it
//       // call testing
//       // call the check winner
//       // in that order
//     })
// }

// const winStates = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 4, 6],
//   [2, 5, 8],
//   [3, 4, 5],
//   [6, 7, 8]
// ]

// const map = {}
//
// const testing = function () {
//   for (let i = 0; i < store.game.cells.length; i++) {
//     const element = store.game.cells[i]
//     if (!map[element]) {
//       map[element] = [i]
//     } else {
//       map[element].push(i)
//     }
//   }
//   console.log('map is', map)
// }
//
// const checkForWin = function () {
//   const xWins = winStates.forEach(winState => {
//     winState.every(item => map.x.includes(item))
//   })
//   const oWins = winStates.forEach(function (winState) {
//     winState.every(item => map.o.includes(item))
//   })
//   // const xoTie = winStates.forEach(winState => {
//   //  winState.every(item => map[""] !== '' && xWins === false && oWins === false)
//   //  console.log()
//   // })
// }
//
// const xPlayer = 'x'
// const oPlayer = 'o'
//
// let currMovePlayer
//
// const switchPlayer = function () {
//   if (currMovePlayer === xPlayer) {
//     currMovePlayer = oPlayer
//   } else {
//     currMovePlayer = xPlayer
//   }
//   return currMovePlayer
// }
//
// module.exports = {
//   xPlayer,
//   oPlayer,
//   currMovePlayer,
//   switchPlayer,
//   updateGameBoard,
//   testing,
//   checkForWin
// }
