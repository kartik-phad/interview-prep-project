// quiz.js
import { javaEasy, javaMedium, javaHard } from './data/java.js';
import { pythonEasy, pythonMedium, pythonHard } from './data/python.js';
// ... Add other techs if needed

const params = new URLSearchParams(window.location.search);
const tech = params.get('tech');     // e.g., "java"
const level = params.get('level');   // e.g., "easy"

let questions = [];

if (tech === 'java') {
  if (level === 'easy') questions = javaEasy;
  else if (level === 'medium') questions = javaMedium;
  else if (level === 'hard') questions = javaHard;
} else if (tech === 'python') {
  if (level === 'easy') questions = pythonEasy;
  else if (level === 'medium') questions = pythonMedium;
  else if (level === 'hard') questions = pythonHard;
}

const quizTitle = document.getElementById('quiz-title');
const quizContainer = document.getElementById('quiz-container');

if (questions.length > 0) {
  quizTitle.textContent = `Quiz: ${tech.toUpperCase()} - ${level.toUpperCase()}`;
  questions.forEach((q, index) => {
    const qEl = document.createElement('div');
    qEl.classList.add('question');
    qEl.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      <ul>
        ${q.options.map(option => `<li><button>${option}</button></li>`).join('')}
      </ul>
    `;
    quizContainer.appendChild(qEl);
  });
} else {
  quizTitle.textContent = "No questions found for this topic/level.";
}
