import { gameBoard } from "../gameBoard.js";

export function updateBoard() {
    const boardDOM = document.querySelector(`.board`)
    let matrix = gameBoard.getBoard();
    boardDOM.innerHTML = "";

    matrix = matrix.flat();

    let i = 0;
    matrix.forEach(element => {
        const cell = document.createElement(`div`)
        const marker = document.createElement(`span`)

        cell.className = `board__cell cell`;
        cell.id = i;
        if(element == null) {
            marker.innerHTML = ``;
        }
        if(element == `X`) {
            marker.className = "cell__marker cell__marker--cross marker marker--cross"
            marker.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Cross</title><path d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"/></svg>`
            
            }
            
        if(element == `O`) {
            marker.className = "cell__marker cell__marker--circle marker marker--circle"
            marker.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Circle</title><path d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z"/></svg>`
        }


        cell.appendChild(marker);
        boardDOM.appendChild(cell);

        i++;
        console.log(i)
    });
}