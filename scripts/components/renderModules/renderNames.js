export function renderNames(player1name, player2name) {
    const outputNamep1 = document.querySelector("#playerOneName")
    const outputNamep2 = document.querySelector("#playerTwoName")

    console.log('outputNamep1 :>> ', outputNamep1);

    outputNamep1.innerHTML = player1name;
    outputNamep2.innerHTML = player2name;
}