// MASTER CHEATSHEET JAVASCRIPT
// Tudo em um arquivo, comentários em português, seções separadas.
// Comentários explicativos, exemplos práticos e outputs curtos.

// =======================
// VARIÁVEIS
// =======================

// variáveis armazenam valores
// let - valor pode mudar
// const - valor fixo, nao pode reatribuir
// var - antiga, comportamento de escopo diferente (evitar)
let nome = "Bruno"
const idade = 16
var cidade = "Candelária"

console.log(nome)    // Bruno
console.log(idade)   // 16
console.log(cidade)  // Candelária

// scope: block, function, global
if (true) {
    let bloco = "so visivel aqui"
    // bloco existe apenas dentro do bloco
}
// function scope com var
function exemploScope() {
    var local = "visivel na funcao"
    console.log(local)
}
exemploScope()

// hoisting: declarações com var e funções são "içadas" antes da execução
hoistedFunction()
function hoistedFunction() {
    console.log("funcao hoisted")
}
// variaveis com var sao hoisted mas inicializadas com undefined
console.log(typeof hoistedVar) // undefined
var hoistedVar = 5

// =======================
// TIPOS DE DADO
// =======================

// String, Number, Boolean, Null, Undefined, Object, Symbol, BigInt
let str = "texto"
let num = 42
let bool = true
let vazio = null
let indefinido
let obj = { nome: "B" }
let sym = Symbol("id")
let big = 123456789012345678901234567890n

console.log(typeof str) // string
console.log(typeof num) // number
console.log(typeof bool) // boolean
console.log(typeof vazio) // object  (peculiaridade)
console.log(typeof indefinido) // undefined
console.log(typeof obj) // object
console.log(typeof sym) // symbol
console.log(typeof big) // bigint

// type checking com instanceof (para objetos criados por construtor)
const arr = [1,2,3]
console.log(arr instanceof Array) // true

// conversao de tipo
console.log(Number("123"))    // 123
console.log(String(123))      // "123"
console.log(Boolean(0))       // false

// =======================
// OPERADORES
// =======================

// Aritméticos: + - * / % **
console.log(2 + 3)   // 5
console.log(2 ** 3)  // 8

// Atribuição: = += -= *= /=
let a = 5
a += 2  // a = 7

// Comparação: == === != !== > < >= <=
console.log(2 == "2")  // true (valor)
console.log(2 === "2") // false (tipo+valor)

// Lógicos: && || !
console.log(true && false) // false
console.log(!false) // true

// Ternário
let pode = idade >= 18 ? "sim" : "nao"
console.log(pode)

// Nullish coalescing
let x = null
let y = x ?? "valor padrao"
console.log(y) // valor padrao

// Optional chaining
let usuario = { perfil: { nome: "B" } }
console.log(usuario?.perfil?.nome) // B
console.log(usuario?.endereco?.rua) // undefined

// =======================
// CONTROL FLOW
// =======================

// if / else if / else
let nota = 7
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 6) {
    console.log("Bom")
} else {
    console.log("Precisa melhorar")
}

// switch
let dia = 3
switch (dia) {
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terca")
        break
    default:
        console.log("Outro dia")
}

// break / continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue // pula o resto do loop
    if (i === 4) break    // sai do loop
    console.log(i)
}
// output: 0 1 3

// =======================
// LOOPS
// =======================

// for
for (let i = 0; i < 3; i++) {
    console.log(i)
}

// while
let v = 0
while (v < 3) {
    console.log(v)
    v++
}

// do while
let z = 0
do {
    console.log(z)
    z++
} while (z < 2)

// for...of (iterar valores de arrays)
for (const valor of [10,20,30]) {
    console.log(valor)
}

