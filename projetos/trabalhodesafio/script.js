const valorCompra = parseFloat(prompt("Digite o valor da compra:"));
const tipoCliente = prompt("Digite o tipo de cliente (comum, premium, vip):").toLowerCase();
const distanciaEntrega = parseFloat(prompt("Digite a distância de entrega em km:"));

let desconto = 0;
let taxaEntrega = 10;
let acrescimo = Math.floor(distanciaEntrega / 10) * 2;
let taxaFinal = taxaEntrega + acrescimo;



switch (tipoCliente) {
    case "comum":
        desconto = 0;
        break;
    case "premium":
        desconto = taxaFinal / 2;
        break;
    case "vip":
        desconto = taxaFinal / 2;
        break;
    default:
        alert("Tipo de cliente inválido. Considerando como 'comum'.");
        desconto = 0;
}

let valorFinal = valorCompra + taxaFinal - desconto;

function calcular() {
    if (valorCompra > 100 && tipoCliente === "vip") {
        alert("Voce tem frete grátis!" + " Sua compra ficou: " + valorCompra);
    }
    else {
        alert("Sua compra ficou: " + valorCompra + " + a taxa de entrega: " + taxaFinal + " - desconto: " + desconto + " Seu valor Valor final ficou de: " + valorFinal);
    }
}

