import { createUser } from "./components/createUser.js";
import { playRound } from "./components/playRound.js";
import { ModalElements } from "./components/renderModules/DOMelements.js";
import { hidePlayerMenu } from "./components/renderModules/DisplayStatusMenus.js";
import { renderNames } from "./components/renderModules/renderNames.js";



const playerOne = createUser ("", "X")
const playerTwo = createUser ("", "O")

function getPlayers(){
    playerOne.name = ModalElements.inputP1.value;
    playerTwo.name = ModalElements.inputP2.value;
}

function startGame(){

    getPlayers();
    hidePlayerMenu();
    renderNames(playerOne.name, playerTwo.name)

    playRound(playerOne, playerTwo);
}

ModalElements.btnOk.addEventListener("click", ()=> startGame())