// for...in (iterar chaves de objetos)
const pessoa = { nome: "B", idade: 16 }
for (const chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// =======================
// FUNÇÕES
// =======================

// function declaration
function soma(a, b) {
    return a + b
}
console.log(soma(2,3)) // 5

// function expression
const mult = function(a, b) {
    return a * b
}
console.log(mult(2,3)) // 6

// arrow function
const sub = (a, b) => a - b
console.log(sub(5,2)) // 3

// parametros padrao
function cumprimenta(nome = "amigo") {
    console.log(`Ola ${nome}`)
}
cumprimenta() // Ola amigo

// rest parameters
function total(...nums) {
    return nums.reduce((s, n) => s + n, 0)
}
console.log(total(1,2,3)) // 6

// callbacks
function executarCallback(cb) {
    cb("rodando")
}
executarCallback(msg => console.log(msg)) // rodando

// closures
function contador() {
    let count = 0
    return function() {
        count++
        return count
    }
}
const c = contador()
console.log(c()) // 1
console.log(c()) // 2

// higher-order functions: recebem ou retornam funções
function fazOperacao(fn, a, b) {
    return fn(a, b)
}
console.log(fazOperacao((x,y) => x*y, 3, 4)) // 12

// =======================
// ARRAYS
// =======================

// criar
let arr1 = [1,2,3]
let arr2 = new Array(3).fill(0) // [0,0,0]

// acessar por indice
console.log(arr1[0]) // 1
console.log(arr1.length) // 3

// push / pop
arr1.push(4) // adiciona no final
console.log(arr1.pop()) // remove e retorna 4

// shift / unshift
arr1.unshift(0) // adiciona no inicio
console.log(arr1.shift()) // remove inicio

// splice (mutável) e slice (não muta)
let a1 = [1,2,3,4]
a1.splice(1,2) // remove 2 itens a partir do indice 1 => a1 = [1,4]
let a2 = [1,2,3,4]
let parte = a2.slice(1,3) // [2,3]

// concat
let combinado = [1,2].concat([3,4]) // [1,2,3,4]
let combinado2 = [...[1,2], ...[3,4]] // spread

// join / split
let s = [1,2,3].join(",") // "1,2,3"
let fromString = "a,b,c".split(",") // ['a','b','c']

// map / filter / reduce / forEach
let numeros = [1,2,3]
console.log(numeros.map(x => x * 2)) // [2,4,6]
console.log(numeros.filter(x => x > 1)) // [2,3]
console.log(numeros.reduce((s,n) => s + n, 0)) // 6
numeros.forEach(x => console.log(x))

// find / findIndex / some / every
console.log(numeros.find(x => x === 2)) // 2
console.log(numeros.findIndex(x => x === 2)) // 1
console.log(numeros.some(x => x > 2)) // true
console.log(numeros.every(x => x > 0)) // true

// includes / indexOf / lastIndexOf
console.log(numeros.includes(2)) // true
console.log([1,2,2].lastIndexOf(2)) // 2

// sort / reverse
let txts = ["b","a","c"]
txts.sort() // altera o array
txts.reverse()

// flat / flatMap
let nested = [1, [2,3], [4, [5]]]
console.log(nested.flat()) // [1,2,3,4,[5]]
console.log([1,2].flatMap(x => [x, x*2])) // [1,2,2,4]

// spread e destructuring
let orig = [1,2,3]
let copia = [...orig] // copia
let [primeiro, segundo, ...resto] = orig

// copiar arrays
let copiaSlice = orig.slice()

// =======================
// OBJETOS
// =======================

// criar
let obj1 = { nome: "Bruno", idade: 16 }

// acessar
console.log(obj1.nome)
console.log(obj1["idade"])

// adicionar / atualizar / deletar
obj1.sobrenome = "Silva"
obj1.idade = 17
delete obj1.sobrenome

// Object.keys / values / entries
console.log(Object.keys(obj1))   // ['nome','idade']
console.log(Object.values(obj1)) // ['Bruno',17]
console.log(Object.entries(obj1)) // [['nome','Bruno'], ['idade',17]]

// spread e Object.assign
let objA = { a: 1 }
let objB = { b: 2 }
let combinadoObj = { ...objA, ...objB } // {a:1,b:2}
let alvo = {}
Object.assign(alvo, objA, objB)

// destructuring
const { nome: n, idade: i } = obj1

// metodos em objetos
let pessoa2 = {
    nome: "A",
    falar() {
        console.log("oi " + this.nome)
    }
}
pessoa2.falar()

// this keyword
const contexto = {
    nome: "X",
    getNome() {
        return this.nome
    }
}
console.log(contexto.getNome()) // X

// prototype e heranca (basico)
function Pessoa(nome) {
    this.nome = nome
}
Pessoa.prototype.falar = function() {
    console.log("Oi " + this.nome)
}
const p = new Pessoa("Proto")
p.falar()

// =======================
// STRINGS
// =======================

let texto = "  Ola Mundo  "

// template literals
let saud = `Ola ${nome}`

// slice / substring / substr
console.log(texto.slice(2,5))
console.log(texto.substring(2,5))

// replace / replaceAll
console.log("foo bar foo".replace("foo","baz"))
console.log("foo foo".replaceAll("foo","x"))

// split / join
console.log("a,b,c".split(",")) // ['a','b','c']
console.log(["a","b"].join("-")) // "a-b"

// trim / toLowerCase / toUpperCase
console.log(texto.trim())
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())

// includes / startsWith / endsWith
console.log("hello".includes("ell")) // true
console.log("hello".startsWith("he")) // true

// charAt / indexOf / lastIndexOf
console.log("abc".charAt(1)) // b
console.log("abcabc".indexOf("b")) // 1

// padStart / padEnd / repeat
console.log("5".padStart(3,"0")) // "005"
console.log("x".repeat(3)) // "xxx"

// =======================
// NUMBERS
// =======================

console.log(Math.floor(4.7)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.round(4.5)) // 5
console.log(Math.random())   // 0..1
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))

