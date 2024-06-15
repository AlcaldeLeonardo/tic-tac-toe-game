import { coordenates } from "./coordenates.js";
import { gameBoard } from "./gameBoard.js";
import { playerWin, validateTie } from "./gameoverCondition.js";
import { getMarker } from "./renderModules/markers.js";
import { renderBoard } from "./renderModules/renderBoard.js";
import { validateCoordenates } from "./validateCoordenate.js";

let cellsBtn;

export function playRound(player1, player2) {
    let activePlayer = player1;


    renderBoard();

    cellsBtn = document.querySelectorAll(`.cell`);

    cellsBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            coordenates.setX(btn.id);
            coordenates.setY(btn.id);
            activePlayer = evalStatusGame(btn, coordenates, activePlayer, player1, player2);
        })
    );

    
}

function evalStatusGame(btn, coordenates, activePlayer, player1, player2) {
    let x = coordenates.getX();
    let y = coordenates.getY();

    if (validateCoordenates(x, y)) {
        updateCell(btn, activePlayer.marker, x, y);

        if (!playerWin(activePlayer)) {
            if (validateTie()) {
                console.log("Tie");
                removeEventListeners(); //to remove eventListener in this case
            } else return switchPlayer(activePlayer, player1, player2);
        } else {
            console.log(`${activePlayer.name} Win!!`);
            removeEventListeners(); //to remove eventListener in this case
        }

        return activePlayer
    }
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

