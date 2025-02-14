import { Square } from "./square.js";

let container = document.querySelector(".container");
let finished = false;
let currentMove = "cross";
let squares = [];
let combinations = [[0, 1, 2], [3, 4, 5], 
                [6, 7, 8], [0, 3, 6], [1, 4, 7], 
                [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function setMove() {
    if (!finished) {
        squares.forEach(square => {
            if (currentMove === "cross") {
                square.setCross();
            } else if (currentMove === "zero") {
                square.setZero();
            }
        })
    } else {
        squares.forEach(square => {
            square.clearEvent();
        })
    }
}

export function getMove(move) {
    currentMove = move;
    checkWinner()
    setMove();
}

function checkWinner() {
    combinations.forEach(comb => {
        if (getText(comb[0]) === getText(comb[1])) {
            if (getText(comb[1]) === getText(comb[2])) {
                finished = true;
                console.log("You win!");
                document.querySelector("h1").style.display = "block";
            }
        }
    })
}

function getText(obj) { 
    let variable = document.querySelectorAll(".square")[obj].innerText;
    return variable ? variable : obj; 
}

for (let i = 0; i < 9; i++) {
    squares.push(new Square(container));
}

setMove();
