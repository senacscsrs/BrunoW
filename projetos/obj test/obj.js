// Lista de Exercícios – Objetos em JavaScript
// 1. Criando um objeto simples
// Crie um objeto chamado pessoa com as propriedades nome, idade e cidade.
// Depois, exiba todas as informações no console.

const pessoa = {
    nome: `Bruno`,
    idade: 16,
    cidade: `Santa Cruz do Sul`
}

console.log(pessoa.nome, pessoa.idade, pessoa.cidade)

// 2. Atualizando informações
// Usando o objeto pessoa do exercício anterior:
// Altere a cidade para “Santa Cruz do Sul RS”.
// Adicione uma nova propriedade chamada profissao.
// Mostre o resultado final no console.

pessoa.cidade = `Santa Cruz do Sul RS`
pessoa.profissao = `Sim`
console.log(pessoa.nome, pessoa.idade, pessoa.cidade, pessoa.profissao)

// 3. Objeto com função
// Crie um objeto carro com as propriedades marca, modelo, ano e uma função ligar() que mostre no console:
// “O carro [marca] [modelo] foi ligado!”
// Execute o método.

const carro = {
  marca: 'Renault',
  modelo: 'KWID',
  ano: 2026,
  ligar() {
    console.log(`O carro ${this.marca} ${this.modelo} foi ligado!`);
  }
};

carro.ligar(); 

// 4. Usando if dentro de um método
// Crie um objeto usuario com as propriedades nome e idade.
// Adicione um método chamado verificarIdade() que:
// Mostre “Maior de idade” se a idade for 18 ou mais.
// Mostre “Menor de idade” caso contrário.

const obj = {
    nome: "bruno",
    idade: 16,
    verificarIdade() {
        if (this.idade >= 18)
            console.log("Maior de Idade")
        else 
            console.log("Menor de Idade")
    }
}

obj.verificarIdade()

// 5. Objeto com array
// Crie um objeto aluno com:
// nome,
// notas (array com 3 números),
// e um método media() que calcule e retorne a média.
// Mostre a média no console.

let aluno = {
  nome: "Bruno",
  notas: [10, 10, 10],
  media() {
    let soma = 0;
    for (const numero of this.notas) {
      soma += numero;
    }
    return soma / this.notas.length;
  }
};

console.log(aluno.media());

// 6. Laço com array de objetos
// Crie um array chamado produtos com 3 objetos, cada um contendo nome e preco.
// Use um for para mostrar o nome e o preço de cada produto.

let array = [
    produto1 = {
        nome: "Monitor",
        preco: 1500
    },
    produto2 = {
        nome: "Gabinete",
        preco: 900
    },
    produto3 = {
        nome: "Mouse",
        preco: 320
    }
]

for (const produto of array) {
    console.log(produto.nome, produto.preco);
}

// 7. Condicional em objetos
// Com base no array produtos do exercício anterior, mostre apenas os produtos com preço maior que 50.


// 8. Função que recebe um objeto
// Crie uma função chamada mostrarFilme(filme) que recebe um objeto com titulo e ano e mostre:
// “O filme [titulo] foi lançado em [ano].”
// Chame a função passando um objeto criado por você.


// 9. Objeto dentro de objeto
// Crie um objeto empresa com:
// nome,
// endereco (outro objeto com rua, numero, cidade).
// Mostre no console o nome da empresa e o nome da rua.


// 10. Controle de estoque
// Crie um objeto produto com as propriedades:
// nome,
// preco,
// estoque,
// e um método chamado vender() que:
// Diminua o estoque em 1 cada vez que for chamado.
// Mostre no console:
// “Venda realizada! Estoque atual: [estoque].”
// Teste o método várias vezes e veja o estoque diminuindo.
