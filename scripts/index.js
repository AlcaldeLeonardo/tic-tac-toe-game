import { createUser } from "./components/createUser.js";
import { getPlayersName } from "./components/getPlayersName.js";
import { playRound } from "./components/playRound.js";
import { renderNames } from "./components/renderModules/renderNames.js";

const inputP1 = document.querySelector(`#player1`)
const inputP2 = document.querySelector(`#player2`)
const btnOk = document.querySelector(`#namesOK`)
const modalContainer = document.querySelector('.modalContainer')

const playerOne = createUser ("", "X")
const playerTwo = createUser ("", "O")

function startGame(){
    playerOne.name = inputP1.value;
    playerTwo.name = inputP2.value;
    console.log('input.value :>> ', inputP1.value);
    modalContainer.style.display = "none";

    renderNames(playerOne.name, playerTwo.name)
    playRound(playerOne, playerTwo);
}

btnOk.addEventListener("click", ()=> startGame())
