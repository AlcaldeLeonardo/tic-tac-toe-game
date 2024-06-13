import { getMarker } from "./markers.js";

export function getCell(element, index) {
    const cell = document.createElement(`div`)
        

        cell.className = `board__cell cell`;
        cell.id = index;
        


        cell.appendChild(getMarker(element));

        return cell;
}