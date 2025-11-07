let começa = "";
let nao_começa = "";
let turn = 0;
let player1 = "X";
let player2 = "O";
let valuexy11 = "";
let valuexy12 = "";
let valuexy13 = "";
let valuexy21 = "";
let valuexy22 = "";
let valuexy23 = "";
let valuexy31 = "";
let valuexy32 = "";
let valuexy33 = "";
let tabuleiro = [
    [valuexy11, valuexy12, valuexy13],
    [valuexy21, valuexy22, valuexy23],
    [valuexy31, valuexy32, valuexy33]
];

//qm começa aqui
let input = prompt(`Quem começará o jogo? Digite 1 para "X" ou 2 para "O"`);
if (input === "1") {
    começa = "X";
    nao_começa = "O";
    turn++;
} else if (input === "2") {
    começa = "O";
    nao_começa = "X";
    turn++;
} else {
    alert("Entrada inválida. O jogo começará com 'X' por padrão.");
    começa = "X";
    nao_começa = "O";
    turn++;
}

alert(`O jogador '${começa}' começa o jogo.`);

// Utility: disables the option for the non-starter symbol in all empty selects
function disableCell(nao_começa) {
     let cells = document.querySelectorAll('.cell');
     cells.forEach(cell => {
        let options = cell.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === nao_começa && cell.value === "") {
                options[i].disabled = true;
            } else {
                options[i].disabled = false;
            }
        }
    });
}

disableCell(nao_começa);

function updateBoard() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        let row = cell.getAttribute('data-row');
        let col = cell.getAttribute('data-col');
        board[row][col] = cell.value;
        if (row == 0 && col == 0) valuexy11 = cell.value;
        if (row == 0 && col == 1) valuexy12 = cell.value;
        if (row == 0 && col == 2) valuexy13 = cell.value;
        if (row == 1 && col == 0) valuexy21 = cell.value;
        if (row == 1 && col == 1) valuexy22 = cell.value;
        if (row == 1 && col == 2) valuexy23 = cell.value;
        if (row == 2 && col == 0) valuexy31 = cell.value;
        if (row == 2 && col == 1) valuexy32 = cell.value;
        if (row == 2 && col == 2) valuexy33 = cell.value;
    });
}

// Check for a winner
function checkWinner() {
    // Rows, columns, diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2])
            return board[i][0];
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i])
            return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
        return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
        return board[0][2];
    return null;
}

// Check for draw
function isDraw() {
    return [...document.querySelectorAll('.cell')].every(cell => cell.value !== "");
}

// This runs when someone clicks on any select cell
function selectSpot() {
    updateBoard(); // Refresh matrix
    let winner = checkWinner();
    if (winner) {
        alert(`Vitória de '${winner}'!`);
        document.querySelectorAll('.cell').forEach(cell => cell.disabled = true);
        return;
    }
    if (isDraw()) {
        alert("Empate!");
        return;
    }
    let temp = começa;
    começa = nao_começa;
    nao_começa = temp;
    disableCell(nao_começa);
}

// Listen for cell changes
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('change', selectSpot);
});

// Reset game
function reset() {

    document.querySelectorAll('.cell').forEach(cell => {
        cell.disabled = false;
        cell.value = "";
    });
    valuexy11 = "";
    valuexy12 = "";
    valuexy13 = "";
    valuexy21 = "";
    valuexy22 = "";
    valuexy23 = "";
    valuexy31 = "";
    valuexy32 = "";
    valuexy33 = "";
    board = [
        [valuexy11, valuexy12, valuexy13],
        [valuexy21, valuexy22, valuexy23],
        [valuexy31, valuexy32, valuexy33]
    ];
    começa = "";
    nao_começa = "";
    turn = 0;
    let input = prompt(`Quem começará o jogo? Digite 1 para "X" ou 2 para "O"`);
    if (input === "1") {
        começa = "X";
        nao_começa = "O";
        turn++;
    } else if (input === "2") {
        começa = "O";
        nao_começa = "X";
        turn++;
    } else {
        alert("Entrada inválida. O jogo começará com 'X' por padrão.");
        começa = "X";
        nao_começa = "O";
        turn++;
    }
    alert(`O jogador '${começa}' começa o jogo.`);
    disableCell(nao_começa);
}
document.getElementById('resetgame').onclick = reset;
