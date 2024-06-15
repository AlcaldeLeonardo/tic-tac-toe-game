import { createUser } from "./createUser.js"
import { BoardElements, ModalElements } from "./renderModules/DOMelements.js"

export function getPlayersName(){
    const playerOne = createUser (ModalElements.inputP1.value, "X")
    const playerTwo = createUser (ModalElements.inputP2.value, "O")

    BoardElements.BoardP1 .innerHTML = playerOne.name
    BoardElements.BoardP2.innerHTML = playerTwo.name

}