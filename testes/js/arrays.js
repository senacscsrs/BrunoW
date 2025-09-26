// 1. Declare uma variável chamada cores e atribua a ela um array com três cores. 
// Imprima o array usando console.log().

let cores = [vermelho, azul, roxo];
console.log(cores);

// 2. Imprima a segunda cor do array usando seu índice.

console.log(cores[1]);

// 3. Altere a última cor do array para "amarelo" e imprima o array atualizado.

cores[2] = "amarelo";
console.log(cores);

// 4. Adicione uma nova cor "roxo" ao final do array usando push(). Imprima o array.

cores.push("roxo");
console.log(cores);

// 5. Remova a primeira cor do array usando shift() e imprima o array restante.

shift.cores([0]);
console.log(cores);

// 6. Crie um loop for para imprimir todas as cores do array, uma por linha.

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

// 7. Crie um novo array numeros com os valores 10, 20, 30, 40, 50. 
// Use um loop for para calcular e imprimir a soma de todos os números do array.

let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
