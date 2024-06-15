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

    const resetBoard = () => {
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i].push(null);
            }
        }
    }

    return { getBoard, setBoard, resetBoard };
})();
