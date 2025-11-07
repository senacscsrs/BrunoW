// Parte Prática – Exercícios
// Todos os exercícios devem ser resolvidos com console.log.


// 1.	Crie uma função chamada bemVindo() que exiba a mensagem: 'Bem-vindo ao mundo das funções!'

function bemVindo() {
    console.log('Bem-vindo ao mundo das funções!');
}
bemVindo()

// 2.	Crie uma função chamada quadrado(numero) que receba um número e exiba o quadrado dele.

function quadrado(numero) {
    console.log(numero * numero);
}
quadrado(5)

// 3.	Crie uma função chamada dobro(numero) que retorne o dobro de um número e exiba o resultado fora da função.

function dobro(numero) {
    console.log(numero*2)
}
dobro(5)

// 4.	Crie uma função chamada media(a, b, c) que receba três números e retorne a média deles.

function media(a, b, c) {
    return (a + b + c) / 3;
}
media(1, 3, 7);

// 5.	Crie uma função chamada maiorNumero(a, b) que mostre qual dos dois números é maior.

function maiorNumero(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
maiorNumero(3, 10)

// 6.	Crie uma função chamada parOuImpar(numero) que exiba “Par” se o número for par, e “Ímpar” caso contrário.

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        console.log
    } else {
        console.log("Ímpar")
    }
}
parOuImpar(10)

// 7.	Crie uma função chamada calcularDesconto(preco, percentual) que retorne o valor final com desconto aplicado.

function calcDesconto(preco, percentual) {
    return preco * (1 - percentual / 100);
}
calcDesconto(10, 15)

// 8.	Crie uma função chamada contagemRegressiva(inicio) que exiba no console uma contagem decrescente até 0.

function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i);
    })
contagemRegressiva(15)

// 9.	Crie uma função chamada tabuada(numero) que mostre no console a tabuada de 1 a 10 do número informado.

function tabuada(numero) {
    for (i=0; i<=10; i++) {
        console.log(numero * i)
    }
}
tabuada(5)
}

// 10.	Crie uma função chamada verificaIdade(idade) que exiba “Menor de idade” ou “Maior de idade”.

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}



