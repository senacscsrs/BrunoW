// 25. Use while para mostrar todos os números ímpares entre 1 e 20. 

let numeros = 0;

while (numeros <= 20) {
    if (numeros % 2 !== 0) {
        console.log(numeros);
        numeros++;
    }  else {
        numeros++;
    }
}