// 26. Crie uma variável senha e simule uma tentativa de senha com while, até 
// que a senha correta "abcd" seja digitada. 

const letras = "abcdefghijklmnopqrstuvwxyz";
let senhaCorreta = "abcd";
let tentativa = "jfdk";

while (tentativa !== senhaCorreta) {
    console.log("Senha incorreta, tente novamente");
    tentativa = "abcd";
}