console.log(parseInt("10")) // 10
console.log(parseFloat("3.14")) // 3.14

console.log((2/3).toFixed(2)) // "0.67"
console.log((123.456).toPrecision(4)) // "123.5"

// =======================
// DATE & TIME
// =======================

const agora = new Date()
console.log(agora.getDate()) // dia do mes
console.log(agora.getMonth()) // mes (0-11)
console.log(agora.getFullYear())
console.log(agora.getHours(), agora.getMinutes(), agora.getSeconds())
console.log(agora.toLocaleString())
console.log(agora.toISOString())

// =======================
// JSON
// =======================

const objJson = { a: 1 }
const strJson = JSON.stringify(objJson) // '{"a":1}'
console.log(JSON.parse(strJson).a) // 1

// =======================
// TRATAMENTO DE ERROS
// =======================

try {
    throw new Error("erro custom")
} catch (err) {
    console.error("pegou erro:", err.message)
} finally {
    console.log("sempre executa")
}

// =======================
// JAVASCRIPT ASSINCRONO
// =======================

// setTimeout / setInterval
setTimeout(() => console.log("delay 1s"), 1000)
const id = setInterval(() => console.log("interval 1s"), 1000)
clearInterval(id) // parar

// Promises
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("feito"), 100)
})
promessa.then(res => console.log(res)).catch(err => console.error(err)).finally(() => {})

// async / await
async function buscar() {
    try {
        const res = await promessa
        console.log("await:", res)
    } catch (e) {
        console.error(e)
    }
}
buscar()

// fetch (exemplo basico, funciona no navegador ou com node + fetch)
async function buscaApi(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error("erro fetch", err)
    }
}
// exemplo: buscaApi('https://jsonplaceholder.typicode.com/todos/1')

// =======================
// DOM MANIPULATION (NAVEGADOR)
// =======================

// selecionar
// document.querySelector('.classe')
// document.querySelectorAll('div')
// document.getElementById('id')
// document.getElementsByClassName('classe')

// editar texto / html
// const el = document.querySelector('h1')
// el.textContent = 'Novo texto'
// el.innerHTML = '<span>html</span>'

// editar estilo
// el.style.color = 'red'
// el.classList.add('ativo')

// criar / remover elementos
// const novo = document.createElement('div')
// novo.textContent = 'oi'
// document.body.append(novo)
// novo.remove()

// eventos
// el.addEventListener('click', e => console.log(e.target))
// el.removeEventListener('click', handler)

// propagacao: bubbling e capturing
// e.stopPropagation() para parar bolha

// =======================
// MÓDULOS
// =======================

// export / import (ES modules)
// export function fn() {}
// import { fn } from './arquivo.js'
// default vs named exports
// export default function() {}
// import nome from './arquivo.js'

// organização: separar responsabilidades em arquivos e importar

// =======================
// CONCEITOS AVANCADOS
// =======================

// hoisting: var e function sao içadas
// scope chain: busca de variaveis caminha pelos scopes
// this binding: depende de como a funcao foi chamada
const exemploThis = {
    nome: "X",
    falar: function() { console.log(this.nome) }
}
exemploThis.falar() // X

// call, apply, bind
function saudacao(sufixo) {
    console.log(this.nome + sufixo)
}
const ctx = { nome: "Ctx" }
saudacao.call(ctx, "!")   // Ctx!
saudacao.apply(ctx, ["?"])// Ctx?
const bindado = saudacao.bind(ctx, "!!")
bindado() // Ctx!!

// closures: revisar para encapsular estado e criar funções privadas

// prototype chain: heranca via prototipo
// classes: sintaxe moderna para construtores
class Animal {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(this.nome + " faz som")
    }
}
class Cachorro extends Animal {
    falar() {
        console.log(this.nome + " late")
    }
}
const dog = new Cachorro("Rex")
dog.falar()

// destructuring aninhado
const dados = { user: { id: 1, profile: { idade: 16 } } }
const { user: { profile: { idade: idadeUser } } } = dados
console.log(idadeUser) // 16

// pure vs impure functions
// pure: mesma entrada = mesma saida, sem efeitos colaterais
// impure: depende de ou altera estado externo

// =======================
// UTILITÁRIOS
// =======================

// localStorage / sessionStorage (navegador)
// localStorage.setItem('chave', 'valor')
// localStorage.getItem('chave')

// debugging
console.log("log")
console.table([{a:1},{a:2}])
console.error("erro")

// regex basico
const re = /ab+c/
console.log(re.test("abbb")) // true
console.log("abc123".match(/\d+/)) // ['123']

// =======================
// FIM DO CHEATSHEET
// =======================

// Observacao: esse arquivo é um manual compacto.
// Em projetos reais modularize o codigo e evite poluir o escopo global.
// Pratique reescrevendo e recriando pequenos projetos com essas tecnicas.
