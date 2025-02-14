import { getMove } from "./script.js";

export class Square {
    constructor(obj) {
        this.square = document.createElement("div");
        this.square.classList.add("square");
        obj.appendChild(this.square)

        this.clickHandler = null;
    }

    setCross() {
        if (this.square.innerHTML === ""){
            if (this.clickHandler)
                this.square.removeEventListener("click", 
                this.clickHandler, { once: true });
            this.clickHandler = () => setCross(this.square);
            this.square.addEventListener("click", 
                this.clickHandler, { once: true });
        }
    }

    setZero() {
        if (this.square.innerHTML === ""){
            if (this.clickHandler)
            this.square.removeEventListener("click", 
            this.clickHandler, { once: true });
        this.clickHandler = () => setZero(this.square);
        this.square.addEventListener("click", 
            this.clickHandler, { once: true });
        }
    }

    clearEvent() {
        this.square.removeEventListener("click", 
            this.clickHandler, { once: true });
    }
}

function setCross(square) {
    let firstLine = document.createElement("div");
    let secondLine = document.createElement("div");

    firstLine.classList.add("line", "line1");
    secondLine.classList.add("line", "line2");
    
    square.innerText = "cross";
    square.style.pointerEvents = "none";
    square.append(firstLine, secondLine);
   
    getMove("zero");
}

function setZero(square) {
    let firstZero = document.createElement("div");
    let secondZero = document.createElement("div");
    
    firstZero.classList.add("circle", "circle1");
    secondZero.classList.add("circle", "circle2");

    square.innerText = "zero";
    square.style.pointerEvents = "none";
    square.append(firstZero, secondZero);
    
    getMove("cross");
}