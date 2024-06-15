export const coordenates = (function(){
    let x;
    let y;
    const setX = (string) => {
        x = string[0]
    }
    const setY = (string) => {
        y = string[1]
    }
    const getX = () => x;
    const getY = () => y;

    return {setX, setY, getX, getY}
})();