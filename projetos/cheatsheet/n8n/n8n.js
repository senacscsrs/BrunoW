//======================================//
//             N8N CHEATSHEET           //
//======================================//
// foco: dominar o uso geral da plataforma
// estrutura, nós, funções e lógica
//======================================//


//--------------------------------------//
// 🔹 Estrutura Básica
//--------------------------------------//

// N8N é baseado em "Workflows" compostos por "Nó(s)" conectados.
// Cada workflow tem um nó inicial (trigger) e segue com nós de ação.

// Trigger → Nó de Ação → Output


//--------------------------------------//
// 🔹 Triggers (Gatilhos)
//--------------------------------------//

// Iniciam o workflow automaticamente.

// Exemplos comuns:
// Webhook → dispara quando recebe dados externos
// Cron → executa em horários programados
// Schedule → executa em intervalos definidos
// Manual → roda apenas quando clicado "Execute Workflow"

// Exemplo prático:
// Webhook recebe pedido → Nó cria registro no Google Sheets


//--------------------------------------//
// 🔹 Nodes (Nós)
//--------------------------------------//

// Cada nó executa uma ação ou transforma dados.
// Tipos de nós principais:

// 1. Integrations → Conecta serviços (Gmail, Sheets, Slack, Notion)
// 2. Core → Funções internas do n8n (Set, Function, Merge, SplitInBatches)
// 3. Transform → Processa dados (IF, Code, MoveBinaryData, HTTP Request)


//--------------------------------------//
// 🔹 Set Node
//--------------------------------------//

// Cria ou define variáveis dentro do workflow.

// Exemplo:
// Set Node → cria "nome" = "Bruno" e "idade" = 16


//--------------------------------------//
// 🔹 Function Node
//--------------------------------------//

// Permite escrever código JavaScript para processar dados.
// Útil pra transformar, filtrar ou gerar valores dinamicamente.

// Exemplo:
// function run(item) {
//     item.json.fullName = item.json.firstName + " " + item.json.lastName;
//     return item;
// }


 //--------------------------------------//
// 🔹 IF Node (Condicional)
//--------------------------------------//

// Controla fluxo com condições (if / else)

// Exemplo:
// IF status = "aprovado" → envia e-mail
// ELSE → arquiva registro


//--------------------------------------//
// 🔹 Merge Node
//--------------------------------------//

// Combina dados de dois ou mais nós.
// Tipos: Merge By Index, Merge By Key, Wait

// Exemplo:
// Recebe dados de Sheets + API → Merge By Key → cria relatório completo


//--------------------------------------//
// 🔹 SplitInBatches Node
//--------------------------------------//

// Divide grandes volumes de dados em lotes menores
// útil pra não sobrecarregar APIs

// Exemplo:
// 500 linhas → SplitInBatches 50 → processa 10 vezes


//--------------------------------------//
// 🔹 HTTP Request Node
//--------------------------------------//

// Faz chamadas GET, POST, PUT, DELETE para APIs externas
// Aceita JSON, query params, headers

// Exemplo GET:
// URL: https://api.exemplo.com/users
// Method: GET

// Exemplo POST:
// JSON Body: { "nome": "Bruno", "idade": 16 }


//--------------------------------------//
// 🔹 Webhook Node
//--------------------------------------//

// Recebe dados de apps externos e inicia workflow
// Muito usado para integrações rápidas

// Exemplo:
// Webhook recebe JSON → Function Node → envia mensagem no Slack


//--------------------------------------//
// 🔹 Loop e Repetição
//--------------------------------------//

// N8N não possui loops explícitos como for/while
// Mas você pode usar:
// SplitInBatches → processar item por item
// Function Node → processar arrays com map/filter
// Merge Node → combinar resultados depois


//--------------------------------------//
// 🔹 Variables e Mapeamento
//--------------------------------------//

// Dados entre nós passam em formato JSON
// Cada nó recebe "item.json" e pode manipular campos

// Exemplo:
// item.json.nome → usado no próximo nó
// item.json.idade → calculada ou transformada


//--------------------------------------//
// 🔹 Error Handling
//--------------------------------------//

// N8N permite configuração de "Error Workflow"
// ou ativar "Continue On Fail" em nós individuais
// útil para não parar workflow em caso de erro


//--------------------------------------//
// 🔹 Common Integrations
//--------------------------------------//

// Google Sheets → ler / escrever linhas
// Gmail → enviar e-mail
// Slack / Discord → enviar mensagem
// Notion → criar páginas / atualizar
// HTTP Request → conectar qualquer API
// Webhook → receber dados externos


//--------------------------------------//
// 🔹 Boas Práticas
//--------------------------------------//

// 1. Nomeie nós claramente
// 2. Use Set / Function Nodes para organizar dados
// 3. Teste workflow parte por parte
// 4. Use SplitInBatches pra grandes volumes
// 5. Configure Error Handling pra evitar travamentos
// 6. Sempre execute manualmente antes de agendar


//--------------------------------------//
// 🔹 Exemplo de Workflow Completo
//--------------------------------------//

// Trigger: Webhook recebe pedido
// ↓
// Function Node: adiciona campos "fullName" e "total"
// ↓
// IF Node:
//     |-> status = "aprovado" → envia e-mail (Gmail Node)
//     |-> status ≠ "aprovado" → log no Notion
// ↓
// Fim do Workflow


//--------------------------------------//
// 🔹 Dica Final
//--------------------------------------//

// Se tu entende:
// - como os dados passam entre nós
// - como condicionar fluxos
// - como transformar valores com Function ou Set
// já domina 80% do n8n.
