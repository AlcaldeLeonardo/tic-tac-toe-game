import { createUser } from "./components/createUser.js";
import { gameBoard } from "./components/gameBoard.js";
import {
    ModalElements,
    resultGameElements,
} from "./components/renderModules/DOMelements.js";
import {
    showPlayerMenu,
    hideResultGame,
    hidePlayerMenu,
} from "./components/renderModules/DisplayStatusMenus.js";
import { startGame } from "./components/starGame.js";

const playerOne = createUser("", "X");
const playerTwo = createUser("", "O");

showPlayerMenu();

ModalElements.btnOk.addEventListener("click", () => {
    if (validateNames()) {
        hidePlayerMenu();
        startGame(playerOne, playerTwo);
    }
});
resultGameElements.playAgain.addEventListener(`click`, () => {
    gameBoard.resetBoard();
    hideResultGame();
    startGame(playerOne, playerTwo);
});
resultGameElements.newGame2.addEventListener(`click`, () => {
    gameBoard.resetBoard();
    showPlayerMenu();
    hideResultGame();
    if (validateNames()) {
        resetPlayersScore();
        startGame(playerOne, playerTwo);
    }
});

function validateNames() {
    if (
        ModalElements.inputP1.value != "" &&
        ModalElements.inputP2.value != ""
    ) {
        return true;
    }
    return false;
}

function resetPlayersScore() {
    playerOne.resetScore();
    playerTwo.resetScore();
}
