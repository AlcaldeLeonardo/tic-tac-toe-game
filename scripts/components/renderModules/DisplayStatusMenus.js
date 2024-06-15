import { ModalElements, resultGameElements } from "./DOMelements.js";

export function hidePlayerMenu(){
    ModalElements.modalContainer.style.display = "none";
    
}
export function showPlayerMenu(){
    ModalElements.modalContainer.style.display = "flex";
    ModalElements.inputP1.value = "";
    ModalElements.inputP2.value = "";

    ModalElements.inputP1.focus();
}

export function showResultGame(message){
    resultGameElements.resultGameContainer.style.display = "flex";
    resultGameElements.resultGameMessage.innerHTML = message
}
export function hideResultGame(){
    resultGameElements.resultGameContainer.style.display = "none";
}