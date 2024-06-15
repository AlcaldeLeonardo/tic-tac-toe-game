import { coordenates } from "./coordenates.js";
import { gameBoard } from "./gameBoard.js";
import { playerWin, validateTie } from "./gameoverCondition.js";
import { BoardElements } from "./renderModules/DOMelements.js";
import { showResultGame } from "./renderModules/DisplayStatusMenus.js";
import { getMarker } from "./renderModules/markers.js";
import { renderBoard } from "./renderModules/renderBoard.js";
import { validateCoordenates } from "./validateCoordenate.js";

let cellsBtn;
let activePlayer;


export function playRound(player1, player2) {
    activePlayer = player1;

    renderBoard();
    updateScore(player1, player2);
    

    cellsBtn = document.querySelectorAll(`.cell`);

    cellsBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            coordenates.setX(btn.id);
            coordenates.setY(btn.id);
            activePlayer = evalStatusGame(btn, coordenates, activePlayer, player1, player2);
        })
    );

    
}

function updateScore(player1, player2){
    BoardElements.scoreP1.innerHTML = player1.getScore()
    BoardElements.scoreP2.innerHTML = player2.getScore()
}

function evalStatusGame(btn, coordenates, activePlayer, player1, player2) {
    let x = coordenates.getX();
    let y = coordenates.getY();

    if (validateCoordenates(x, y)) {
        updateCell(btn, activePlayer.marker, x, y);

        if (!playerWin(activePlayer)) {
            if (validateTie()) {
                showResultGame("Tie");
                removeEventListeners(); //to remove eventListener in this case
            } else return switchPlayer(activePlayer, player1, player2);
        } else {
            activePlayer.givePoint();
            showResultGame(`${activePlayer.name} Win!!`);
            console.log();
            removeEventListeners(); //to remove eventListener in this case
        }

        return activePlayer;
    }
    return activePlayer;
}

function updateCell(btn, marker, x, y) {
    gameBoard.setBoard(marker, x, y);
    btn.appendChild(getMarker(marker));
}

function switchPlayer(active, player1, player2) {
    active = active == player1 ? player2 : player1;

    console.log(`Es el turno de ${active.name}`);
    return active
}

function removeEventListeners() {
    cellsBtn.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

