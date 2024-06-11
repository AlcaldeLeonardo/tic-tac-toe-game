import { createUser } from "./components/createUser.js";
import { gameBoard } from "./components/gameBoard.js";

const playerOne = createUser (`jorge`, 1)
const playerTwo = createUser (`raul`, 2)



console.log('playerOne :>> ', playerOne.name);
console.log('playerTwo :>> ', playerTwo.name);
console.log('board :>> ', gameBoard.getBoard());