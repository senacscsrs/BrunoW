// 15. Use switch para verificar a cor de um semáforo ("vermelho", "amarelo", 
// "verde") e mostre no console a ação correspondente. 

let corSemaforo = "verde";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção"); 
        break;
    case "verde":
        console.log("Siga");    
        break;
    default:
        console.log("Sinaleira desligada");
        break;
}
