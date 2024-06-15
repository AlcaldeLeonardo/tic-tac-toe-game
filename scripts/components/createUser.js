export function createUser (name, marker) {
    let score = 0;

    const givePoint = ()=> score++;
    const getScore = () => score;
    const resetScore = () => score = 0;
    return {name, marker, givePoint, getScore, resetScore}
}