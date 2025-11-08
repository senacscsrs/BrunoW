const modal = document.getElementById('cmdModal');
const cmdOutput = document.getElementById('cmdOutput');
const cmdInput = document.getElementById('cmdInput');

// Sobre Mim
function openCmdModalSobre() {
    modal.classList.add('show');
    cmdOutput.innerHTML =
`C:\\Usuario\\Portfolio&gt;<br>
Nome: Bruno Wojahn<br>
O que eu faço: JavaScript, Make.com, Agentes de IA usando n8n e Desenvolvimento Front-end<br>
C:\\Usuario\\Portfolio&gt;`;
    cmdInput.style.display = "none";
}

// Contato (com links clicáveis)
function openCmdModalContato() {
    modal.classList.add('show');
    cmdOutput.innerHTML =
`C:\\Usuario\\Portfolio&gt; type contact.txt<br>
Linkedin: <a class="modallinks" href="https://www.linkedin.com/in/bruno-wojahn-510863389/" target="_blank" rel="noopener">linkedin.com/bruno-wojahn</a><br>
Instagram: <a class="modallinks" href="https://www.instagram.com/brwojahn/" target="_blank" rel="noopener">instagram.com/brwojahn</a><br>
GitHub: <a class="modallinks" href="https://github.com/brwojahn" target="_blank" rel="noopener">github.com/brwojahn</a><br>
C\\Usuario\\Portfolio&gt;`;
    cmdInput.style.display = "none";
}

// Projetos (com seleção e links)
function openCmdModalProjects() {
    modal.classList.add('show');
    cmdOutput.innerHTML =
`C:\\Usuario\\Portfolio&gt;projetos<br><br>
Selecione um tipo de projeto:<br>
1 para Escolares<br>
2 para Pessoais<br>
3 para Profissionais<br>
Digite "voltar" para voltar à seleção<br>
C\\Usuario\\Portfolio&gt;`;
    cmdInput.value = '';
    cmdInput.style.display = "block";
    cmdInput.focus();
}

// Input logic para seleção dos projetos
cmdInput.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('show') || cmdInput.style.display === "none") return;
    if (e.key === 'Enter') {
        let value = cmdInput.value.trim().toLowerCase();
        let out = "";
        switch (value) {
            case "1":
                out =
`C:\\Usuario\\Portfolio&gt; Projetos Escolares<br>
- <a href="../../projetos/11-06-25/index.html" target="_blank" rel="noopener noreferrer">Hello World</a> — Projeto inicial mostrando o básico em programação.<br>
- <a href="../../projetos/09-06-25/index.html" target="_blank" rel="noopener noreferrer">Imagens e Tamanhos</a> — Manipulação de imagens e responsividade.<br>
- <a href="../../boair/index.html" target="_blank" rel="noopener noreferrer">BoAir</a> — Desenvolvido com Bruno W e Pedro B.<br>
- <a href="../../projetos/gasolina/index.html" target="_blank" rel="noopener noreferrer">Calculador de Gasolina</a> — Calculadora de abastecimento.<br>
- <a href="../../projetos/trabalhodesafio/index.html" target="_blank" rel="noopener noreferrer">Desafio Trabalho</a> — Simulação de problema real de empresa usando JS.<br>
Digite "voltar" para voltar à seleção<br>
C\\Usuario\\Portfolio&gt;`;
                break;
            case "2":
                out =
`C:\\Usuario\\Portfolio&gt; Projetos Pessoais<br>
- <a href="../../projetos/primeirojs/index.html" target="_blank" rel="noopener noreferrer">Red vs. Blue</a> — Lógica e JavaScript.<br>
- <a href="../../projetos/colorswitch/index.html" target="_blank" rel="noopener noreferrer">Gerador de Cor</a> — Gera cor RGB aleatória.<br>
- <a href="../../projetos/chute/index.html" target="_blank" rel="noopener noreferrer">Chute</a> — Verificador de número.<br>
- <a href="../../projetos/simon/index.html" target="_blank" rel="noopener noreferrer">Simon</a> — Jogo de memória.<br>
- <a href="../../projetos/multiple choice/index.html" target="_blank" rel="noopener noreferrer">Multipla Escolha</a> — Quiz simples.<br>
- <a href="../../projetos/jogodavelha/index.html" target="_blank" rel="noopener noreferrer">Jogo da Velha</a> — Jogo clássico.<br>
Digite "voltar" para voltar à seleção<br>
C\\Usuario\\Portfolio&gt;`;
                break;
            case "3":
                out =
`C:\\Usuario\\Portfolio&gt; Projetos Profissionais<br>
- <a href="../../lifecarecandelaria/index.html" target="_blank" rel="noopener noreferrer">LifeCare Candelária</a> — Website para clínica de estética.<br>
Digite "voltar" para voltar à seleção<br>
C\\Usuario\\Portfolio&gt;`;
                break;
            case "voltar":
            case "back":
                openCmdModalProjects();
                return;
            default:
                out =
`C:\\Usuario\\Portfolio&gt;projetos<br><br>
Selecione um tipo de projeto:<br>
1 para Escolares<br>
2 para Pessoais<br>
3 para Profissionais<br>
Digite "voltar" para voltar à seleção<br>
Opção inválida.<br>
C\\Usuario\\Portfolio&gt;`;
        }
        cmdOutput.innerHTML = out;
        cmdInput.value = "";
    }
});

function openCmdCarouselModal() {
    cmdCarouselModal.classList.add('show');
    showCurrentProject();
}

function showCurrentProject() {
    const proj = projects[currentProject];
    carouselOutput.textContent =
`${proj.title}

${proj.description}

(${currentProject + 1}/${projects.length})`;
}

carouselPrev.onclick = function() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showCurrentProject();
};
carouselNext.onclick = function() {
    currentProject = (currentProject + 1) % projects.length;
    showCurrentProject();
};

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.classList.remove('show');
        cmdCarouselModal.classList.remove('show');
    }
});
cmdCarouselModal.addEventListener('click', function(e) {
    if (e.target === cmdCarouselModal) cmdCarouselModal.classList.remove('show');
});
modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.classList.remove('show');
});
