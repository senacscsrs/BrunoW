// Crie uma variável chamada frase com o texto "O JavaScript é divertido" e mostre no console a quantidade de caracteres dessa frase, em seguida exiba apenas a palavra "divertido" utilizando o método slice.

let frase = "O JavaScript é divertido";

console.log(frase.length); 
console.log(frase.slice(15)); 

// Declare uma variável nome contendo o seu próprio nome e mostre esse valor no console primeiro em letras maiúsculas com toUpperCase() e depois em letras minúsculas com toLowerCase().

let nome = "Bruno Henrique";

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// Crie uma variável animal com o valor "O gato dorme muito" e substitua a palavra "gato" por "cachorro", exibindo o resultado final no console.

let animal = "O gato dorme muito";

console.log(replace("gato","cachorro"));

// Escreva um código que verifique se a palavra "JavaScript" está contida na frase "Estou aprendendo JavaScript" e, caso esteja, mostre no console "Achei a palavra!", caso contrário mostre "Não achei".

if ("Estou aprendendo JavaScript".includes("JavaScript")) {
    console.log("Achei a palavra!");
} else {
    console.log("Não achei");
}

// Crie um programa que peça o nome de uma fruta armazenado em uma variável e utilize a estrutura switch para exibir mensagens diferentes para "maçã", "banana" e "uva", e para qualquer outra fruta mostre a mensagem "Fruta não cadastrada".

let frutas = [maça, banana, uva];

switch (frutas) { 
    case "maça":
        console.log("Fruta cadastrada: maça");
        break;
    case "banana":
        console.log("Fruta cadastrada: banana");
        break;
    case "uva":
        console.log("Fruta cadastrada: uva");
        break;
    default:
        console.log("Fruta não cadastrada");
        break;
}

// Utilize um laço for para percorrer a string "Aprender" e exibir cada letra separadamente no console.

for (let i = 0; i < "Aprender".length; i++) {
    console.log("Aprender"[i]);
}

// Crie uma variável senhaCorreta com o valor "1234" e utilize um laço do...while que simule a digitação de senhas até acertar a senha correta, exibindo "Senha correta!" quando a senha informada for igual.

let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let senhaCorreta = "1234";
let senhaInformada;

while (senhaInformada !== senhaCorreta) {
    senhaInformada = Math.floor(Math.random(alfabeto) * 26) + 1).toString() * 4;
}

console.log("Senha correta!");


// Crie uma variável saldo com o valor 5 representando passagens de transporte e, enquanto o saldo for maior que zero, exiba no console "Usei 1 passagem. Restam X passagens", mostrando ao final "Saldo esgotado!".

let saldo = 5;

while (saldo > 0) {
    saldo--;
    console.log(`Usei 1 passagem. Restam ${saldo} passagens`);
}

// Escreva um programa que armazene um número em uma variável e verifique se esse número é par ou ímpar, exibindo a mensagem "Número par" ou "Número ímpar" conforme o caso.

let num = 7;

if (num % 2) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

// Crie uma variável texto com o valor "O rato roeu a roupa do rei de Roma" e utilize o método split(" ") para transformá-la em um array de palavras, em seguida percorra esse array com um laço for exibindo cada palavra em uma linha diferente no console.



// Crie um vetor com os nomes de cinco colegas da turma e exiba cada nome no console utilizando um laço for.

// Crie um vetor com cinco números inteiros e calcule a soma de todos eles, mostrando o resultado final no console.

// Crie um vetor com alguns itens de supermercado (por exemplo: "arroz", "feijão", "leite") e utilize o método push() para adicionar dois novos itens, exibindo o vetor atualizado no console.

// Crie um vetor com os dias da semana e mostre no console apenas o dia correspondente à posição atual retornada pelo método getDay() do objeto Date.

// Crie um vetor com cinco notas de alunos e utilize um laço para calcular a média. Ao final, exiba no console a média calculada.