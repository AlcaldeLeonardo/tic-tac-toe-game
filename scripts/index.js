import { createUser } from "./components/createUser.js";
import { playRound } from "./components/playRound.js";

const playerOne = createUser (prompt(`Player 1, what's your name?`), "X")
const playerTwo = createUser (prompt(`Player 2, what's your name?`), "O")


playRound(playerOne, playerTwo);