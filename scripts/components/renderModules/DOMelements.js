export const ModalElements = (function(){
    const inputP1 = document.querySelector(`#player1`)
    const inputP2 = document.querySelector(`#player2`)
    const btnOk = document.querySelector(`#namesOK`)
    const modalContainer = document.querySelector('.modalContainer')

    return {inputP1, inputP2, btnOk, modalContainer}
})();

export const BoardElements = (function(){
    const BoardP1 = document.querySelector(`playerOneName`)
    const BoardP2 = document.querySelector(`playerTwoName`)
    const boardDOM = document.querySelector(`.board`)

    return {BoardP1, BoardP2, boardDOM}
})();