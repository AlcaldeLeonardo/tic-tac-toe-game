import { updateBoard } from "./renderModules/renderBoard.js";

export const gameBoard = (function () {
    const board = [];

    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push(null);
        }
    }

    const getBoard = () => board;

    const setBoard = (marker, row, column) => {
        board[row][column] = marker;
    };

    const showBoard = () => {
        for (let index = 0; index < 3; index++) {
            console.log(...board[index]);
        }
        updateBoard();
    };

    return { getBoard, setBoard, showBoard };
})();
