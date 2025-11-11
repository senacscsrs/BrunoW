// MASTER CHEATSHEET NODE.JS
// Tudo em um arquivo .js
// Comentários em português, seções separadas, exemplos práticos e //output
// Foco em essenciais para automação e backend

// =======================
// AMBIENTES E VERSÕES
// =======================
// Node roda em versões LTS. Saiba checar versão:
// node -v
// npm -v

// =======================
// MÓDULOS: CommonJS vs ES Modules
// =======================

// CommonJS (tradicional, usar em muitos projetos)
const fs = require('fs')
const path = require('path')

// ES Modules (import/export) require "type":"module" no package.json
// import fs from 'fs'
// import path from 'path'

// =======================
// PACKAGE.JSON E NPM
// =======================
// Inicializar projeto:
// npm init -y
// Instalar pacote:
// npm install express
// Instalar dev dependency:
// npm install -D nodemon
// Scripts em package.json:
// "scripts": { "start": "node index.js", "dev": "nodemon index.js" }

// =======================
// PROCESSO E VARIÁVEIS DE AMBIENTE
// =======================
// Acessar env
console.log(process.env.NODE_ENV) // undefined se nao definido
//export NODE_ENV=production (linux/mac) ou set NODE_ENV=production (windows)
// Usar dotenv em desenvolvimento
// npm install dotenv
// require('dotenv').config()
// process.env.MY_VAR

// =======================
// FILE SYSTEM (fs) - ler, escrever, streams
// =======================

const arquivo = path.join(__dirname, 'tmp_exemplo.txt')

// escrever arquivo sincrono (bloqueante) - evitar em servidores
fs.writeFileSync(arquivo, 'linha1\nlinha2\n', 'utf8')
console.log('arquivo escrito')
//output
// arquivo escrito

// ler arquivo assíncrono com callback
fs.readFile(arquivo, 'utf8', (err, data) => {
    if (err) return console.error(err)
    console.log('conteudo:', data.trim())
})
//output (assíncrono, exemplo)
// conteudo: linha1
// linha2

// Promises com fs.promises
(async () => {
    const txt = await fs.promises.readFile(arquivo, 'utf8')
    console.log('fs.promises:', txt.split('\n'))
})()

// Streams (para arquivos grandes)
const readStream = fs.createReadStream(arquivo, { encoding: 'utf8' })
readStream.on('data', chunk => {
    console.log('chunk recebido:', chunk.length)
})
readStream.on('end', () => console.log('stream fim'))
//output exemplo
// chunk recebido: 12
// stream fim

// =======================
// PATH E OS
// =======================
console.log('dir atual:', __dirname)
console.log('arquivo atual:', __filename)
console.log('separador path:', path.sep)

// info do sistema
console.log('cpus:', require('os').cpus().length)
//output exemplo
// dir atual: /caminho/projeto
// arquivo atual: /caminho/projeto/index.js
// cpus: 8

// =======================
// BUFFERS E BINARY
// =======================
const buf = Buffer.from('hello')
console.log(buf, buf.toString())
//output
// <Buffer 68 65 6c 6c 6f> hello

// =======================
// HTTP NATIVO (criar servidor simples)
// =======================
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/ok') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ status: 'ok' }))
    } else {
        res.writeHead(404)
        res.end('not found')
    }
})
server.listen(3000, () => console.log('Servidor HTTP rodando na porta 3000'))
//output
// Servidor HTTP rodando na porta 3000

// =======================
// EXPRESS (framework minimalista e essencial)
// =======================
// npm install express
const express = require('express')
const app = express()
app.use(express.json()) // parse JSON body

app.get('/ping', (req, res) => res.json({ pong: true }))
app.post('/echo', (req, res) => res.json({ body: req.body }))

const serverExpress = app.listen(3001, () => console.log('Express rodando 3001'))
//output
// Express rodando 3001

