export const ModalElements = (function(){
    const inputP1 = document.querySelector(`#player1`)
    const inputP2 = document.querySelector(`#player2`)
    const btnOk = document.querySelector(`#namesOK`)
    const modalContainer = document.querySelector('.modalPlayerContainer')

    return {inputP1, inputP2, btnOk, modalContainer}
})();

export const resultGameElements = (function(){
    const resultGameContainer = document.querySelector(`.resultGameContainer`)
    const resultGameMessage = document.querySelector(`.resultGame__message`)
    const playAgain= document.querySelector(`#PlayAgain`)
    const newGame2 = document.querySelector(`#NewGame2`)

    return {resultGameContainer, resultGameMessage, playAgain, newGame2 }
})();

export const BoardElements = (function(){
    const BoardP1 = document.querySelector(`playerOneName`)
    const scoreP1 = document.querySelector(`#score1`)
    const BoardP2 = document.querySelector(`playerTwoName`)
    const scoreP2 = document.querySelector(`#score2`)
    const boardDOM = document.querySelector(`.board`)

    return {BoardP1, scoreP1, BoardP2, scoreP2, boardDOM}
})();