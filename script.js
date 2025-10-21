const questions = [
  {
    question: "Qual empresa criou a linguagem de programação JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: 2 // Netscape
  },
  {
    question: "O que significa a sigla 'URL'?",
    options: ["User Resource Location", "Uniform Resource Locator", "Universal Remote Link", "Underground Router Line"],
    answer: 1 // Uniform Resource Locator
  },
  {
    question: "Qual destes é um banco de dados relacional popular?",
    options: ["MongoDB", "Redis", "MySQL", "Node.js"],
    answer: 2 // MySQL
  },
  {
    question: "Em qual ano o primeiro iPhone foi lançado?",
    options: ["2005", "2007", "2009", "2010"],
    answer: 1 // 2007
  },
  {
    question: "Qual cor representa o código hexadecimal '#FF0000'?",
    options: ["Azul", "Verde", "Amarelo", "Vermelho"],
    answer: 3 // Vermelho
  },
  {
    question: "Qual termo é usado para descrever um erro em um programa de computador?",
    options: ["Feature", "Patch", "Bug", "Syntax"],
    answer: 2 // Bug
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => selectOption(index);
    optionsEl.appendChild(button);
  });
  nextBtn.style.display = "none";
  scoreEl.textContent = `Pontuação: ${score}`;
}

function selectOption(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if(index === currentQuestion.answer) {
      btn.classList.add("correct");
    }
  });

  if(selectedIndex === currentQuestion.answer) {
    score++;
    optionButtons[selectedIndex].classList.add("correct");
  } else {
    optionButtons[selectedIndex].classList.add("wrong");
  }

  scoreEl.textContent = `Pontuação: ${score}`;
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Fim do jogo!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Pontuação final: ${score} de ${questions.length}`;
  }
};

showQuestion();