let bau_aberto = false;
const bau = document.getElementById('bau')
let bauimagem = document.getElementById('bau_img')
let iout = null;
let piada = document.getElementById('piadacontainer');
let img = document.getElementById('imgcontainer');

const imagens = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'i11', 'i12', 'i13', 'i14', 'i15'];
let imagem_escolhida = Math.floor(Math.random() * imagens.length);
const piadas = [
    "Qual é a panela que está sempre triste? A panela depressão.",
    "Por que o Napoleão era convidado para as festas? Porque ele era bom na party.",
    "Você sabe qual é o contrário de volátil? Vem cá, sobrinho.",
    "Como se chama o coveiro do cemitério? Seu Pultura.",
    "Qual é o peixe que caiu do 10º andar? O aaaaaaatuuuum.",
    "Por que as plantinhas não falam? Porque elas são mudinhas.",
    "Qual a cidade brasileira que não possui táxis? Uberlândia.",
    "O que o ferro de passar disse para a roupa? Dá licença que eu quero passar.",
    "Por que o pinheiro não se perde? Porque ele tem uma pinha.",
    "Qual é o funk que o piolho odeia? É o pente, é o pente...",
    "Por que a galinha bateu a cabeça na parede? Pra ficar com o galo.",
    "Qual a fórmula da água benta? H Deus O!",
    "Qual é o programa favorito dos Vingadores? Domingão com Hulk.",
    "O que o instrutor de carro foi fazer no forró? Foi ensinar o Frank Aguiar.",
    "O que o Pai Google falou para o filho Google no jantar? Google... Chrome.",
    "Por que o relógio da parede estava atrasado? Porque estava sempre atrasado!",
    "Qual a galinha que sempre que cai, surta? A galinha cai-pira.",
    "Como é a comida do peixe? Molhada.",
    "Qual a diferença entre o vaso e a pilha? A pilha tem carga e o vaso descarga.",
    "Qual parte da galinha tem mais penas? Na parte de fora.",
    "Por que o ferro de passar caiu da mesa? Porque ele passou mal.",
    "Qual o X-Men que está sempre no trabalho? Noturno.",
    "Por que no Dia dos Namorados o comércio vende mais? Porque mãe a gente só tem uma.",
    "Por que a vaca dá leite? Porque ela não sabe vender.",
    "Por que o pinheiro não se perde? Porque ele tem um mapinha.",
    "O que o Faustão falou para a Chapeuzinho Vermelho? Ô lobo meu...",
    "Qual é a música do pinguim? Sou frio, sou frio.",
    "O que aconteceu com o número 6? Virou meia.",
    "Como a formiga chama o elefante? Amigo de infância.",
    "Sabe o que o zero disse para o oito? Belo cinto!",
    "O que a vaca foi fazer no espaço? Procurar a Via Láctea.",
    "Por que o tomate foi ao banco? Porque ele queria extrato.",
    "O que o papel falou para a impressora? Me dê um pouco de tinta!",
    "Qual é o cúmulo do azar? Cair de costas do cavalo e quebrar o nariz.",
    "Qual é a comida que liga e desliga? Lasanha.",
    "Qual é a fruta mais divertida? A laranjinha.",
    "Como o elétron atende ao telefone? Próton, quem fala?",
    "Por que o livro foi ao médico? Porque tinha muitas páginas amarelas.",
    "Qual é o animal que come com o rabo? Todos, porque não podem tirar o rabo pra comer.",
    "Qual é o cúmulo da rapidez? Fechar a geladeira e pegar frio no raio-x.",
    "Qual é o pão favorito do fantasma? Pão assombração.",
    "O que o gato disse para o rato? Para de miar, é hora de trabalhar.",
    "Por que o cachorro entrou na igreja? Porque ouviu latir.",
    "Qual é o time do maluco? O São Louco.",
    "Qual é o objeto mais fofo da casa? A almofada.",
    "Qual é o carro preferido dos egípcios? O Farao.",
    "O que a galinha disse para o pintinho? Você está pintando muito bem.",
    "O que o trem falou para a locomotiva? Anda logo, que eu tô no pique.",
    "Qual é a piada mais rápida? Essa não, porque você já leu.",
    "O que o relógio fez no fim de semana? Deu um tempo."
];

function toggleImagens() {
    iout = "imagens";
}

function toggleTexto() {
    iout = "texto";
}

switch (iout) {
    case "imagens":
        img.disabled = false;
        toggleBau();
        break;
    case "texto":
        piada.disabled = false;
        toggleBau();
        break;
    default:
        console.log('algodeumitoerrado');
}

function toggleBauPiada() {
    if (bau_aberto===false) {
        bau_aberto=true;
        bauimagem.src = 'imgs/bauaberto.png';
        bau.classList.add('aberto');
    } else if (bau_aberto) {
        bau_aberto=false;
        bauimagem.src = 'imgs/baufechado.png';
        bau.classList.remove('aberto');
        img.src = `imagensarray/${imagens[imagem_escolhida]}`
    } else {
        console.log("algodeuerrado");
    }
}

function toggleBauImgs() {
    if (bau_aberto===false) {
        bau_aberto=true;
        bauimagem.src = 'imgs/bauaberto.png';
        bau.classList.add('aberto')
        
    } else if (bau_aberto) {
        bau_aberto=false;
        bauimagem.src = 'imgs/baufechado.png';
        bau.classList.remove('aberto')
    } else {
        console.log("algodeuerrado");
    }
}
