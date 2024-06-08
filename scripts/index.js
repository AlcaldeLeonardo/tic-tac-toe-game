function createUser (name, marker) {
    return {name, marker}
}

const gameBoard = (function () {
    const board = [];

    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push(1);
        }
        
    }

    const getBoard = () => board;

    return {getBoard}
})();

const playerOne = createUser (`jorge`, 1)
const playerTwo = createUser (`raul`, 2)



console.log('playerOne :>> ', playerOne.name);
console.log('playerTwo :>> ', playerTwo.name);
console.log('board :>> ', gameBoard.getBoard());