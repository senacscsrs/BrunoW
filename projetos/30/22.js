// 22. Use um for para somar todos os números de 1 a 100 e mostre o resultado 
// no console. 

// consegui com do/while
let numeroTeste = 0;
let total = 0;
let presente = 0;

do { 
    numeroTeste++;
    presente = (total += numeroTeste);
} while (numeroTeste < 100);

console.log(total);