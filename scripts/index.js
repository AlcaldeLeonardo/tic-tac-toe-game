import { createUser } from "./components/createUser.js";
import { playRound } from "./components/playRound.js";

const playerOne = createUser (`jorge`, "X")
const playerTwo = createUser (`raul`, "O")



playRound(playerOne, playerTwo);