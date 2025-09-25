// 29. Crie um do/while que mostre um menu com três opções (simulado com 
// uma variável) e só saia quando a opção for "sair".

let opcao = 1;

do {
    if (opcao === 1) {
        opcao++;
    } else if (opcao === 2) {
        opcao++;
    } else {
        opcao = "sair";
        console.log("sair");
    }
} while (opcao !== "sair");
