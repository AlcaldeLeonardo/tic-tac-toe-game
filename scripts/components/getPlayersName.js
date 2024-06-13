import { createUser } from "./createUser.js"

export function getPlayersName(){
    const inputP1 = document.querySelector(`#player1`)
    const inputP2 = document.querySelector(`#player2`)
    const H2P1 = document.querySelector(`playerOneName`)
    const H2P2 = document.querySelector(`playerTwoName`)

    const playerOne = createUser (inputP1.value, "X")
    const playerTwo = createUser (inputP2.value, "O")

    H2P1.innerHTML = playerOne.name
    H2P2.innerHTML = playerTwo.name
}