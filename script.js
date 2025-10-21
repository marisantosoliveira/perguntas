const questions = [
  {
    question: "Qual a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    answer: 2
  },
  // demais perguntas...
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
