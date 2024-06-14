import { createUser } from "./components/createUser.js";
import { ModalElements } from "./components/renderModules/DOMelements.js";
import { startGame } from "./components/starGame.js";



const playerOne = createUser ("", "X")
const playerTwo = createUser ("", "O")

ModalElements.btnOk.addEventListener("click", ()=> startGame(playerOne, playerTwo))
