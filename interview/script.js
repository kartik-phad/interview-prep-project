// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const tech = card.getAttribute('data-tech');
        const level = card.getAttribute('data-level');
  
        if (tech && level) {
          // Redirect to quiz.html with query parameters
          window.location.href = `quiz.html?tech=${tech}&level=${level}`;
        } else {
          alert("Tech or level is missing!");
        }
      });
    });
  });
  