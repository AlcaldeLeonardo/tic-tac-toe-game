import { playRound } from "./playRound.js";
import { ModalElements } from "./renderModules/DOMelements.js";
import { hidePlayerMenu } from "./renderModules/DisplayStatusMenus.js";
import { renderNames } from "./renderModules/renderNames.js";

export function startGame(player1, player2){

    getPlayers(player1,player2);
    hidePlayerMenu();
    renderNames(player1.name, player2.name)

    playRound(player1, player2);
}

function getPlayers(player1, player2){
    player1.name = ModalElements.inputP1.value;
    player2.name = ModalElements.inputP2.value;
}