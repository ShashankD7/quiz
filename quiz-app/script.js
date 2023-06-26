const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const scoreButton = document.getElementById('score-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreDiv = document.getElementById('score')
const restartButton = document.createElement('button')
restartButton.innerText = 'Restart'
restartButton.classList.add('restart-btn', 'btn', 'hide')

let score = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

scoreButton.addEventListener('click', showScore)
restartButton.addEventListener('click', restartGame)

function startGame() {
  startButton.classList.add('hide')
  scoreButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  if (currentQuestionIndex < 15) {
    showQuestion(shuffledQuestions[currentQuestionIndex])
  } else {
    showScore()
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  scoreButton.classList.add('hide')
  restartButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true; // Disable all answer buttons
      if (button.dataset.correct) {
        button.classList.add('correct');
      }
    });
  
    if (currentQuestionIndex < 14) {
      nextButton.classList.remove('hide');
    } else {
      scoreButton.classList.remove('hide');
    }
  }
  

function showScore() {
  questionContainerElement.classList.add('hide')
  scoreDiv.classList.remove('hide')
  scoreDiv.innerText = `Your score: ${score}/${15}`
  scoreDiv.classList.add('score')
  scoreButton.classList.add('hide')
  restartButton.classList.remove('hide')
  questionContainerElement.parentNode.appendChild(restartButton)
}

function restartGame() {
  score = 0
  scoreDiv.classList.remove('score')
  scoreDiv.classList.add('hide')
  restartButton.classList.add('hide')
  startGame()
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
    {
      question: 'What is the capital of France?',
      answers: [
          { text: 'London', correct: false },
          { text: 'Paris', correct: true },
        { text: 'Rome', correct: false },
        { text: 'Berlin', correct: false }
      ]
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Leonardo da Vinci', correct: true },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Vincent van Gogh', correct: false },
        { text: 'Michelangelo', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
          { text: 'Venus', correct: false },
          { text: 'Jupiter', correct: false },
          { text: 'Saturn', correct: false },
          { text: 'Mars', correct: true },
      ]
    },
    {
      question: 'What is the chemical symbol for gold?',
      answers: [
          { text: 'Ag', correct: false },
          { text: 'Cu', correct: false },
          { text: 'Au', correct: true },
        { text: 'Pt', correct: false }
      ]
    },
    {
      question: 'Who wrote the novel "Pride and Prejudice"?',
      answers: [
          { text: 'Charles Dickens', correct: false },
          { text: 'Mark Twain', correct: false },
          { text: 'Jane Austen', correct: true },
        { text: 'F. Scott Fitzgerald', correct: false }
      ]
    },
    {
      question: 'What is the tallest mountain in the world?',
      answers: [
        { text: 'Mount Everest', correct: true },
        { text: 'K2', correct: false },
        { text: 'Matterhorn', correct: false },
        { text: 'Kilimanjaro', correct: false }
      ]
    },
    {
      question: 'Who is known as the inventor of the telephone?',
      answers: [
          { text: 'Thomas Edison', correct: false },
          { text: 'Alexander Graham Bell', correct: true },
        { text: 'Nikola Tesla', correct: false },
        { text: 'Albert Einstein', correct: false }
      ]
    },
    {
      question: 'Which country is famous for the Great Barrier Reef?',
      answers: [
          { text: 'Brazil', correct: false },
          { text: 'Mexico', correct: false },
          { text: 'Canada', correct: false },
          { text: 'Australia', correct: true },
      ]
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: [
          { text: 'Saturn', correct: false },
          { text: 'Neptune', correct: false },
          { text: 'Jupiter', correct: true },
        { text: 'Uranus', correct: false }
      ]
    },
    {
      question: 'Who painted the famous artwork "The Starry Night"?',
      answers: [
        { text: 'Vincent van Gogh', correct: true },
        { text: 'Salvador Dali', correct: false },
        { text: 'Claude Monet', correct: false },
        { text: 'Pablo Picasso', correct: false }
      ]
    },
    {
      question: 'Which city hosted the 2016 Summer Olympics?',
      answers: [
          { text: 'London', correct: false },
          { text: 'Rio de Janeiro', correct: true },
        { text: 'Beijing', correct: false },
        { text: 'Tokyo', correct: false }
      ]
    },
    {
      question: 'Who is the author of the Harry Potter book series?',
      answers: [
          { text: 'Stephen King', correct: false },
          { text: 'George R.R. Martin', correct: false },
          { text: 'J.K. Rowling', correct: true },
          { text: 'Dan Brown', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the "Blue Planet"?',
      answers: [
          { text: 'Neptune', correct: false },
          { text: 'Earth', correct: true },
        { text: 'Uranus', correct: false },
        { text: 'Mercury', correct: false }
      ]
    },
    {
      question: 'Who painted the ceiling of the Sistine Chapel?',
      answers: [
        { text: 'Michelangelo', correct: true },
        { text: 'Leonardo da Vinci', correct: false },
        { text: 'Raphael', correct: false },
        { text: 'Donatello', correct: false }
      ]
    },
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      answers: [
          { text: 'China', correct: false },
          { text: 'South Korea', correct: false },
          { text: 'Japan', correct: true },
        { text: 'Thailand', correct: false }
      ]
    }
  ];
  