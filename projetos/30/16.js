// 16. Crie uma variável notaConceito que pode ser "A", "B", "C", "D" ou "F". Use 
// switch para mostrar a mensagem correspondente à nota. 

let notaConceito = "A"

switch (notaConceito) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Medio");
        break;
    case "D":
        console.log("Incompleto");
        break;
    case "F":
        console.log("Reprovado");
        break;
}