// =======================
// REQUISIÇÕES HTTP (cliente)
// =======================
// Native fetch em Node 18+, ou usar node-fetch / axios
// Exemplo com fetch global (Node 18+)
async function exemploFetch() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await res.json()
        console.log('fetch title:', json.title)
    } catch (e) {
        console.error('erro fetch', e.message)
    }
}
exemploFetch()
//output (simulado)
// fetch title: delectus aut autem

// =======================
// PROMISES E ASYNC/AWAIT
// =======================
function espera(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function exemploAsync() {
    await espera(50)
    return 'feito'
}
exemploAsync().then(console.log)
//output
// feito

// =======================
// TRABALHANDO COM JSON
// =======================
const obj = { a: 1 }
const json = JSON.stringify(obj)
const parsed = JSON.parse(json)
console.log(parsed.a)
//output
// 1

// =======================
// EVENT EMITTER (eventos internos)
// =======================
const EventEmitter = require('events')
class MeuEmitter extends EventEmitter {}
const em = new MeuEmitter()
em.on('msg', payload => console.log('recebeu msg', payload))
em.emit('msg', { text: 'oi' })
//output
// recebeu msg { text: 'oi' }

// =======================
// CHILD PROCESS (exec, spawn) - automatizar comandos shell
// =======================
const { exec, spawn } = require('child_process')

// exec (retorna buffer com stdout)
exec('echo ola_node', (err, stdout, stderr) => {
    if (err) return console.error('erro exec', err)
    console.log('exec stdout:', stdout.trim())
})
//output
// exec stdout: ola_node

// spawn (streaming, melhor para outputs grandes)
const proc = spawn('node', ['-v'])
proc.stdout.on('data', data => console.log('spawn stdout:', data.toString().trim()))
//output
// spawn stdout: v18.17.0

// Cuidado: valida inputs antes de passar para shell para evitar injection

// =======================
// FS WATCH (monitorar arquivos para automação)
// =======================
fs.watch(arquivo, (eventType, filename) => {
    console.log('fs.watch', eventType, filename)
})
// Usa com cuidado em produção

// =======================
// STREAM PIPELINE (ler -> transformar -> gravar)
// =======================
const { pipeline } = require('stream')
const zlib = require('zlib')
const gzip = zlib.createGzip()
const input = fs.createReadStream(arquivo)
const output = fs.createWriteStream(arquivo + '.gz')

pipeline(input, gzip, output, err => {
    if (err) console.error('pipeline erro', err)
    else console.log('arquivo compactado')
})
//output
// arquivo compactado

// =======================
// WORKERS & CONCURRENCY (noções)
// =======================
// Node é single-threaded por event loop. Para CPU-bound usar worker_threads
// Exemplo: const { Worker } = require('worker_threads')

// =======================
// EVENT LOOP (entender pra debug de performance)
// =======================
// microtasks (Promises) vs macrotasks (setTimeout)
// Evite bloqueios longos no event loop (no CPU)

// =======================
// EXPRESS MIDDLEWARES (exemplos úteis)
app.use((req, res, next) => {
    // middleware simples de log
    console.log(req.method, req.url)
    next()
})

// upload de arquivos: usar multer
// npm install multer
// const multer = require('multer')

// =======================
// WORKFLOWS E WEBHOOKS (integração com Make/n8n/serviços)
// =======================
// Expor endpoint POST para receber webhooks
app.post('/webhook', (req, res) => {
    console.log('webhook recebido', req.body)
    res.status(200).send('ok')
})
// Em Make/n8n -> HTTP Request configurado para /webhook

// =======================
// DATABASES (configuração básica)
// =======================
// MySQL, Postgres, Mongo são comuns.
// Exemplo rápido com mysql2/promise:
// npm install mysql2
// const mysql = require('mysql2/promise')
// const conn = await mysql.createConnection({ host, user, password, database })
// const [rows] = await conn.execute('SELECT 1')

// =======================
// CONFIGURAÇÃO E BOAS PRÁTICAS
// =======================
// - Usar variáveis de ambiente para credenciais
// - Não commitar node_modules
// - Usar .env em dev (dotenv)
// - Scripts npm para dev/prod
// - Usar linter (ESLint) e prettier
// - Testes unitários (jest/mocha) para lógica crítica
// - Gerenciamento de processos: pm2, systemd, Docker

// =======================
// DEPLOY BÁSICO
// =======================
// - Empacotar com Docker
// - Usar CI/CD (GitHub Actions, GitLab CI)
// - Monitorar logs e health checks

// =======================
// DEBUG E LOG
// =======================
// Utilizar console em protótipos, mas preferir libs de log em produção:
// npm install pino ou winston
console.log('teste log')
//output
// teste log

// Usar inspector:
// node --inspect index.js
// Depois conectar no Chrome DevTools

// =======================
// UTILITÁRIOS PARA AUTOMAÇÃO
// =======================
// - node-fetch / axios para requisições HTTP (axios tem mais features)
// - csv-parse / fast-csv para CSV
// - json2csv para conversão
// - puppeteer/playwright para automação de navegador
// - simple-git para automações git via Node
// - cron / node-cron para agendamentos

// Exemplo rápido com axios:
// npm install axios
// const axios = require('axios')
// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(r => console.log(r.data.id))

// =======================
// MANIPULAÇÃO DE JSON E ARQUIVOS (exemplo completo)
// =======================
async function lerJsonSalvarCsv() {
    // ler um JSON do disco, transformar e salvar CSV simples
    const data = JSON.parse(await fs.promises.readFile(arquivo, 'utf8'))
    // aqui data seria um objeto ou array
    // transformar e gravar exemplo.json.out
    await fs.promises.writeFile(arquivo + '.out', JSON.stringify(data))
    console.log('transformacao salva')
}
// lerJsonSalvarCsv() // descomentar se for rodar

// =======================
// ERROR HANDLING (trabalhar com promises e try/catch)
process.on('unhandledRejection', err => {
    console.error('UnhandledRejection', err)
})
process.on('uncaughtException', err => {
    console.error('UncaughtException', err)
    process.exit(1) // reiniciar processo em produção via manager
})

// =======================
// EXEMPLOS ÚTEIS PARA AUTOMAÇÃO
// =======================

// 1) Ler CSV e enviar para API (esqueleto)
const csv = require('csv-parse/lib/sync') // npm install csv-parse
async function enviarCsvParaApi(pathCsv, urlApi) {
    const txt = await fs.promises.readFile(pathCsv, 'utf8')
    const rows = csv(txt, { columns: true })
    for (const row of rows) {
        // await axios.post(urlApi, row)
        console.log('enviando', row)
    }
}
// enviarCsvParaApi('dados.csv', 'https://api.exemplo/recebe')

// 2) Rodar comando shell e pegar saída (útil para scripts)
async function rodaComando(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) return reject(err)
            resolve(stdout.trim())
        })
    })
}
rodaComando('node -v').then(v => console.log('node:', v))

// =======================
// TESTES RÁPIDOS (unit e e2e)
// =======================
// npm install --save-dev jest
// script: "test": "jest"
// escrever testes simples para funções puras

// =======================
// SECURITY CHECKS RÁPIDOS
// =======================
// - Não exponha variáveis sensíveis
// - Validate inputs (sanitize) antes de usar em DB ou shell
// - Use HTTPS e cabeçalhos de segurança
// - Atualize dependências regularmente

// =======================
// RECURSOS ÚTEIS
// =======================
// - docs nodejs.org
// - npmjs.com (buscar pacotes)
// - expressjs.com

// =======================
// ENCERRAMENTO
// =======================
// Observação: esse cheatsheet é um ponto de partida prático.
// Para projetos reais modularize o código, escreva testes e configure CI/CD.
// Pratique criando pequenos scripts de automação: ler CSV -> transformar -> chamar API -> mover arquivos.

