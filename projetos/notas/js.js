let nota1 = parseInt(prompt('qual a sua nota 1'));
let nota2 = parseInt(prompt('qual a sua nota 2'));
let nota3 = parseInt(prompt('qual a sua nota 3'));
let resultado = document.getElementById('r');
let rM = document.getElementById('rM');
let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
let mencao = null;
let textoMedia = document.getElementById('media');


function cmc() {
if (media >= 8) {
    resultado.textContent = `Você passou`
    mencao = "PD"
} else if (media >= 7) {
    resultado.textContent = `Você passou`
    mencao = "D"
} else if (media >= 5) {
    resultado.textContent = `Você está passando`
    mencao = "ED"
} else {
    resultado.textContent = `Você reprovou`
    mencao = "ND"
}

switch (mencao) {
    case "PD": rM.textContent = `PD`
        break;
    case "D": rM.textContent = `D`
        break;
    case "ED": rM.textContent = `ED`
        break;
    case "ND": rM.textContent = `ND`
        break;
}

    textoMedia.textContent = `${media}`
}