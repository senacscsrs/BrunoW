const allQuestions = [
  {
    question: "Quem atuou como protagonista no filme 'Clube da Luta'?",
    options: ["Veigh", "Morgan Freeman", "George Washington", "Brad Pitt"],
    correctOption: 3
  },
  {
    question: "Qual dos alimentos a seguir são tóxicos para o corpo?",
    options: ["Suco de Laranja", "Mola retirada de um trator John Deere", "Água Sanitária", "Tijolo (Vermelho)"],
    correctOption: 2
  },
  {
    question: "Quem é maior, Neymar ou Cafu?",
    options: ["Neymar", "Cafu"],
    correctOption: 0 
  },
  {
    question: "Quem escreveu 'Romeu e Julieta'?",
    options: ["Rony (do Palmeiras)", "William Shakespeare", "Barack Obama", "Machado de Assis"],
    correctOption: 1
  },
  {
    question: "Qual o maior planeta do sistema solar?",
    options: ["Júpiter", "O Sol", "Lua", "Gordão da XJ"],
    correctOption: 0
  },
  {
    question: "Com quantos anos o Pelé morreu?",
    options: ["4", "82", "não sei", "97"],
    correctOption: 1
  },
  {
    question: "Qual a taxa de mortalidade entre pessoas que cometeram suicídio?",
    options: ["0%", "20%", "70%", "100%"],
    correctOption: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById('startGame');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('nextQuestion');
const scoreDisplay = document.getElementById('score');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);

function startGame() {
  startButton.style.display = 'none';
  quizContainer.style.display = 'block';
  scoreDisplay.style.display = 'none';
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = allQuestions[currentQuestionIndex];
  questionElement.textContent = q.question;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.addEventListener('click', () => selectOption(index, btn));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(index, btn) {
  const q = allQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(b => b.disabled = true);

  if (index === q.correctOption) {
    btn.style.backgroundColor = 'green';
    score++;
  } else {
    btn.style.backgroundColor = 'red';
    buttons[q.correctOption].style.backgroundColor = 'green';
  }

  nextButton.style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < allQuestions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  quizContainer.style.display = 'none';
  scoreDisplay.style.display = 'block';
  scoreDisplay.textContent = `Você acertou ${score} de ${allQuestions.length}!`;
  startButton.style.display = 'block';
  startButton.textContent = 'Jogar novamente';
}
