// 27. Peça uma senha (simulada com uma variável) e use do/while para repetir 
// até que ela seja "1234". 

let senhaUsuario = "0000";

do {
    console.log("Senha incorreta, tente novamente");
    senhaUsuario = "1234";
} while (senhaUsuario !== "1234");