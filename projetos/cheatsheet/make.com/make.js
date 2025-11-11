//======================================//
//          MAKE.COM CHEATSHEET          //
//======================================//
// foco: dominar o uso geral da plataforma
// estrutura, blocos, funções e lógica
//======================================//


//--------------------------------------//
// 🔹 Estrutura Básica
//--------------------------------------//

// Make é baseado em "Cenários" compostos por "Módulos" conectados.
// Cada cenário começa com um "gatilho" e segue com ações.


// Trigger (gatilho) → Action (ação) → Output (resultado)


//--------------------------------------//
// 🔹 Triggers (Gatilhos)
//--------------------------------------//

// São os módulos que iniciam o cenário automaticamente.
// Exemplos de triggers comuns:

// 1. Webhook → dispara quando recebe dados externos.
// 2. Schedule → executa em horários definidos.
// 3. Watch → monitora novos itens em uma API.
// 4. Manual → roda apenas quando clicado “Run once”.

// Exemplo prático:
// Watch New Email → Adiciona linha no Google Sheets


//--------------------------------------//
// 🔹 Actions (Ações)
//--------------------------------------//

// Executam tarefas como enviar, criar ou atualizar dados.
// São a base do fluxo de automação.

// Exemplos:
// Gmail → Enviar email
// Notion → Criar página
// Google Sheets → Adicionar linha
// HTTP → Fazer requisição

// fluxo exemplo:
// Trigger: Novo pedido → Action: Criar registro no Notion → Action: Enviar notificação no Slack


//--------------------------------------//
// 🔹 Routers
//--------------------------------------//

// Dividem o cenário em vários caminhos simultâneos.

// Exemplo:
// Router
//   |-> Envia e-mail
//   |-> Cria linha no Sheets
//   |-> Envia msg no Slack


//--------------------------------------//
// 🔹 Filters
//--------------------------------------//

// Servem como condições lógicas (if) entre módulos.
// Só deixam o fluxo passar se o dado atender ao filtro.

// Exemplo:
// Se “status = aprovado” → envia e-mail
// Se “status = pendente” → ignora


//--------------------------------------//
// 🔹 Iterators
//--------------------------------------//

// Repetem ações para cada item de uma lista.
// Úteis pra loops e manipulação de arrays.

// Exemplo:
// Recebe lista de emails → Iterator → Envia um por um


//--------------------------------------//
// 🔹 Aggregators
//--------------------------------------//

// Faz o oposto do Iterator: junta vários itens em um único pacote.

// Exemplo:
// Junta várias linhas em um único CSV


//--------------------------------------//
// 🔹 Error Handlers
//--------------------------------------//

// Controlam o que acontece se um módulo falhar.
// Impedem o cenário de parar totalmente.

// Exemplo:
// Se falhar o envio de e-mail → Cria log no Notion
// Caso contrário → Continua normalmente


//--------------------------------------//
// 🔹 Variables (Variáveis)
//--------------------------------------//

// Armazenam valores temporários no cenário.

// Set Variable → cria variável
// Get Variable → lê o valor

// Exemplo:
// Set Variable “totalPedidos” = 10
// Depois usa “totalPedidos” em outro módulo


//--------------------------------------//
// 🔹 Mapeamento de Dados
//--------------------------------------//

// Conecta a saída de um módulo à entrada do outro.
// Cada campo colorido representa um dado de entrada ou saída.

// Exemplo:
// Resposta do ChatGPT → Input da mensagem do Slack


//--------------------------------------//
// 🔹 Data Transformers (Transformadores)
//--------------------------------------//

// Funções internas que manipulam texto, números e datas.
// Usadas dentro dos campos de texto ou fórmulas.

// Principais funções:
// toUpper() → tudo maiúsculo
// toLower() → tudo minúsculo
// replace(texto, "a", "b") → troca “a” por “b”
// formatDate(data; "YYYY-MM-DD") → formata datas
// addDays(data; 3) → adiciona 3 dias
// length(string) → conta caracteres

// Exemplo:
// formatDate(now; "DD/MM/YYYY") → 10/11/2025


//--------------------------------------//
// 🔹 Webhooks
//--------------------------------------//

// Recebem dados de sistemas externos.
// Normalmente usados pra iniciar cenários.

// Exemplo:
// Webhook recebe JSON → Cria nova linha no Sheets

// Formato recebido:

// {
//   "nome": "Bruno",
//   "email": "bruno@email.com"
// }

// Depois do Parse JSON, pode usar nome e email nos módulos seguintes


//--------------------------------------//
// 🔹 HTTP Module
//--------------------------------------//

// Permite enviar requisições diretas pra APIs (GET, POST, PUT, DELETE).

// Exemplo GET:
// Busca dados de uma API externa

// URL: https://api.exemplo.com/users
// Method: GET

// Exemplo POST:
// Envia dados JSON

// {
//   "nome": "Bruno",
//   "idade": 16
// }


//--------------------------------------//
// 🔹 JSON Parsing
//--------------------------------------//

// Transforma texto em formato JSON em dados utilizáveis.
// Necessário após receber respostas via HTTP ou Webhook.

// Exemplo:
// Webhook → Parse JSON → usa "user.email" no próximo módulo


//--------------------------------------//
// 🔹 Controle e Repetição
//--------------------------------------//

// Algumas ações de controle úteis:

// Sleep → pausa a execução (em segundos)
// Stop Scenario → encerra manualmente
// Continue → força a execução mesmo após erro


//--------------------------------------//
// 🔹 Conectores Comuns
//--------------------------------------//

// Google Sheets
// Gmail
// Slack / Discord
// Notion
// ChatGPT / OpenAI
// Webhook
// HTTP
// Dropbox / Drive

// São as integrações mais usadas em automações reais.


//--------------------------------------//
// 🔹 Boas Práticas
//--------------------------------------//

// 1. Nomeia cada módulo de forma clara
// 2. Testa o cenário parte por parte
// 3. Usa Error Handlers pra evitar travamentos
// 4. Guarda variáveis importantes
// 5. Usa “Run once” antes de ativar o agendamento
// 6. Evita loops infinitos com cuidado em iterators


//--------------------------------------//
// 🔹 Exemplo de Cenário Completo
//--------------------------------------//

// Gatilho: Webhook recebe pedido
// ↓
// Ação: Parse JSON
// ↓
// Ação: Verifica estoque (HTTP GET)
// ↓
// Roteador:
//     |-> Se tem estoque → Cria pedido no Notion
//     |-> Se não tem → Envia alerta no Slack
// ↓
// Fim do cenário


//--------------------------------------//
// 🔹 Dica Final
//--------------------------------------//

// A lógica é o mais importante.
// Se tu entende como os módulos trocam dados e como condicionar fluxos,
// tu já domina 80% do Make.
