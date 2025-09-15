let sequence = [];
let playerIndex = 0;
let score = 0;
let hscore = 0;
let allowInput = false;

function startGame() {
    sequence = [];
    playerIndex = 0;
    score = 0;
    allowInput = false;
    nextRound();
}

function nextRound() {
    const nextColor = Math.floor(Math.random() * 4) + 1;
    sequence.push(nextColor);
    playerIndex = 0;
    allowInput = false;
    playSequence();
}

function playSequence() {
    let delay = 0;
    for (let i = 0; i < sequence.length; i++) {
        setTimeout(() => flashColor(sequence[i]), delay);
        delay += 700; // 0.5s flash + 0.2s pause
    }
    setTimeout(() => { allowInput = true; }, delay); 
}

function flashColor(colorNum) {
    let btn;
    let original;

    switch(colorNum) {
        case 1:
            btn = document.getElementById("red");
            original = "red";
            btn.style.backgroundColor = "#fd6363ff";
            break;
        case 2:
            btn = document.getElementById("blue");
            original = "blue";
            btn.style.backgroundColor = "#63b8fdff";
            break;
        case 3:
            btn = document.getElementById("green");
            original = "green";
            btn.style.backgroundColor = "#63fd63ff";
            break;
        case 4:
            btn = document.getElementById("yellow");
            original = "yellow";
            btn.style.backgroundColor = "#fdfd63ff";
            break;
    }

    setTimeout(() => {
        btn.style.backgroundColor = original;
    }, 500);
}

function buttonClicked(clickedNumber) {
    if (!allowInput) return; 

    flashColor(clickedNumber); 

    if (clickedNumber === sequence[playerIndex]) {
        playerIndex++;
        if (playerIndex === sequence.length) {
            score++;
            console.log("Correto! Pontos:", score);
            setTimeout(nextRound, 500);
        }
    } else {
        if (score > hscore) hscore = score; 
        alert("Recorde foi: " + hscore);
        document.getElementById("hs").innerText = "Recorde: " + hscore;
        console.log("recorde", hscore);
        sequence = [];
        score = 0; 
    }
}
