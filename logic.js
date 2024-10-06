// Flicker the player's turn text
let currentPlayerText = document.getElementById("flicker-text");
let message = document.getElementById("message");
let gameBoard = document.getElementById("gameRow");
let restartButton = document.getElementById("reset"); 



// Add an event listener to the restart button
restartButton.addEventListener('click', resetGame);



const intervalValid = setInterval(() => {
    if (currentPlayerText.style.visibility === "hidden") {
        currentPlayerText.style.visibility = "visible";
    } else {
        currentPlayerText.style.visibility = "hidden";
    }
}, 500);

function winingMessage(winMessage) {
    message.textContent = winMessage;
    setInterval(() => {
        if (message.style.visibility === "hidden") {
            message.style.visibility = "visible";
        } else {
            message.style.visibility = "hidden";
        }
    }, 100);
}

// ------GAME LOGIC------
let boxesLike = document.getElementsByClassName("boxes");
let boxes = Array.from(boxesLike);
let currentPlayer = "x"
let spaces = [null, null, null, null, null, null, null, null, null]

boxes.forEach(div => {
    div.addEventListener('click', play);
});

function play(e) {
    if (currentPlayer === "x") {
        currentPlayerText.textContent = "X's Turn"
        e.target.textContent = "X";
        let boxID = e.target.id;
        spaces[boxID] = "x";


        let whoWon = isPlayerWon();
        if(whoWon === "x") {
            clearInterval(intervalValid);
            currentPlayerText.textContent = "";
            boxes.forEach(div => {
                div.removeEventListener('click', play);
            });
            winingMessage("X has won!");
        }

        // Changing currentPlayer
        currentPlayer = "o";
        currentPlayerText.textContent = "O's Turn";
        e.target.removeEventListener('click', play);
    } else {
        currentPlayerText.textContent = "O's Turn";
        e.target.textContent = "O";
        let boxID = e.target.id;
        spaces[boxID] = "o";

        let whoWon = isPlayerWon();
        if(whoWon === "o") {
            clearInterval(intervalValid);
            currentPlayerText.textContent = "";
            boxes.forEach(div => {
                div.removeEventListener('click', play);
            });
            winingMessage("O has won!");
        }


        // Changing currentPlayer
        currentPlayer = "x";
        currentPlayerText.textContent = "X's Turn";
        e.target.removeEventListener('click', play);
    }
}

function isPlayerWon() {
    // Check horizontal for X
    if (spaces[0] === "x" && spaces[1] === "x" && spaces[2] === "x") {
        return "x";
    } else if (spaces[3] === "x" && spaces[4] === "x" && spaces[5] === "x") {
        return "x";
    } else if (spaces[6] === "x" && spaces[7] === "x" && spaces[8] === "x") {
        return "x";
        // Check vertical for X
    } else if (spaces[0] === "x" && spaces[3] === "x" && spaces[6] === "x") {
        return "x";
    } else if (spaces[1] === "x" && spaces[4] === "x" && spaces[7] === "x") {
        return "x";
    } else if (spaces[2] === "x" && spaces[5] === "x" && spaces[8] === "x") {
        return "x";
        // Check diagonals for X
    } else if (spaces[0] === "x" && spaces[4] === "x" && spaces[8] === "x") {
        return "x";
    } else if (spaces[2] === "x" && spaces[4] === "x" && spaces[6] === "x") {
        return "x";
    }
    // Check horizontal for Y
    else if (spaces[0] === "o" && spaces[1] === "o" && spaces[2] === "o") {
        return "o";
    } else if (spaces[3] === "o" && spaces[4] === "o" && spaces[5] === "o") {
        return "o";
    } else if (spaces[6] === "o" && spaces[7] === "o" && spaces[8] === "o") {
        return "o";
        // Check vertical for Y
    } else if (spaces[0] === "o" && spaces[3] === "o" && spaces[6] === "o") {
        return "o";
    } else if (spaces[1] === "o" && spaces[4] === "o" && spaces[7] === "o") {
        return "o";
    } else if (spaces[2] === "o" && spaces[5] === "o" && spaces[8] === "o") {
        return "o";
    }
    //Check diagonals of Y
    else if (spaces[0] === "o" && spaces[4] === "o" && spaces[8] === "o") {
        return "o";
    }
    else if (spaces[2] === "o" && spaces[4] === "o" && spaces[6] === "o") {
        return "o";
    }else {
        return "not yet"
    }
}


function resetGame() {
    spaces.fill(null); 
    currentPlayer = "x";

    boxes.forEach(div => {
        div.textContent = ""; 
        div.addEventListener('click', play); 
    });

    currentPlayerText.textContent = "X's Turn"; 
    message.textContent = ""; 

    const intervalValid = setInterval(() => {
        if (currentPlayerText.style.visibility === "hidden") {
            currentPlayerText.style.visibility = "visible";
        } else {
            currentPlayerText.style.visibility = "hidden";
        }
    }, 500);
}


